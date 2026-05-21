"use client";

import React, { useEffect, useState } from "react";
import { Loader2, Eye, Edit, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
import { Button } from "@heroui/react";

const MyListings = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adoptionCount, setAdoptionCount] = useState(0);
  const [adoptions, setAdoptions] = useState([]);

  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    if (userId) fetchPets();
  }, [userId]);

  const fetchAdoptions = async () => {
    try {
     const res = await fetch(`${process.env.SERVER_URI}/adoptions`);

if (!res.ok) {
  console.log("API ERROR:", res.status);
  return;
}

const data = await res.json();
setAdoptions(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAdoptions();
  }, []);
  const fetchPets = async () => {
    try {
      const res = await fetch(`${process.env.SERVER_URI}/pets/user/${userId}`);
      const data = await res.json();

      setPets(data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${process.env.SERVER_URI}/adoptions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      console.log(data);

      setPets((prev) =>
        prev.map((pet) => (pet._id === id ? { ...pet, status } : pet)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center p-10">
        <Loader2 className="animate-spin text-orange-500 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4">My Listings Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Total Pets</p>
          <h2 className="text-xl font-bold">{pets.length}</h2>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Total Requests</p>
          <h2 className="text-xl font-bold">

                {adoptions.filter(a => a.status === "pending").length}

          </h2>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Active Listings</p>
          <h2 className="text-xl font-bold">{pets.length}</h2>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Request</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id} className="border-b hover:bg-gray-50">
                {/* IMAGE */}

                <td className="p-3">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    width={65}
                    height={65}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>

                {/* NAME */}
                <td className="p-3 font-medium">{pet.name}</td>

                {/* PRICE */}
                <td className="p-3">${pet.fee}</td>

                {/* REQUESTS */}
                <td className="p-3 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
          <span>
  {adoptions.filter(
    (a) => String(a.petId) === String(pet._id)
  ).length || 0}
</span>
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {/* VIEW */}
                    <Link href={`/all-pets/${pet._id}`}>
                      <Button className="bg-blue-500 text-white px-3 py-1 rounded-sm  text-xs">
                        <Eye size={14} className="inline mr-1" />
                        View
                      </Button>
                    </Link>

                    {/* EDIT */}
                    <EditModal pet={pet} />

                    {/* REQUESTS */}
                    <Link
                      href={`/dashboard/adoption-request-page/${pet?._id}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs flex items-center gap-1 transition w-fit"
                    >
                      <Users size={14} />
                      Requests
                    </Link>

                    {/* DELETE */}
                    <DeleteModal pet={pet} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pets.length === 0 && (
          <div className="text-center text-gray-500 p-6">No pets found</div>
        )}
      </div>

      {pets.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No pets found</div>
      )}
    </div>
  );
};

export default MyListings;

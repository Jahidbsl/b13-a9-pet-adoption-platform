"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  PawPrint,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Loader2,
  View,
} from "lucide-react";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import CancelModal from "@/components/CancelModal";
import { authClient } from "@/lib/auth-client";

const AdoptionTable = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [loading, setLoading] = useState(true);
    const { data: session } = authClient.useSession();

  const userId = session?.user?.id;


 useEffect(() => {
  if (userId) {
    fetchAdoptions();
  }
}, [userId]);

const fetchAdoptions = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/adoptions/user/${userId}`
    );

    const data = await res.json();

    setAdoptions(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loader2 className="animate-spin w-10 h-10 text-orange-500" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Adoption Requests</h1>

        <p className="text-gray-500 mt-2">
          Manage all pet adoption applications
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white">
            <tr>
              <th className="px-6 py-5 text-left font-semibold">Pet</th>

              <th className="px-6 py-5 text-left font-semibold">User</th>

              <th className="px-6 py-5 text-left font-semibold">Contact</th>

              <th className="px-6 py-5 text-left font-semibold">Address</th>

              <th className="px-6 py-5 text-left font-semibold">Message</th>

              <th className="px-6 py-5 text-left font-semibold">Status</th>

              <th className="px-6 py-5 text-left font-semibold">Date</th>
              <th className="px-6  py-5 text-left font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {adoptions?.map((adoption, index) => (
              <tr
                key={adoption?._id}
                className={`border-b border-gray-100 hover:bg-purple-50 transition ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                {/* Pet */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border">
                      {adoption?.petImage ? (
                        <Image
                          src={adoption.petImage}
                          alt={adoption.petName}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-200 text-xs text-gray-500">
                          No Image
                        </div>
                      )}
                    </div>

                    <div>
                      <h2 className="font-bold text-gray-800 flex items-center gap-2">
                        <PawPrint size={16} className="text-orange-500" />
                        {adoption?.petName}
                      </h2>

                      <p className="text-sm text-gray-500">
                        Pet ID: {adoption?.petId}
                      </p>
                    </div>
                  </div>
                </td>

                {/* User */}
                <td className="px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {adoption?.userName}
                    </h3>

                    <p className="text-sm text-gray-500">
                      User ID: {adoption?.userId}
                    </p>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-6 py-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Mail size={15} className="text-orange-500" />

                      {adoption?.userEmail}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone size={15} className="text-orange-500" />

                      {adoption?.phone}
                    </div>
                  </div>
                </td>

                {/* Address */}
                <td className="px-6 py-5">
                  <div className="flex items-start gap-2 text-sm text-gray-700 max-w-[200px]">
                    <MapPin size={16} className="text-orange-500 mt-0.5" />

                    <span>{adoption?.address}</span>
                  </div>
                </td>

                {/* Message */}
                <td className="px-6 py-5">
                  <p className="text-sm text-gray-700 max-w-[260px] line-clamp-3">
                    {adoption?.message}
                  </p>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold ${
                      adoption?.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : adoption?.status === "accepted"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {adoption?.status}
                  </span>
                </td>

                {/* Date */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CalendarDays size={15} className="text-orange-500" />

                    {new Date(adoption?.adoptionDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-5 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Link
                      href={`/all-pets/${adoption?.petId}`}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CancelModal adoption={adoption} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {adoptions.length === 0 && (
          <div className="py-20 text-center">
            <PawPrint className="mx-auto w-14 h-14 text-gray-300 mb-4" />

            <h2 className="text-2xl font-bold text-gray-700">
              No Adoption Requests
            </h2>

            <p className="text-gray-500 mt-2">
              Adoption requests will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdoptionTable;

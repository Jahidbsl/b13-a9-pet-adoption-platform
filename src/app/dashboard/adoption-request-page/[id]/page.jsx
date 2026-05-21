"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  CheckCircle,
  XCircle,
  Loader2,
  User,
  PawPrint,
  CalendarDays,
  Mail,
  MessageSquare,
} from "lucide-react";
import { toast } from "react-toastify";
import Image from "next/image";

const AdoptionRequestDetailsPage = () => {
  const { id } = useParams();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH
  const fetchRequests = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/adoptions/pet/${id}`
      );

      const data = await res.json();
      setRequests(data || []);
    } catch (error) {
      toast.error("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchRequests();
  }, [id]);

  // STATUS UPDATE
  const handleStatusChange = async (requestId, status) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/adoptions/${requestId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success(`Updated to ${status}`);

        setRequests((prev) =>
          prev.map((r) =>
            r._id === requestId ? { ...r, status } : r
          )
        );
      }
    } catch (error) {
      toast.error("Update failed");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-purple-500" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#F8F5FF] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Adoption Requests
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {requests.map((req) => (
          <div
            key={req._id}
            className="bg-white rounded-2xl shadow p-5"
          >
            {/* PET IMAGE + NAME */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 relative">
                <Image
                  src={req.petImage}
                  alt={req.petName}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>

              <div>
                <h2 className="font-bold text-lg flex items-center gap-2">
                  <PawPrint size={16} />
                  {req.petName}
                </h2>

                <p className="text-sm text-gray-500">
                  ID: {req.petId}
                </p>
              </div>
            </div>

            {/* USER INFO */}
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <User size={16} />
                <span className="font-semibold">
                  {req.userName || "Unknown User"}
                </span>
              </div>

              <div className="flex gap-3 items-center text-gray-600">
                <Mail size={16} />
                {req.userEmail}
              </div>

              <div className="flex gap-3 items-start">
                <MessageSquare size={16} className="mt-1" />
                <p>{req.message}</p>
              </div>

              <div className="flex gap-3 items-center text-gray-600">
                <CalendarDays size={16} />
                {new Date(req.createdAt).toLocaleDateString()}
              </div>
            </div>

            {/* STATUS */}
            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  req.status === "approved"
                    ? "bg-green-500"
                    : req.status === "rejected"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              >
                {req.status || "pending"}
              </span>
            </div>

            {/* ACTIONS */}
            {req.status === "pending" || !req.status ? (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() =>
                    handleStatusChange(req._id, "approved")
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
                >
                  <CheckCircle size={16} className="inline" /> Approve
                </button>

                <button
                  onClick={() =>
                    handleStatusChange(req._id, "rejected")
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg w-full"
                >
                  <XCircle size={16} className="inline" /> Reject
                </button>
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-4">
                Action completed
              </p>
            )}
          </div>
        ))}
      </div>

      {requests.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No requests found
        </p>
      )}
    </div>
  );
};

export default AdoptionRequestDetailsPage;
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  CheckCircle,
  Clock,
  XCircle,
  Loader2,
  User,
  PawPrint,
  CalendarDays,
} from "lucide-react";
import { toast } from "react-toastify";

const AdoptionRequestDetailsPage = () => {
  const { id } = useParams();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch requests
  const fetchRequests = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/adoptions/pet/${id}`
      );

      const data = await res.json();

      setRequests(data || []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRequests();
    }
  }, [id]);

  // status update
  const handleStatusChange = async (requestId, status) => {
    try {
      const res = await fetch(
        `http://localhost:5000/adoptions/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success(`Status updated to ${status}`);

        const updatedRequests = requests.map((item) =>
          item._id === requestId
            ? { ...item, status }
            : item
        );

        setRequests(updatedRequests);
      }
    } catch (error) {
      console.log(error);
      toast.error("Status update failed");
    }
  };

  // loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="w-12 h-12 animate-spin text-purple-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5FF] p-4 md:p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Adoption Requests
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all adoption requests for this pet
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-3xl shadow-md p-6 border border-purple-100">
          <h3 className="text-gray-500 text-sm">
            Total Requests
          </h3>

          <p className="text-3xl font-bold text-purple-600 mt-2">
            {requests.length}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border border-green-100">
          <h3 className="text-gray-500 text-sm">
            Approved
          </h3>

          <p className="text-3xl font-bold text-green-500 mt-2">
            {
              requests.filter(
                (item) => item.status === "approved"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border border-yellow-100">
          <h3 className="text-gray-500 text-sm">
            Pending
          </h3>

          <p className="text-3xl font-bold text-yellow-500 mt-2">
            {
              requests.filter(
                (item) =>
                  !item.status ||
                  item.status === "pending"
              ).length
            }
          </p>
        </div>
      </div>

      {/* REQUEST CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {requests.map((request, index) => (
          <div
            key={request._id}
            className="bg-white rounded-[28px] shadow-lg border border-purple-100 p-6 hover:shadow-2xl transition-all duration-300"
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Request #{index + 1}
                </h2>

                <p className="text-sm text-gray-500">
                  Adoption Request Details
                </p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold text-white
                ${
                  request.status === "approved"
                    ? "bg-green-500"
                    : request.status === "rejected"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              >
                {request.status || "pending"}
              </span>
            </div>

            {/* INFO */}
            <div className="space-y-4">
              {/* USER */}
              <div className="flex items-center gap-4 bg-[#FAF5FF] p-4 rounded-2xl">
                <div className="bg-purple-500 text-white p-3 rounded-xl">
                  <User size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    User ID
                  </p>

                  <p className="font-semibold text-gray-800 break-all">
                    {request.userId}
                  </p>
                </div>
              </div>

              {/* PET */}
              <div className="flex items-center gap-4 bg-[#FAF5FF] p-4 rounded-2xl">
                <div className="bg-pink-500 text-white p-3 rounded-xl">
                  <PawPrint size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Pet ID
                  </p>

                  <p className="font-semibold text-gray-800 break-all">
                    {request.petId}
                  </p>
                </div>
              </div>

              {/* DATE */}
              <div className="flex items-center gap-4 bg-[#FAF5FF] p-4 rounded-2xl">
                <div className="bg-green-500 text-white p-3 rounded-xl">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Request Date
                  </p>

                  <p className="font-semibold text-gray-800">
                    {new Date(
                      request.adoptedAt
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() =>
                  handleStatusChange(
                    request._id,
                    "approved"
                  )
                }
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <CheckCircle size={18} />
                Approve
              </button>

              <button
                onClick={() =>
                  handleStatusChange(
                    request._id,
                    "pending"
                  )
                }
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <Clock size={18} />
                Pending
              </button>

              <button
                onClick={() =>
                  handleStatusChange(
                    request._id,
                    "rejected"
                  )
                }
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <XCircle size={18} />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {requests.length === 0 && (
        <div className="bg-white rounded-3xl shadow-md p-16 text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-700 mb-3">
            No Requests Found
          </h2>

          <p className="text-gray-500">
            No adoption requests available for this pet.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdoptionRequestDetailsPage;
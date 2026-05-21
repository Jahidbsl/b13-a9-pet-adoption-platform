"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { toast } from "react-toastify";

const AddpetPage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

   const Alldata = {
    ...Object.fromEntries(formData.entries()),
    userId: user?.id,
  };

  console.log(Alldata);

  try {
    const res = await fetch("http://localhost:5000/add-pet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify( Alldata),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      e.target.reset();
      toast.success("Pet added successfully!");
    } else {
      toast.error(data.message || "Failed to add pet");
    }
  } catch (error) {
    console.log(error);
    toast.error("Server error");
  }
};
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Add a New Pet
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Fill in the details to add a new pet for adoption.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* <div>
            <label className="block text-gray-700 font-semibold mb-2">
              User ID
            </label>

            <input
              type="text"
              name="userId"
              defaultValue={user?.id}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div> */}
          {/* Pet Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pet Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter pet name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Species */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Species
            </label>

            <select
              name="species"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            >
              <option value="">Select Species</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Breed */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Breed
            </label>

            <input
              type="text"
              name="breed"
              placeholder="Enter breed"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Age
            </label>

            <input
              type="number"
              name="age"
              placeholder="Enter age"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Gender
            </label>

            <select
              name="gender"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Image URL
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Health Status */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Health Status
            </label>

            <input
              type="text"
              name="health"
              placeholder="Healthy / Injured / Special Care"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Vaccination Status */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Vaccination Status
            </label>

            <select
              name="vaccination"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            >
              <option value="">Select Status</option>
              <option value="Vaccinated">Vaccinated</option>
              <option value="Not Vaccinated">Not Vaccinated</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Adoption Fee */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Adoption Fee
            </label>

            <input
              type="number"
              name="fee"
              placeholder="Enter adoption fee"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          {/* status */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Status
            </label>

            <select
              name="status"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            >
              <option value="available">Available</option>
              <option value="featured">Featured</option>
              <option value="pending">Pending</option>
              <option value="adopted">Adopted</option>
            </select>
          </div>

          {/* Owner Email */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Owner Email
            </label>

            <input
              type="email"
              name="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Write something about the pet..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white font-semibold py-3 rounded-lg hover:from-[#7C3AED] hover:to-[#EC4899] transition duration-300"
            >
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddpetPage;

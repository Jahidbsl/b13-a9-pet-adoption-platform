"use client";

import Image from "next/image";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";

const petsData = [
  {
    id: 1,
    name: "Bella",
    type: "Dog",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    location: "Chattogram",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 3,
    name: "Max",
    type: "Dog",
    location: "Barishal",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e",
  },
  {
    id: 4,
    name: "Milo",
    type: "Cat",
    location: "Sylhet",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
  },
];

const AllPetsPage = () => {
  const [search, setSearch] = useState("");

  const filteredPets = petsData.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-[#FAF5FF] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-gray-500 mt-2 flex items-center gap-3 justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B5CF6]">
              All Pets 
            </h1>
            <Image
              src={
                "https://images.emojiterra.com/google/android-12l/512px/1f43e.png"
              }
              alt="logo"
              width={40}
              height={40}
              
            />
          </div>
          <p className="text-gray-600 mt-3">
            Find your perfect companion and give them a loving home
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search pets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-5 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={400}
                  height={300}
                  className="h-56 w-full object-cover"
                />

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <Heart size={18} className="text-[#F472B6]" />
                </button>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-[#374151]">{pet.name}</h2>

                <p className="text-sm text-gray-500">{pet.type}</p>

                <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                  <MapPin size={16} />
                  {pet.location}
                </div>

                <button className="mt-5 w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-2 rounded-2xl transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPets.length === 0 && (
          <div className="text-center mt-16 text-gray-500">
            No pets found 😢
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPetsPage;

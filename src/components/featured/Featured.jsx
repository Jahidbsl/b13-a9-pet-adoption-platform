'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Featured = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchFeaturedPets();
  }, []);

  const fetchFeaturedPets = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/pets`);
      const data = await res.json();

      const featured = data
        .filter((pet) => pet.status === "featured")
        .slice(0, 8);

      setPets(featured);
    } catch (err) {
      console.log(err);
    }
  };

  return (
 <div className="bg-[#FAF5FF] py-12">
  <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
    Featured Pets
  </h1>

  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {pets.slice(0, 8).map((pet) => (
      <div
        key={pet._id}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-100 flex flex-col"
      >

        {/* IMAGE */}
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={pet.image}
            alt={pet.name}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* badge */}
          <div className="absolute top-3 left-3 bg-[#8B5CF6] text-white text-xs px-3 py-1 rounded-full shadow">
            Featured
          </div>

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col justify-between flex-1">

          <div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#8B5CF6] transition">
              {pet.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {pet.breed} • {pet.age} yrs
            </p>

            <p className="text-xs text-gray-400 mt-2">
              📍 {pet.location || "Dhaka"}
            </p>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between mt-4">

            <span className="text-[#34D399] font-bold text-base">
              ${pet.fee}
            </span>

            <Link href={`/all-pets/${pet._id}`}>
              <button className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white text-sm px-4 py-2 rounded-xl hover:opacity-90 transition">
                View Details
              </button>
            </Link>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Featured;
"use client";

import AllPetsCard from "@/components/AllPetsCard";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";

const AllPetsPage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;


  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState([]);

  // species list
  const speciesOptions = [
    "Dog",
    "Cat",
    "Bird",
    "Rabbit",
    "Fish",
  ];

  // fetch pets
  const fetchPets = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      // search by name
      if (search) {
        params.append("search", search);
      }

      // filter by species
      if (species.length > 0) {
        params.append("species", species.join(","));
      }




      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/pets?${params.toString()}`,{
         
        }
      );

      const data = await res.json();

      setPets(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // fetch when filters change
  useEffect(() => {
    fetchPets();
  }, [search, species]);

  // species toggle
  const handleSpeciesChange = (item) => {
    if (species.includes(item)) {
      setSpecies(species.filter((sp) => sp !== item));
    } else {
      setSpecies([...species, item]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] py-10 px-4">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800">
          All Pets for Adoption
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Browse through adorable pets looking for a forever home.
        </p>
      </div>

      {/* FILTER SECTION */}
      <div className="max-w-7xl mx-auto mt-10 bg-white rounded-[32px] shadow-xl border border-purple-100 p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* SEARCH */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Search Pets by Name
            </label>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search by pet name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* SPECIES FILTER */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Filter by Species
            </label>

            <div className="flex flex-wrap gap-3">
              {speciesOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => handleSpeciesChange(item)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                    ${
                      species.includes(item)
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white shadow-lg"
                        : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RESULT INFO */}
      <div className="max-w-7xl mx-auto mt-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Available Pets
        </h2>

        <p className="text-gray-500">
          {pets.length} pets found
        </p>
      </div>

      {/* PET LIST */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <AllPetsCard key={pet._id} pet={pet} />
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && pets.length === 0 && (
        <div className="text-center py-24">
          <h2 className="text-3xl font-bold text-gray-700">
            No Pets Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllPetsPage;
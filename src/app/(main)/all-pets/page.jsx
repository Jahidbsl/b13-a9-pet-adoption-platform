"use client";

import AllPetsCard from "@/components/AllPetsCard";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";

const AllPetsPage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [pets, setPets] = useState([]);

useEffect(() => {
  const fetchPets = async () => {
    const res = await fetch("http://localhost:5000/pets", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    
    setPets(data);
  };

  fetchPets();
}, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        All Pets for Adoption
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Browse through our list of adorable pets looking for a forever home.
      </p>

      {/* Pet List */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        {pets.map((pet) => (
          <AllPetsCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
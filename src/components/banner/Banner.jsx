import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F472B6]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-purple-100">
              <Sparkles size={16} className="text-[#F472B6]" />

              <span className="text-sm font-medium">
                Thousands of pets need a loving home
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
              Adopt a Pet &
              <span className="text-[#8B5CF6]"> Change a Life</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover adorable pets waiting for a forever family. Bring
              happiness home and create unforgettable memories together.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition text-white px-7 py-4 rounded-2xl shadow-xl shadow-purple-200 font-semibold">
                Adopt Now
              </button>

              <button className="bg-white border border-purple-200 hover:border-[#F472B6] hover:text-[#F472B6] transition px-7 py-4 rounded-2xl font-semibold">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="bg-white rounded-3xl p-5 shadow-md">
                <h2 className="text-3xl font-bold text-[#8B5CF6]">5K+</h2>
                <p className="text-sm text-gray-500 mt-1">Pets Adopted</p>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-md">
                <h2 className="text-3xl font-bold text-[#F472B6]">2K+</h2>
                <p className="text-sm text-gray-500 mt-1">Happy Families</p>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-md">
                <h2 className="text-3xl font-bold text-[#34D399]">98%</h2>
                <p className="text-sm text-gray-500 mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 to-[#F472B6]/20 rounded-[40px] blur-2xl"></div>

            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Pet"
              width={700}
              height={700}
              className="relative rounded-[40px] shadow-2xl object-cover 
    w-full h-[350px] sm:h-[450px] lg:h-[650px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

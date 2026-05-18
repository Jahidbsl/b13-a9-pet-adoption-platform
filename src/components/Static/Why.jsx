import { HeartHandshake, PawPrint, ShieldCheck } from 'lucide-react';
import React from 'react';

const WhyAdoptPage = () => {
    return (
             <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold">
              Why Adopt Pets?
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Every pet deserves love, care, and a forever
              family. Adoption changes lives forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-lg hover:-translate-y-2 transition duration-300 border border-purple-100">
              <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center">
                <HeartHandshake
                  className="text-[#8B5CF6]"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Save a Life
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Adoption gives homeless pets a second chance
                and fills your life with unconditional love.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-lg hover:-translate-y-2 transition duration-300 border border-pink-100">
              <div className="w-16 h-16 rounded-2xl bg-[#F472B6]/10 flex items-center justify-center">
                <ShieldCheck
                  className="text-[#F472B6]"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Trusted Care
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Every pet is vaccinated, checked, and prepared
                for a safe and happy home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-lg hover:-translate-y-2 transition duration-300 border border-green-100">
              <div className="w-16 h-16 rounded-2xl bg-[#34D399]/10 flex items-center justify-center">
                <PawPrint
                  className="text-[#34D399]"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Endless Joy
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Pets bring happiness, emotional support, and
                unforgettable companionship.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyAdoptPage;
import { HeartHandshake, PawPrint, Stethoscope } from 'lucide-react';
import React from 'react';

const PetCareTips = () => {
    return (
            <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold">
              Pet Care Tips
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Keep your furry friend healthy and happy every
              day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-[32px] p-8 shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center">
                <Stethoscope
                  className="text-[#8B5CF6]"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Vet Checkups
              </h3>

              <p className="mt-4 text-gray-600">
                Regular health checkups ensure your pet stays
                healthy and active.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-[#F472B6]/10 rounded-2xl flex items-center justify-center">
                <HeartHandshake
                  className="text-[#F472B6]"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Healthy Food
              </h3>

              <p className="mt-4 text-gray-600">
                Nutritious meals and fresh water help pets live
                longer and happier.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-[#34D399]/10 rounded-2xl flex items-center justify-center">
                <PawPrint
                  className="text-[#34D399]"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Daily Exercise
              </h3>

              <p className="mt-4 text-gray-600">
                Exercise keeps pets energetic, playful, and
                mentally healthy.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default PetCareTips;
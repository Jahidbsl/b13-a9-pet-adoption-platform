import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SuccessStories = () => {
    return (
             <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold">
              Success Stories
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Beautiful journeys of rescued pets and their new
              families.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#FAF5FF] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                  alt="story"
                  width={500}
                  height={400}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <Quote className="text-[#F472B6]" />

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    “Adopting Luna changed our family forever.
                    She brought joy, love, and endless cuddles
                    into our lives.”
                  </p>

                  <div className="mt-6">
                    <h4 className="font-bold text-lg">
                      Sarah Johnson
                    </h4>

                    <p className="text-sm text-gray-500">
                      Pet Parent
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default SuccessStories;
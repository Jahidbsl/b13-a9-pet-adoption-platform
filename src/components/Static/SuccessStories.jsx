import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const storiesData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Dog Mom",
    petName: "Luna",
    quote: "Adopting Luna changed our family forever. She brought joy, love, and endless cuddles into our lives from day one.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1" 
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cat Parent",
    petName: "Oliver",
    quote: "Oliver was shy at first, but now he rules the house! Watching him transform into a confident, loving cat has been incredible.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
  },
  {
    id: 3,
    name: "Emily & David",
    role: "Rescue Partners",
    petName: "Milo & Bella",
    quote: "We went in for one dog and came back with two! Milo and Bella are inseparable, and our home feels truly complete now.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b" 
  }
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Beautiful journeys of rescued pets and their new families.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="bg-[#FAF5FF] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                {/* Next.js Optimized Image Container */}
                <div className="relative h-72 w-full">
                  <Image
                    src={story.image}
                    alt={`${story.petName}'s success story`}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    priority={story.id === 1} 
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <Quote className="text-[#F472B6] w-8 h-8 fill-[#F472B6]/10" />
                  <p className="mt-4 text-gray-600 leading-relaxed italic">
                    “{story.quote}”
                  </p>
                </div>
              </div>

              {/* Bottom Profile Info */}
              <div className="p-8 pt-0 mt-auto">
                <div className="border-t border-purple-100 pt-6">
                  <h4 className="font-bold text-lg text-gray-800">
                    {story.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {story.role}
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
import { Heart, MapPin, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const AllPetsCard = ({ pet }) => {
  const {
    age,
    name,
    species,
    breed,
    gender,
    image,
    health,
    vaccination,
    location,
    fee,
    email,
    description,
    _id,
  } = pet;
  return (
    <div className="bg-white max-w-md rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group fle ">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Decorative Gradient Overlay on image top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent h-1/3"></div>

        {/* Favorite/Heart Button */}
        <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white hover:scale-110 active:scale-95 transition-all">
          <Heart size={20} className="text-[#F472B6]" fill="#F472B6" />
        </button>

        {/* Species Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[#8B5CF6]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          <PawPrint size={14} />
          {species}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-extrabold text-[#374151]">{name}</h2>
          {/* Price Tag */}
          <span className="text-xl font-bold text-[#34D399] bg-[#FAF5FF] px-3 py-1 rounded-xl">
            ${fee}
          </span>
        </div>

        <p className="text-sm text-gray-500 font-medium mb-3">
          {breed} • {age} Years • {gender}
        </p>

        {/* Location (Kept the MapPin style from previous design) */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <MapPin size={16} className="text-purple-400" />
          <span>{location || "Dhaka"}</span>{" "}
          {/* Fallback if location not in data */}
        </div>

        {/* Description - Truncated for neatness if too long */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* View Details Button - Previous Gradient Style */}
        <Link href={`/all-pets/${_id}`}>
          <button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] hover:from-[#7C3AED] hover:to-[#EC4899] text-white py-3.5 rounded-2xl font-semibold text-lg transition shadow-md hover:shadow-lg active:scale-[0.98]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllPetsCard;

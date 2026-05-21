import Image from "next/image";

import {
  MapPin,
  Syringe,
  ShieldCheck,
  PawPrint,
  Mars,
  DollarSign,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

import AdoptionModal from "@/components/AdoptionModal";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/pets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pet");
  }

  const pet = await res.json();

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-red-500">
        Pet Not Found
      </div>
    );
  }

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
  } = pet;

  return (
    <div className="min-h-screen bg-[#FAF5FF] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#8B5CF6]/20 via-[#F472B6]/10 to-[#34D399]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute -inset-[2px] rounded-[35px] bg-gradient-to-r from-[#8B5CF6] via-[#F472B6] to-[#34D399] opacity-70 blur-sm"></div>

              <div className="relative bg-white rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(139,92,246,0.15)]">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    width={900}
                    height={900}
                    className="w-full h-[620px] object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-[620px] flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image Available
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#F472B6]" />

                  <span className="text-sm font-semibold text-[#374151]">
                    Ready For Adoption
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-5">
                    <div>
                      <p className="text-white/80 text-sm mb-1">
                        Loving Companion
                      </p>

                      <h1 className="text-4xl font-extrabold text-white">
                        {name}
                      </h1>

                      <p className="text-white/80 mt-1">
                        {breed} • {species}
                      </p>
                    </div>

                    <div className="bg-white text-[#8B5CF6] px-6 py-3 rounded-2xl font-bold shadow-lg">
                      ${fee}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 via-[#F472B6]/20 to-[#34D399]/20 rounded-[35px] blur-2xl"></div>

              <div className="relative bg-white/80 backdrop-blur-2xl border border-white/50 rounded-[35px] p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] p-3 rounded-2xl shadow-lg">
                    <PawPrint className="text-white" size={24} />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-[#374151]">
                      About {name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      Friendly and lovable pet
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-9 text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 lg:sticky lg:top-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/20 via-[#F472B6]/10 to-[#34D399]/20 rounded-[35px] blur-2xl"></div>

              <div className="relative bg-white/80 backdrop-blur-2xl rounded-[35px] border border-white/50 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-7 border-b border-purple-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] p-4 rounded-2xl shadow-lg">
                      <Heart className="text-white" size={26} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#374151]">
                        Pet Details
                      </h2>

                      <p className="text-gray-500 text-sm">
                        Everything you need to know
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 px-7 pt-6">
                  <Tag text={`${age} Years`} />
                  <Tag text={gender} pink />
                  <Tag text="Vaccinated" green />
                </div>

                {/* Info Grid */}
                <div className="grid gap-4 p-7">
                  <InfoCard
                    icon={<MapPin size={18} />}
                    title="Location"
                    value={location}
                  />

                  <InfoCard
                    icon={<DollarSign size={18} />}
                    title="Adoption Fee"
                    value={`$${fee}`}
                  />

                  <InfoCard
                    icon={<ShieldCheck size={18} />}
                    title="Health Condition"
                    value={health}
                  />

                  <InfoCard
                    icon={<Syringe size={18} />}
                    title="Vaccination"
                    value={vaccination}
                  />

                  <InfoCard
                    icon={<Mars size={18} />}
                    title="Gender"
                    value={gender}
                  />

                  <InfoCard
                    icon={<Mail size={18} />}
                    title="Contact Email"
                    value={email}
                  />
                </div>

                {/* Adoption Button */}
                <div className="p-5">
                  <AdoptionModal pet={pet} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Tag Component */
const Tag = ({ text, pink, green }) => {
  return (
    <span
      className={`px-5 py-2 rounded-full font-semibold text-sm shadow-sm
      ${
        pink
          ? "bg-pink-100 text-[#F472B6]"
          : green
            ? "bg-emerald-100 text-[#34D399]"
            : "bg-[#EDE9FE] text-[#8B5CF6]"
      }`}
    >
      {text}
    </span>
  );
};

/* Info Card */
const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="group bg-gradient-to-br from-white to-[#FAF5FF] border border-purple-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] p-3 rounded-2xl text-white shadow-lg">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-sm text-gray-500 font-medium mb-1">{title}</h3>

          <p className="text-[#374151] font-semibold break-words">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
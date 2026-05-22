export default function PetCareEssentials() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#374151]">
          Pet Care Essentials
        </h2>
        <p className="text-gray-500 mt-2">
          Keep your pets healthy, happy and active
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Proper Nutrition",
            desc: "Provide balanced food with vitamins and proteins.",
            color: "#8B5CF6",
          },
          {
            title: "Regular Vet Checkups",
            desc: "Ensure vaccinations and health monitoring.",
            color: "#F472B6",
          },
          {
            title: "Daily Exercise",
            desc: "Walk and play daily to keep pets active.",
            color: "#34D399",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl border border-purple-100 shadow-sm hover:shadow-xl transition bg-[#FAF5FF]"
          >
            <div
              className="w-12 h-12 rounded-2xl mb-4"
              style={{ backgroundColor: item.color }}
            />

            <h3 className="text-xl font-bold text-[#374151]">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#FAF5FF]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#374151]">
          Why Choose Us?
        </h2>
        <p className="text-gray-500 mt-2">
          A safe and trusted platform for pet adoption
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Verified Listings",
            desc: "All pets are checked and verified before listing.",
            color: "#8B5CF6",
          },
          {
            title: "Fast Adoption Process",
            desc: "Simple and quick request & approval system.",
            color: "#F472B6",
          },
          {
            title: "Community Support",
            desc: "Active community of pet lovers and adopters.",
            color: "#34D399",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl bg-white border border-purple-100 shadow-md hover:shadow-xl transition"
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
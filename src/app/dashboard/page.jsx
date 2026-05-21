"use client";

import Sidebar from "@/components/Sidebar";
import {
  Bell,
  Search,
  TrendingUp,
  Activity,
  Heart,
  HeartHandshake,
  PawPrint,
  Star,
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-[280px] min-h-screen">
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-20 lg:h-24 bg-white/70 backdrop-blur-xl border-b border-purple-100 px-4 lg:px-8 flex items-center justify-between">
          {/* Left */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#374151]">
              Dashboard
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Welcome back 👋
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center gap-3 bg-white border border-purple-100 rounded-2xl px-5 py-3 shadow-sm">
              <Search
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search pets..."
                className="outline-none bg-transparent text-sm w-44"
              />
            </div>

            {/* Notification */}
            <button className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-[#F472B6]/10 flex items-center justify-center hover:scale-105 transition">
              <Bell
                size={22}
                className="text-[#F472B6]"
              />

              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#34D399]"></span>
            </button>
          </div>
        </header>

        {/* Content */}
        <section className="p-4 lg:p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[32px] p-6 shadow-lg border border-purple-100">
              <div className="w-16 h-16 rounded-3xl bg-[#8B5CF6]/10 flex items-center justify-center">
                <HeartHandshake
                  size={30}
                  className="text-[#8B5CF6]"
                />
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#374151] mt-6">
                12
              </h2>

              <p className="text-gray-500 mt-2">
                Adoption Requests
              </p>

              <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                <TrendingUp size={18} />
                +12% this month
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[32px] p-6 shadow-lg border border-pink-100">
              <div className="w-16 h-16 rounded-3xl bg-[#F472B6]/10 flex items-center justify-center">
                <Heart
                  size={30}
                  className="text-[#F472B6]"
                />
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#374151] mt-6">
                18
              </h2>

              <p className="text-gray-500 mt-2">
                Wishlist Pets
              </p>

              <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                <TrendingUp size={18} />
                +8 new pets
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[32px] p-6 shadow-lg border border-emerald-100">
              <div className="w-16 h-16 rounded-3xl bg-[#34D399]/10 flex items-center justify-center">
                <PawPrint
                  size={30}
                  className="text-[#34D399]"
                />
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#374151] mt-6">
                8
              </h2>

              <p className="text-gray-500 mt-2">
                My Listings
              </p>

              <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                <TrendingUp size={18} />
                Active listings
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[32px] p-6 shadow-lg border border-yellow-100">
              <div className="w-16 h-16 rounded-3xl bg-yellow-100 flex items-center justify-center">
                <Activity
                  size={30}
                  className="text-yellow-500"
                />
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#374151] mt-6">
                24
              </h2>

              <p className="text-gray-500 mt-2">
                Total Activities
              </p>

              <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                <TrendingUp size={18} />
                Very active
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="xl:col-span-2 bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
              <h2 className="text-2xl font-bold mb-6">
                Recent Activities
              </h2>

              <div className="space-y-5">
                <div className="p-5 rounded-3xl bg-[#FAF5FF] border border-purple-100">
                  Activity Content
                </div>

                <div className="p-5 rounded-3xl bg-[#FFF1F7] border border-pink-100">
                  Activity Content
                </div>
              </div>
            </div>

            {/* Favourite Pets */}
            <div className="bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
              <h2 className="text-2xl font-bold mb-6">
                Favourite Pets
              </h2>

              <div className="space-y-5">
                {[1, 2, 3].map((pet) => (
                  <div
                    key={pet}
                    className="flex items-center justify-between bg-[#FAF5FF] border border-purple-100 rounded-3xl p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6]"></div>

                      <div>
                        <h3 className="font-bold">
                          Bella
                        </h3>

                        <p className="text-sm text-gray-500">
                          Golden Retriever
                        </p>
                      </div>
                    </div>

                    <Star className="fill-[#F472B6] text-[#F472B6]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
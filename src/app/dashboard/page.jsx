"use client";

import Link from "next/link";
import { useState } from "react";

import {
  LayoutDashboard,
  Heart,
  HeartHandshake,
  PlusCircle,
  PawPrint,
  Menu,
  Bell,
  Search,
  TrendingUp,
  Activity,
  Sparkles,
  ChevronRight,
  Star,
  LogOut,
  Settings,
  Sidebar,
} from "lucide-react";

const DashboardPage = () => {


  return (
    <div className="min-h-screen bg-[#FAF5FF] flex overflow-hidden">
      {/* Sidebar */}
      

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-24 bg-white/70 backdrop-blur-xl border-b border-purple-100 px-4 lg:px-8 flex items-center justify-between">
          {/* Left */}
    

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center gap-3 bg-white border border-purple-100 rounded-2xl px-5 py-3 shadow-sm">
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search pets..."
                className="outline-none bg-transparent text-sm w-44"
              />
            </div>

            {/* Notification */}
            <button className="relative w-12 h-12 rounded-2xl bg-[#F472B6]/10 flex items-center justify-center hover:scale-105 transition">
              <Bell size={22} className="text-[#F472B6]" />

              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#34D399]"></span>
            </button>

          
          </div>
        </header>

        {/* Content */}
        <section className="p-4 lg:p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card */}
            <div className="group bg-white rounded-[32px] p-6 shadow-lg hover:shadow-2xl transition border border-purple-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-[#8B5CF6]/10 flex items-center justify-center">
                  <HeartHandshake size={30} className="text-[#8B5CF6]" />
                </div>

                <h2 className="text-5xl font-extrabold text-[#374151] mt-6">
                  12
                </h2>

                <p className="text-gray-500 mt-2">Adoption Requests</p>

                <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                  <TrendingUp size={18} />
                  +12% this month
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <div className="group bg-white rounded-[32px] p-6 shadow-lg hover:shadow-2xl transition border border-pink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F472B6]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-[#F472B6]/10 flex items-center justify-center">
                  <Heart size={30} className="text-[#F472B6]" />
                </div>

                <h2 className="text-5xl font-extrabold text-[#374151] mt-6">
                  18
                </h2>

                <p className="text-gray-500 mt-2">Wishlist Pets</p>

                <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                  <TrendingUp size={18} />
                  +8 new pets
                </div>
              </div>
            </div>

            {/* Listings */}
            <div className="group bg-white rounded-[32px] p-6 shadow-lg hover:shadow-2xl transition border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#34D399]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-[#34D399]/10 flex items-center justify-center">
                  <PawPrint size={30} className="text-[#34D399]" />
                </div>

                <h2 className="text-5xl font-extrabold text-[#374151] mt-6">
                  8
                </h2>

                <p className="text-gray-500 mt-2">My Listings</p>

                <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                  <TrendingUp size={18} />
                  Active listings
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="group bg-white rounded-[32px] p-6 shadow-lg hover:shadow-2xl transition border border-yellow-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-yellow-100 flex items-center justify-center">
                  <Activity size={30} className="text-yellow-500" />
                </div>

                <h2 className="text-5xl font-extrabold text-[#374151] mt-6">
                  24
                </h2>

                <p className="text-gray-500 mt-2">Total Activities</p>

                <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                  <TrendingUp size={18} />
                  Very active
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="xl:col-span-2 bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#374151]">
                    Recent Activities
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Latest updates from your account
                  </p>
                </div>

                <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-5 py-3 rounded-2xl font-medium transition">
                  View All
                </button>
              </div>

              <div className="space-y-5">
                {/* Item */}
                <div className="flex items-center justify-between p-5 rounded-3xl bg-[#FAF5FF] border border-purple-100 hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center">
                      <HeartHandshake className="text-[#8B5CF6]" />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#374151]">
                        New Adoption Request
                      </h3>

                      <p className="text-sm text-gray-500">
                        Someone requested to adopt Bella 🐶
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-gray-400">2m ago</span>
                </div>

                {/* Item */}
                <div className="flex items-center justify-between p-5 rounded-3xl bg-[#FFF1F7] border border-pink-100 hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#F472B6]/10 flex items-center justify-center">
                      <Heart className="text-[#F472B6]" />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#374151]">
                        Added to Wishlist
                      </h3>

                      <p className="text-sm text-gray-500">
                        Luna was added to your wishlist ❤️
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-gray-400">10m ago</span>
                </div>
              </div>
            </div>

            {/* Favourite Pets */}
            <div className="bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#374151]">
                    Favourite Pets
                  </h2>

                  <p className="text-gray-500 mt-1">Your wishlist collection</p>
                </div>

                <Heart className="text-[#F472B6]" />
              </div>

              <div className="space-y-5">
                {[1, 2, 3].map((pet) => (
                  <div
                    key={pet}
                    className="flex items-center justify-between bg-[#FAF5FF] border border-purple-100 rounded-3xl p-4 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6]"></div>

                      <div>
                        <h3 className="font-bold text-[#374151]">Bella</h3>

                        <p className="text-sm text-gray-500">
                          Golden Retriever
                        </p>
                      </div>
                    </div>

                    <button>
                      <Star className="fill-[#F472B6] text-[#F472B6]" />
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white py-4 rounded-3xl font-bold hover:scale-[1.02] transition">
                Explore More Pets
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage; 
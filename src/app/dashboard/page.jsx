"use client";

import Link from "next/link";
import { useState } from "react";

import {
  LayoutDashboard,
  Heart,
  HeartHandshake,
  PawPrint,
  Menu,
  Bell,
  Search,
  TrendingUp,
  Activity,
  ChevronRight,
  Star,
  LogOut,
  Settings,
  X,
} from "lucide-react";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "My Pets",
      icon: PawPrint,
    },
    {
      name: "Wishlist",
      icon: Heart,
    },
    {
      name: "Adoptions",
      icon: HeartHandshake,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF5FF] flex overflow-hidden relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-[280px] bg-white border-r border-purple-100 shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Mobile Close */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <h2 className="text-xl font-bold text-[#374151]">Menu</h2>

            <button
              onClick={() => setSidebarOpen(false)}
              className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center"
            >
              <X className="text-[#8B5CF6]" size={22} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center">
              <PawPrint className="text-white" size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-[#374151]">
                PetBlossom
              </h1>

              <p className="text-sm text-gray-500">Pet Dashboard</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-3 flex-1">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                  item.active
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white shadow-lg"
                    : "hover:bg-[#FAF5FF] text-[#374151]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon size={22} />

                  <span className="font-medium">{item.name}</span>
                </div>

                <ChevronRight size={18} />
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <button className="mt-6 flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-red-500 py-4 rounded-2xl font-semibold transition">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col w-full">
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-purple-100 px-4 lg:px-8 py-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center"
            >
              <Menu size={24} className="text-[#8B5CF6]" />
            </button>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#374151]">
                Welcome Back 👋
              </h2>

              <p className="text-sm md:text-base text-gray-500 mt-1">
                Track your pets & adoption activity
              </p>
            </div>
          </div>

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
            {[
              {
                title: "Adoption Requests",
                value: "12",
                color: "#8B5CF6",
                icon: HeartHandshake,
                border: "border-purple-100",
              },
              {
                title: "Wishlist Pets",
                value: "18",
                color: "#F472B6",
                icon: Heart,
                border: "border-pink-100",
              },
              {
                title: "My Listings",
                value: "8",
                color: "#34D399",
                icon: PawPrint,
                border: "border-emerald-100",
              },
              {
                title: "Total Activities",
                value: "24",
                color: "#FACC15",
                icon: Activity,
                border: "border-yellow-100",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-[32px] p-6 shadow-lg hover:shadow-2xl transition border ${card.border} relative overflow-hidden`}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
                  style={{ background: card.color }}
                ></div>

                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-3xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${card.color}20`,
                    }}
                  >
                    <card.icon
                      size={30}
                      style={{ color: card.color }}
                    />
                  </div>

                  <h2 className="text-5xl font-extrabold text-[#374151] mt-6">
                    {card.value}
                  </h2>

                  <p className="text-gray-500 mt-2">{card.title}</p>

                  <div className="flex items-center gap-2 mt-5 text-[#34D399] font-medium">
                    <TrendingUp size={18} />
                    Active this month
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="xl:col-span-2 bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
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
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-3xl bg-[#FAF5FF] border border-purple-100 hover:shadow-lg transition"
                  >
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
                ))}
              </div>
            </div>

            {/* Favourite Pets */}
            <div className="bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#374151]">
                    Favourite Pets
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Your wishlist collection
                  </p>
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
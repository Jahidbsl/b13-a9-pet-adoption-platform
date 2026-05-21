"use client";

import NextLink from "next/link";

import {
  LayoutDashboard,
  Heart,
  HeartHandshake,
  PlusCircle,
  PawPrint,
  ChevronRight,
  Settings,
} from "lucide-react";

import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      name: "My Requests",
      icon: HeartHandshake,
      href: "/dashboard/my-requests",
    },
    {
      name: "Wishlist",
      icon: Heart,
      href: "/dashboard/wishlist",
    },
    {
      name: "Add Pet",
      icon: PlusCircle,
      href: "/dashboard/add-pet",
    },
    {
      name: "My Listings",
      icon: PawPrint,
      href: "/dashboard/my-listings",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className="">
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-80 bg-white/90 backdrop-blur-2xl
          border-r border-purple-100
          transition-all duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="h-24 px-6 flex items-center border-b border-purple-100">
          <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center shadow-xl shadow-purple-200">
            <PawPrint className="text-white" />
          </div>

          <div className="ml-4">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
              Pet Blossom
            </h1>

            <p className="text-sm text-gray-500">
              Modern Dashboard
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="p-5 space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <NextLink
                key={index}
                href={item.href}
                className="
                  group flex items-center justify-between
                  px-5 py-4 rounded-3xl
                  transition-all duration-300
                  hover:bg-[#8B5CF6]/10 text-[#374151]
                "
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#F3E8FF] group-hover:bg-white">
                    <Icon size={22} />
                  </div>

                  <span className="font-semibold">
                    {item.name}
                  </span>
                </div>

                <ChevronRight size={18} />
              </NextLink>
            );
          })}
        </div>
        <div>
            
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </div>
  );
};

export default Sidebar;
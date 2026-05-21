"use client";

import NextLink from "next/link";
import React, { useState } from "react";

import {
  LayoutDashboard,
  Heart,
  HeartHandshake,
  PlusCircle,
  PawPrint,
  ChevronRight,
  Settings,
  Menu,
  X,
} from "lucide-react";

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
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 sm:h-20 bg-white/90 backdrop-blur-xl border-b border-purple-100 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center shrink-0">
            <PawPrint className="text-white" size={20} />
          </div>

          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-[#374151] truncate">
              Pet Blossom
            </h1>

            <p className="text-[11px] sm:text-xs text-gray-500">
              Dashboard
            </p>
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center shrink-0"
        >
          <Menu
            className="text-[#8B5CF6]"
            size={22}
          />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          h-screen w-[85%] sm:w-[320px] lg:w-[300px]
          bg-white/95 backdrop-blur-2xl
          border-r border-purple-100
          shadow-2xl lg:shadow-none
          transition-transform duration-300 ease-in-out
          overflow-hidden
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="h-20 sm:h-24 px-4 sm:px-6 flex items-center justify-between border-b border-purple-100">
          <div className="flex items-center min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-3xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center shadow-xl shadow-purple-200 shrink-0">
              <PawPrint className="text-white" />
            </div>

            <div className="ml-3 sm:ml-4 min-w-0">
              <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent truncate">
                Pet Blossom
              </h1>

              <p className="text-xs sm:text-sm text-gray-500">
                Modern Dashboard
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center shrink-0"
          >
            <X
              size={20}
              className="text-[#8B5CF6]"
            />
          </button>
        </div>

        {/* Menu */}
        <div className="p-3 sm:p-5 space-y-2 sm:space-y-3 overflow-y-auto h-[calc(100vh-80px)] sm:h-[calc(100vh-96px)]">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <NextLink
                key={index}
                href={item.href}
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="
                  group flex items-center justify-between
                  px-3 sm:px-5 py-3 sm:py-4 rounded-2xl sm:rounded-3xl
                  transition-all duration-300
                  hover:bg-[#8B5CF6]/10
                  text-[#374151]
                  hover:translate-x-1
                "
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-[#F3E8FF] group-hover:bg-white transition shrink-0">
                    <Icon size={20} />
                  </div>

                  <span className="font-semibold text-sm sm:text-base truncate">
                    {item.name}
                  </span>
                </div>

                <ChevronRight
                  size={16}
                  className="opacity-60 shrink-0"
                />
              </NextLink>
            );
          })}
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Mobile Space */}
      <div className="h-16 sm:h-20 lg:hidden"></div>
    </>
  );
};

export default Sidebar;
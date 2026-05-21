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
      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PawPrint className="text-purple-600" />
          <h1 className="font-bold text-lg">
            Pet Blossom
          </h1>
        </div>

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          <Menu size={28} />
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[280px]
          bg-white border-r
          transition-transform duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* HEADER */}
        <div className="h-16 px-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="text-purple-600" />

            <h1 className="font-bold text-xl">
              Pet Blossom
            </h1>
          </div>

          <button
            className="lg:hidden"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <X size={26} />
          </button>
        </div>

        {/* MENU */}
        <div className="p-4 space-y-2">
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
                  flex items-center justify-between
                  px-4 py-3 rounded-xl
                  hover:bg-purple-100
                  transition
                "
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </div>

                <ChevronRight size={18} />
              </NextLink>
            );
          })}
        </div>
      </aside>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* MOBILE SPACE */}
      <div className="h-16 lg:hidden"></div>
    </>
  );
};

export default Sidebar;
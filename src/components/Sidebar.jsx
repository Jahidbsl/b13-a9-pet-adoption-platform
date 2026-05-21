"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

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
 

  const pathname = usePathname();

 

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
      <div
        className="
          lg:hidden
          fixed top-0 left-0 right-0
          z-40
          h-20
          bg-white/80
          backdrop-blur-xl
          border-b border-purple-100
          px-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-gradient-to-r
              from-[#8B5CF6]
              to-[#F472B6]
              flex items-center justify-center
              shadow-lg shadow-purple-200
            "
          >
            <PawPrint
              className="text-white"
              size={22}
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#374151]">
              Pet Blossom
            </h1>

            <p className="text-xs text-gray-500">
              Dashboard
            </p>
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            w-12 h-12
            rounded-2xl
            bg-[#8B5CF6]/10
            flex items-center justify-center
            hover:bg-[#8B5CF6]/20
            transition-all duration-300
          "
        >
          <Menu
            className="text-[#8B5CF6]"
            size={24}
          />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[300px]
          bg-white/90
          backdrop-blur-2xl
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
        <div
          className="
            h-24
            px-6
            flex items-center justify-between
            border-b border-purple-100
          "
        >
          <div className="flex items-center">
            <div
              className="
                w-14 h-14
                rounded-3xl
                bg-gradient-to-r
                from-[#8B5CF6]
                to-[#F472B6]
                flex items-center justify-center
                shadow-xl shadow-purple-200
              "
            >
              <PawPrint className="text-white" />
            </div>

            <div className="ml-4">
              <h1
                className="
                  text-2xl font-extrabold
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  to-[#F472B6]
                  bg-clip-text text-transparent
                "
              >
                Pet Blossom
              </h1>

              <p className="text-sm text-gray-500">
                Modern Dashboard
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
              lg:hidden
              w-10 h-10
              rounded-xl
              bg-[#8B5CF6]/10
              flex items-center justify-center
              hover:bg-[#8B5CF6]/20
              transition-all duration-300
            "
          >
            <X
              size={22}
              className="text-[#8B5CF6]"
            />
          </button>
        </div>

        {/* Menu */}
        <div
          className="
            p-5
            space-y-3
            overflow-y-auto
            h-[calc(100vh-96px)]
          "
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <NextLink
                key={index}
                href={item.href}
                className={`
                  group
                  flex items-center justify-between
                  px-5 py-4
                  rounded-3xl
                  transition-all duration-300
                  hover:translate-x-1
                  ${
                    isActive
                      ? `
                        bg-gradient-to-r
                        from-[#8B5CF6]
                        to-[#F472B6]
                        text-white
                        shadow-xl shadow-purple-200
                      `
                      : `
                        text-[#374151]
                        hover:bg-[#8B5CF6]/10
                      `
                  }
                `}
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12
                      rounded-2xl
                      flex items-center justify-center
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-white/20"
                          : "bg-[#F3E8FF] group-hover:bg-white"
                      }
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <span className="font-semibold text-sm md:text-base">
                    {item.name}
                  </span>
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={18}
                  className={`
                    transition-all duration-300
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-50 group-hover:translate-x-1"
                    }
                  `}
                />
              </NextLink>
            );
          })}
        </div>
      </aside>

  

  
    </>
  );
};

export default Sidebar;
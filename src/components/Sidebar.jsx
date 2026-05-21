"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Heart,
  HeartHandshake,
  PlusCircle,
  PawPrint,
  Settings,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock scroll when open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const items = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Requests", href: "/dashboard/my-requests", icon: HeartHandshake },
    { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
    { name: "Add Pet", href: "/dashboard/add-pet", icon: PlusCircle },
    { name: "My Listings", href: "/dashboard/my-listings", icon: PawPrint },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-20 bg-white/80 backdrop-blur-xl border-b border-purple-100 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center">
            <PawPrint className="text-white" size={20} />
          </div>

          <div>
            <h1 className="font-bold text-[#374151]">Pet Blossom</h1>
            <p className="text-xs text-gray-500">Dashboard</p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-11 h-11 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center"
        >
          <Menu className="text-[#8B5CF6]" />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          h-screen w-[300px]
          bg-white/90 backdrop-blur-2xl
          border-r border-purple-100
          shadow-2xl lg:shadow-none
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div className="h-24 px-6 flex items-center justify-between border-b border-purple-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center">
              <PawPrint className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#374151]">
                Pet Blossom
              </h1>
              <p className="text-xs text-gray-500">Dashboard</p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center"
          >
            <X className="text-[#8B5CF6]" />
          </button>
        </div>

        {/* MENU */}
        <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-96px)]">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={`
                  flex items-center justify-between
                  px-4 py-4 rounded-2xl
                  transition-all duration-300
                  hover:translate-x-1
                  ${
                    active
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white shadow-lg"
                      : "text-[#374151] hover:bg-[#8B5CF6]/10"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      w-11 h-11 rounded-xl flex items-center justify-center
                      ${
                        active
                          ? "bg-white/20"
                          : "bg-[#F3E8FF] group-hover:bg-white"
                      }
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <span className="font-medium">{item.name}</span>
                </div>

                <ChevronRight
                  size={18}
                  className={active ? "opacity-100" : "opacity-40"}
                />
              </NextLink>
            );
          })}
        </div>
      </aside>

      {/* MOBILE SPACING */}
      <div className="h-20 lg:hidden" />
    </>
  );
};

export default Sidebar;
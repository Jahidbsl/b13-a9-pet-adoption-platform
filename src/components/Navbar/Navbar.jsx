"use client";

import { authClient } from "@/lib/auth-client";

import { LayoutDashboard, LogOut, Menu, PawPrint, User, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  // Logout
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-200">
              <PawPrint className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-[#8B5CF6]">
                Pet Blossom
              </h1>

              <p className="text-xs text-gray-500">Find your forever friend</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-[#8B5CF6] transition">
              Home
            </Link>

            <Link href="/all-pets" className="hover:text-[#8B5CF6] transition">
              All Pets
            </Link>

            {/* Loading */}
            {isPending ? (
              <p className="text-sm text-gray-500">Loading...</p>
            ) : user ? (
              <div className="relative">
                {/* Profile Button */}
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3"
                >
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="user"
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full border-2 border-[#8B5CF6] object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                      <User className="text-[#8B5CF6]" size={22} />
                    </div>
                  )}
                </button>

                {/* Dropdown */}
                {profileOpen && (
                  <div className="absolute right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
                    {/* User Info */}
                    <div className="p-5 border-b border-purple-100">
                      <div className="flex items-center gap-3">
                        {user?.image ? (
                          <Image
                            src={user.image}
                            alt="user"
                            width={50}
                            height={50}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#8B5CF6]"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                            <User className="text-[#8B5CF6]" size={22} />
                          </div>
                        )}

                        <div>
                          <h3 className="font-bold text-[#374151]">
                            Welcome, {user?.name || "Pet Lover"}!
                          </h3>

                          <p className="text-sm text-gray-500 truncate max-w-[160px]">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu */}
                    <div className="p-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[#8B5CF6]/10 transition"
                      >
                        <LayoutDashboard size={20} className="text-[#8B5CF6]" />
                        Dashboard
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-50 text-red-500 transition"
                      >
                        <LogOut size={20} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/signin"
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition text-white px-6 py-3 rounded-2xl shadow-lg shadow-purple-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6">
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-5 flex flex-col gap-5 font-medium">
              {/* Links */}
              <Link href="/" className="hover:text-[#8B5CF6] transition">
                Home
              </Link>

              <Link
                href="/all-pets"
                className="hover:text-[#8B5CF6] transition border-b border-purple-100"
              >
                All Pets
              </Link>

              {/* Loading */}
              {isPending ? (
                <p className="text-sm text-gray-500">Loading...</p>
              ) : user ? (
                <>
                  {/* User */}

                  <div className="flex items-center gap-3 border-b border-purple-100 pb-4">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt="user"
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#8B5CF6]"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                        <User className="text-[#8B5CF6]" size={22} />
                      </div>
                    )}

                    <div>
                      <h3 className="font-bold text-[#374151]">
                        Welcome, {user?.name || "Pet Lover"}!
                      </h3>

                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                  </div>

                  {/* Dashboard */}
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 hover:text-[#8B5CF6]"
                  >
                    <LayoutDashboard size={20} />
                    Dashboard
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 text-red-500"
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/signin"
                  className="bg-[#8B5CF6] text-white text-center py-3 rounded-2xl"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

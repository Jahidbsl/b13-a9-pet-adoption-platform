// app/not-found.jsx

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF5FF] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <div className="relative mb-10">
          <div className="w-40 h-40 mx-auto rounded-full bg-[#E9D5FF] opacity-70 blur-3xl absolute inset-0"></div>

          <div className="relative z-10">
            <div className="text-8xl md:text-9xl font-extrabold text-[#8B5CF6]">
              404
            </div>

            <div className="mt-4 animate-bounce text-5xl">
              👾
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#374151] mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Home size={20} />
            Go Home
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 border-2 border-[#F472B6] text-[#F472B6] hover:bg-[#F472B6] hover:text-white px-6 py-3 rounded-2xl transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
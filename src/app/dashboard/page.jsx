"use client";

import { useEffect, useMemo, useState } from "react";
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

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getDayName = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
  });
};

const DashboardPage = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adoptRes, petRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/adoptions`),
          fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/pets`),
        ]);

        const adoptionsData = await adoptRes.json();
        const petsData = await petRes.json();

        setAdoptions(adoptionsData);
        setPets(petsData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // ================= SAFE DATA =================
  const safeAdoptions = adoptions || [];
  const safePets = pets || [];

  const myPetIds = safePets.map((p) => String(p._id));

  const totalRequests = safeAdoptions.filter((a) =>
    myPetIds.includes(String(a.petId))
  ).length;

  const pendingRequests = safeAdoptions.filter(
    (a) =>
      myPetIds.includes(String(a.petId)) &&
      a.status === "pending"
  ).length;

  const approvedRequests = safeAdoptions.filter(
    (a) =>
      myPetIds.includes(String(a.petId)) &&
      a.status === "approved"
  ).length;

  const myListings = safePets.length;

  // ================= CHART DATA (FIXED) =================
  const chartData = useMemo(() => {
    const weekMap = {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    };

    safeAdoptions.forEach((a) => {
      if (!a.createdAt) return;

      const day = getDayName(a.createdAt);

      if (weekMap[day] !== undefined) {
        weekMap[day] += 1;
      }
    });

    return Object.keys(weekMap).map((day) => ({
      name: day,
      value: weekMap[day],
    }));
  }, [safeAdoptions]);

  return (
    <div className="min-h-screen bg-[#FAF5FF] flex">
      <main className="flex-1 min-h-screen">

        {/* Topbar */}
        <header className="sticky top-0 z-30 h-20 lg:h-24 bg-white/70 backdrop-blur-xl border-b border-purple-100 px-4 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#374151]">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back 👋
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 bg-white border border-purple-100 rounded-2xl px-5 py-3 shadow-sm">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search pets..."
                className="outline-none bg-transparent text-sm w-44"
              />
            </div>

            <button className="relative w-12 h-12 rounded-2xl bg-[#F472B6]/10 flex items-center justify-center">
              <Bell size={22} className="text-[#F472B6]" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full" />
            </button>
          </div>
        </header>

        {/* Content */}
        <section className="p-4 lg:p-8 space-y-8">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">

            {[
              {
                icon: HeartHandshake,
                color: "#8B5CF6",
                label: "Total Requests",
                value: totalRequests,
              },
              {
                icon: Activity,
                color: "#F472B6",
                label: "Pending Requests",
                value: pendingRequests,
              },
              {
                icon: PawPrint,
                color: "#34D399",
                label: "My Listings",
                value: myListings,
              },
              {
                icon: Heart,
                color: "#F59E0B",
                label: "Approved Requests",
                value: approvedRequests,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] p-6 shadow-lg border border-purple-100 hover:-translate-y-1 transition"
              >
                <div
                  className="w-16 h-16 rounded-3xl flex items-center justify-center"
                  style={{ backgroundColor: item.color + "20" }}
                >
                  <item.icon size={30} style={{ color: item.color }} />
                </div>

                <h2 className="text-4xl font-extrabold mt-6 text-[#374151]">
                  {item.value}
                </h2>

                <p className="text-gray-500 mt-2">{item.label}</p>

                <div className="flex items-center gap-2 mt-4 text-green-500 font-medium">
                  <TrendingUp size={16} />
                  Live data
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="xl:col-span-2 bg-white rounded-[32px] p-6 shadow-xl border border-purple-100">
            <h2 className="text-2xl font-bold mb-6">
              Adoption Overview
            </h2>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
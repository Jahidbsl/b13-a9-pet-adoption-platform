import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#FAF5FF]">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

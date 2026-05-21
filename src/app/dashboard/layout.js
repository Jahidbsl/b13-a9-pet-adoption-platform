import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#FAF5FF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-[300px]">
        {children}
      </main>
    </div>
  );
}
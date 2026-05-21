import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF5FF] flex">
      
      {/* Sidebar */}
      <div className="w-[280px] shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {children}
      </main>

    </div>
  );
}
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      <Sidebar />

      <main className="p-4">
        {children}
      </main>
    </div>
  );
}
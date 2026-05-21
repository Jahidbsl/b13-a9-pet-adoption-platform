import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#FAF5FF]">
      <Sidebar />

      <main className="p-4 max-w-3xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
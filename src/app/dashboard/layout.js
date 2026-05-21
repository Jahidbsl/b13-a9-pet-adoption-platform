import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#FAF5FF]">
      <Sidebar />

      <main className="flex-1 lg:ml-[300px] pt-20 lg:pt-0 p-4">
        {children}
      </main>
    </div>
  );
}
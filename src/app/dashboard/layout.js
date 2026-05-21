

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="min-h-screen flex bg-[#FAF5FF]">
     

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
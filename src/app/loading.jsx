// app/loading.jsx

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF5FF] flex items-center justify-center">
      <div className="text-center">
        
        {/* Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-[#E9D5FF]"></div>

          <div className="absolute inset-0 rounded-full border-4 border-t-[#8B5CF6] border-r-[#F472B6] border-b-[#34D399] border-l-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold text-[#374151] mb-3">
          Loading...
        </h2>

        <p className="text-gray-500">
          Please wait while we fetch something awesome.
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-3 bg-[#E9D5FF] rounded-full overflow-hidden mx-auto mt-8">
          <div className="h-full w-1/2 bg-gradient-to-r from-[#8B5CF6] via-[#F472B6] to-[#34D399] animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
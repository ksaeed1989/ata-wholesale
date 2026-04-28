"use client";

export default function Home() {
  return (
    <div className="bg-[#030712] min-h-screen text-white">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Wholesale Supplies for{" "}
            <span className="text-emerald-400">
              Restaurants & Grocery Stores
            </span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Fast ordering. Reliable delivery. Competitive wholesale pricing.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/cart"
              className="bg-emerald-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Start Order
            </a>

            <a
              href="/login"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-[#0f172a] p-4 rounded-lg border border-white/10">
            <div className="h-32 bg-gray-800 rounded mb-3" />
            <h3 className="text-sm">Product Name</h3>
            <p className="text-emerald-400 text-sm mt-1">$12.00</p>
          </div>

          <div className="bg-[#0f172a] p-4 rounded-lg border border-white/10">
            <div className="h-32 bg-gray-800 rounded mb-3" />
            <h3 className="text-sm">Product Name</h3>
            <p className="text-emerald-400 text-sm mt-1">$12.00</p>
          </div>

          <div className="bg-[#0f172a] p-4 rounded-lg border border-white/10">
            <div className="h-32 bg-gray-800 rounded mb-3" />
            <h3 className="text-sm">Product Name</h3>
            <p className="text-emerald-400 text-sm mt-1">$12.00</p>
          </div>

          <div className="bg-[#0f172a] p-4 rounded-lg border border-white/10">
            <div className="h-32 bg-gray-800 rounded mb-3" />
            <h3 className="text-sm">Product Name</h3>
            <p className="text-emerald-400 text-sm mt-1">$12.00</p>
          </div>

        </div>
      </div>

    </div>
  );
}
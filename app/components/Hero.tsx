"use client";

export default function Hero() {
  return (
    <section className="bg-white">

      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Wholesale Food Packaging Supplier
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-white text-sm uppercase">
              Distributor • Supplier • Wholesale
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Food Packaging & Restaurant Supplies
            </h1>

            <p className="text-white/80 mt-4 text-sm max-w-md">
              Serving restaurants, grocery stores, and local businesses with reliable delivery and competitive pricing.
            </p>

            <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded shadow font-medium">
              Browse Products
            </button>
          </div>

          {/* RIGHT (Image Placeholder) */}
          <div className="flex justify-center">
            <div className="w-[400px] h-[250px] bg-white/30 rounded-lg flex items-center justify-center text-white">
              Product Image
            </div>
          </div>

        </div>
      </div>

      {/* Boxes Section */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-gray-100 p-6 rounded">
            <p className="text-sm text-gray-500">GREAT DEALS</p>
            <h3 className="text-xl font-bold text-gray-900 mt-2">
              Monthly Special!
            </h3>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 text-sm rounded">
              Read More
            </button>
          </div>

          <div className="bg-blue-500 p-6 rounded text-white">
            <p className="text-sm">RECENTLY ADDED</p>
            <h3 className="text-xl font-bold mt-2">
              New Products
            </h3>
            <button className="mt-4 bg-white text-blue-600 px-4 py-2 text-sm rounded">
              Read More
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
"use client";

import { useCart } from "./cart-context";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

type Product = {
  id: number;
  name: string;
  caseQty: number;
  dimensions?: string;
  weight?: string;
  pallet?: number;
  price: number;
  image: string;
};

export default function Home() {
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "16oz Food Container",
      caseQty: 240,
      dimensions: "4.5 x 3 in",
      weight: "15 lb",
      pallet: 48,
      price: 32,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
    },
    {
      id: 2,
      name: "Kraft Paper Bags - Small",
      caseQty: 500,
      weight: "20 lb",
      pallet: 60,
      price: 45,
      image: "https://images.unsplash.com/photo-1585386959984-a41552262e50"
    },
    {
      id: 3,
      name: "12oz Hot Cups with Lids",
      caseQty: 1000,
      weight: "25 lb",
      pallet: 40,
      price: 65,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
    },
    {
      id: 4,
      name: "Disposable Gloves (Nitrile)",
      caseQty: 1000,
      weight: "18 lb",
      pallet: 50,
      price: 55,
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8"
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-center">
          Bulk Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
            
              key={product.id}
className="bg-white border border-gray-200 rounded-lg p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"            ><img
  src={product.image + "?auto=format&fit=crop&w=400&q=80"}
  alt={product.name}
className="w-full h-[180px] object-cover rounded-lg mb-4"/>

              <h3 className="text-sm font-semibold">
                {product.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Case: {product.caseQty} units
              </p>

              {product.dimensions && (
                <p className="text-xs text-gray-400">
                  Size: {product.dimensions}
                </p>
              )}

              {product.weight && (
                <p className="text-xs text-gray-400">
                  Weight: {product.weight}
                </p>
              )}

              {product.pallet && (
                <p className="text-xs text-gray-400">
                  Pallet: {product.pallet} cases
                </p>
              )}

              <div className="mt-3 text-sm font-bold text-blue-600">
                ${product.price} / case
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    caseQty: product.caseQty,
                  })
                }
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-4">
      Start Ordering Today
    </h2>

    <p className="text-gray-600 mb-8">
      Join local restaurants and stores who trust us for fast delivery and reliable supply.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
<button
  onClick={() => alert("Account signup coming soon")}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
  Create Wholesale Account
</button>

      <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
        Contact Sales
      </button>

    </div>

  </div>
</section>
      <section className="bg-blue-600 text-white py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-4">
      Why Choose Us
    </h2>

    <p className="text-white/80 mb-10 max-w-2xl mx-auto">
      We supply restaurants and grocery stores with reliable delivery, competitive pricing, and consistent stock.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white text-gray-900 p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Fast Delivery</h3>
        <p className="text-sm text-gray-500 mt-2">
          Next-day delivery across your local area.
        </p>
      </div>
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Wholesale Pricing</h3>
        <p className="text-sm text-gray-500 mt-2">
          Competitive pricing for bulk and repeat orders.
        </p>
      </div>

      <div className="bg-white text-gray-900 p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Reliable Supply</h3>
        <p className="text-sm text-gray-500 mt-2">
          Always stocked with essential products.
        </p>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
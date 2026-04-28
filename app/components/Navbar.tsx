"use client";

import { useCart } from "../cart-context";

export default function Navbar() {
  const { cart } = useCart();

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
  <div className="w-10 h-2 bg-blue-700" />
  <div className="w-8 h-2 bg-blue-600 ml-1" />
  <div className="w-6 h-2 bg-blue-500 ml-2" />
</div>
          <div>
            <div className="font-bold text-gray-900">
              ATA Wholesale
            </div>
            <div className="text-xs text-gray-500">
              Supply & Distribution
            </div>
          </div>
        </a>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* Order Summary */}
          {itemCount > 0 && (
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs text-gray-500">
                {itemCount} items
              </span>
              <span className="text-sm font-semibold text-blue-600">
                ${totalPrice}
              </span>
            </div>
          )}

          {/* Cart */}
          <a
            href="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded border border-gray-200 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </a>

          {/* Auth */}
          <a
            href="/login"
            className="text-sm text-gray-700 hover:text-blue-600"
          >
            Login
          </a>

          <a
            href="#products"
            className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
          >
            Shop Now
          </a>

        </div>
      </div>
    </header>
  );
}
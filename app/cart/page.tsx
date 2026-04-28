"use client";

import { useCart } from "../cart-context";
import { useState, useEffect } from "react";

type SavedOrder = {
  id: string;
  date: string;
  items: any[];
  total: number;
};

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString());

    // load existing order if exists
    const saved = localStorage.getItem("currentOrder");
    if (saved) {
      const parsed: SavedOrder = JSON.parse(saved);
      setOrderConfirmed(true);
      setOrderId(parsed.id);
    }
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    if (cart.length === 0) return;

    const newOrderId = "ORD-" + Date.now(); // unique
    const newOrder: SavedOrder = {
      id: newOrderId,
      date: today,
      items: cart,
      total,
    };

    localStorage.setItem("currentOrder", JSON.stringify(newOrder));

    setOrderId(newOrderId);
    setOrderConfirmed(true);

    // optional: clear cart after save
    // clearCart();
  };

 return (
  <div className="min-h-screen bg-white text-black p-8">
    <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm p-8 rounded-3xl border border-white/10">

      {orderConfirmed && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500 text-emerald-400 font-semibold text-center">
          Order Confirmed ✔️
        </div>
      )}

      {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">ATA Wholesale</h1>
            <p className="text-gray-500 text-sm">
              Supply & Distribution
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800">PRICE QUOTE</h2>
            <p className="text-gray-500 text-sm">
              Order #{orderId || "—"}
            </p>
            <p className="text-gray-500 text-sm">
              Date: {today}
            </p>
          </div>
        </div>

        {/* CUSTOMER INFO */}
        <div className="mb-8 grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-slate-400 mb-1">Bill To</p>
            <p className="text-gray-900 font-semibold">Sample Store LLC</p>
            <p className="text-slate-400">San Francisco, CA</p>
            <p className="text-slate-400">(415) 000-0000</p>
          </div>

          <div>
            <p className="text-slate-400 mb-1">Ship To</p>
            <p className="text-gray-900 font-semibold">Sample Store LLC</p>
            <p className="text-slate-400">San Francisco, CA</p>
          </div>
        </div>

        {/* EMPTY */}
        {cart.length === 0 && !orderConfirmed && (
          <p className="text-slate-400 mb-6">
            No items in your order
          </p>
        )}

        {/* TABLE */}
        {cart.length > 0 && (
          <>
            <table className="w-full text-sm mb-6">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="text-left py-3">Product</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-white/5">
                    <td className="py-4 font-semibold">
                      {item.name}
                    </td>

                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          disabled={orderConfirmed}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 bg-white/10 rounded disabled:opacity-30"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          disabled={orderConfirmed}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 bg-white/10 rounded disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="text-center text-emerald-400">
                      ${item.price}
                    </td>

                    <td className="text-center text-emerald-400 font-bold">
                      ${item.price * item.quantity}
                    </td>

                    <td className="text-right">
                      {!orderConfirmed && (
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400"
                        >
                          Remove
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* TOTAL */}
            <div className="flex justify-end mb-6">
              <div className="text-right">
                <p className="text-slate-400">Subtotal</p>
                <p className="text-2xl font-bold text-emerald-400">
                  ${total}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="space-y-3">
              {!orderConfirmed ? (
                <button
                  onClick={handleConfirm}
                  className="w-full bg-emerald-500 py-3 rounded-xl text-black font-semibold"
                >
                  Confirm Order
                </button>
              ) : (
                <p className="text-center text-emerald-400">
                  Order saved successfully
                </p>
              )}

              <button
                onClick={() => window.print()}
                className="w-full border border-white/10 py-3 rounded-xl text-slate-400"
              >
                Print / Save PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
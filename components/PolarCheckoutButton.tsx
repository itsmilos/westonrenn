"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function PolarCheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Could not create checkout");
      }

      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        window.location.href = data.url;
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error("Polar checkout error:", err);
      setError("Checkout could not be opened. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="group relative mt-8 flex w-full items-center justify-center overflow-hidden border border-[#c8b89a]/60 bg-[#a89577] px-7 py-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0b0b0a] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c8b89a] hover:shadow-[0_20px_60px_rgba(168,149,119,0.22)] disabled:cursor-wait disabled:opacity-70"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative flex items-center gap-4">
          {loading ? "Opening checkout..." : "Read The Book"}

          <ArrowUpRight
            size={15}
            strokeWidth={1.4}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </button>

      {error && (
        <p
          role="alert"
          className="mt-4 text-center text-xs leading-5 text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

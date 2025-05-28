import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16 justify-between">
        {/* Logo y menú */}
        <div className="flex items-center gap-12">
          <span className="flex items-center font-bold text-lg text-white">
            {/* Icono simple */}
            <svg width="24" height="24" fill="none" className="mr-2">
              <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
            </svg>
            Pandem
          </span>
          <div className="flex gap-8 text-sm text-neutral-300">
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">FAQs</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
        {/* Botones */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-neutral-300 hover:text-white text-sm">Login</a>
          <a
            href="#"
            className="bg-white text-black rounded-md px-4 py-1.5 font-semibold text-sm hover:bg-neutral-200 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
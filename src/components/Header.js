import React, { useState } from "react";
import DemoForm from "./DemoForm";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#111] text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 pt-2">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-white rounded-lg text-base font-bold mb-2 md:mb-0 transition"
        >
          Book A Demo
        </button>
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm">
          <span>📞 +91 83038 37930</span>
          <span>✉️ contactus@a2developers.org</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-3">
        <span className="text-2xl font-medium">A2 Developers</span>
        <span className="text-3xl cursor-pointer">&#9776;</span>
      </div>
      <DemoForm open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

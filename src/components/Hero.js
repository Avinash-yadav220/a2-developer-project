
import React from "react";

export default function Hero() {
  return (
  <section className="relative h-screen w-full flex items-center justify-center text-center z-30">
  <div className="absolute top-[35%] w-full px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      All Your Information in One Place
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mt-4">
      Simplify Management with a Unified Data Platform
    </p>
  </div>
</section>
  );
}


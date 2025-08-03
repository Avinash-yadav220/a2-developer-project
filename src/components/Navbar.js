

import React from "react";

export default function Header({ onDemoClick }) {
  return (
    <header className="relative w-full h-auto overflow-hidden">
      <div className="relative z-10 px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="relative inline-block z-10">
            <span className="absolute inset-0 bg-blue-400 rounded-lg transform translate-y-2 animate-slide"></span>
            <button
              onClick={onDemoClick}
              className="relative flex items-center justify-center px-2 md:px-3 py-[2px] md:py-1 text-white bg-blue-600 rounded-lg focus:outline-none"
            >
              <span className="text-sm md:text-lg font-semibold text-center">
                Book A Demo &nbsp;
              </span>
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9.5 19.5l7-7-7-7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-col sm:flex-row">
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="white"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <a href="tel:+918303837930" className="text-white text-xs sm:text-sm md:text-base">
                +91 83038 37930
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-white text-lg sm:text-xl md:text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              <a href="mailto:contactus@a2developers.org" className="text-white text-xs sm:text-sm md:text-base">
                contactus@a2developers.org
              </a>
            </div>
          </div>
        </div>

        <hr className="my-2 border-gray-300" />
        <nav className="w-full relative">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <img
                className="w-[10px] h-[30px] md:w-[60px] md:h-[60px]"
                src="/logo1.png"
                alt="Logo"
                loading="lazy"
              />
              <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-normal drop-shadow-[2px_2px_2px_black]">
                A2 Developers
              </h1>
            </div>
            <div className="block md:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <ul className="hidden md:flex md:justify-center md:space-x-6 pr-[420px]">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Product", href: "/#product" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Services", href: "/#services" },
              ].map((item) => (
                <li key={item.label} style={{ textShadow: "rgba(0, 0, 0, 0.5) 2px 2px 4px" }}>
                  <a
                    href={item.href}
                    className={`text-white text-base hover:underline font-bold pb-1 text-xl ${
                      item.label === "Home" ? "underline" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}









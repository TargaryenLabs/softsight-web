'use client';

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-40 flex justify-center backdrop-blur-md">
      <div className="mt-6 bg-white/70 border border-blue-100 shadow-xl flex w-[90%] max-w-[1400px] h-[80px] items-center rounded-full justify-between px-6 md:px-10 transition-all duration-300">

        {/* Logo Section */}
        <a href="/" className="flex items-center gap-3 text-[28px] font-bold text-gray-800">
          <Image alt="Logo" src="/images/logo.png" width={50} height={50} className="rounded-full" />
          <span>
            <span className="text-blue-600">Soft</span>Sight
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12 text-[16px] font-medium text-gray-700">
          <a href="/" className="hover:text-blue-600 transition duration-300">
            Home
          </a>
          <a href="/forecast" className="hover:text-blue-600 transition duration-300">
            Forecast
          </a>
          <a href="/about-us" className="hover:text-blue-600 transition duration-300">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

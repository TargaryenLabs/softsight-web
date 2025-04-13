'use client';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-400">SoftSight</h2>
          <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Links */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/forecast" className="hover:text-blue-400 transition">Forecast</a>
          <a href="/about-us" className="hover:text-blue-400 transition">About Us</a>
        </div>

        {/* Right: Call to Action */}
        <div className="text-center md:text-right">
          <p className="text-sm mb-5 text-gray-400 ">Ready to forecast your project?</p>
          <a href="/forecast" className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-lg transition">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full items-center justify-center fixed z-50 flex">
      <div className="mt-[20px] bg-blue-50 flex w-[1400px] h-[80px] items-center rounded-3xl justify-between pl-[50px] pr-[80px] shadow-2xl">
        <div className="flex text-[32px] gap-3 font-[640] items-center">
          {/* Logo Start */}
          <a href="/" className="flex items-center gap-4">
            <div>
              <Image alt="Logo" src="/images/logo.png" width={60} height={60} />
            </div>
            <div className="flex gap-1">
              <p>Soft</p>
              <p className="">Sight</p>
            </div>
          </a>
          {/* Logo End */}
        </div>

        {/* Links Start*/}
        <div className="flex gap-[160px] text-[18px] font-[400]">
          <a
            href="/"
            className="hover:text-[#1E73E8] transition-all duration-500"
          >
            Home
          </a>
          <a
            href="/forecast"
            className="hover:text-[#1E73E8] transition-all duration-500"
          >
            Forecast
          </a>
          <a
            href="/about-us"
            className="hover:text-[#1E73E8] transition-all duration-500"
          >
            About us
          </a>
        </div>
        {/* Links End*/}
      </div>
    </div>
  );
};

export default Navbar;

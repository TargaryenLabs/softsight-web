const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[650px] opacity-95 w-[1350px] mt-[150px] rounded-3xl justify-center items-center flex flex-col">
        {/* Heading */}
        <p className="text-[60px] w-[1000px] font-[700] text-white text-center">
          Forecast Your Software Project's Success Before You Write a Single
          Line of Code!
        </p>
        {/* Sub Heading */}
        <p className="text-white w-[1000px] text-[24px] pt-[65px] text-center">
          With SoftSight, get accurate, data-driven predictions on your software
          project's chance of success based on your team, budget, methodology,
          and more.
        </p>
        {/* Navigation */}
        <a
          href="/Forecast"
          className="w-[338px] h-[71px] flex justify-center items-center border-2 hover:bg-white bg-blue-50/10 text-white border-white rounded-3xl mt-[80px] group transition-all  duration-500"
        >
          <p className="text-[20px] font-[600] group-hover:text-[#1E73E8] text-white">
            Forecast My Project
          </p>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

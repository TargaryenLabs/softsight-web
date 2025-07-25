const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[650px] sm:h-[700px] md:h-[750px] lg:h-[650px] w-full max-w-[1350px] mt-[150px] rounded-3xl justify-center items-center flex flex-col text-center px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <p className="text-white font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight max-w-[900px]">
          Forecast Your Software Project's Success Before You Write a Single
          Line of Code!
        </p>

        {/* Sub Heading */}
        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] pt-10 max-w-[800px]">
          With SoftSight, get accurate, data-driven predictions on your software
          project's chance of success based on your team, budget, methodology,
          and more.
        </p>

        {/* CTA Button */}
        <a
          href="/forecast"
          className="relative mt-12 w-[280px] sm:w-[300px] md:w-[320px] h-[60px] sm:h-[65px] md:h-[71px] flex justify-center items-center border-2 border-white rounded-3xl group transition-all duration-500 overflow-hidden"
        >
          {/* White overlay appears on hover */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

          <p className="relative z-10 text-[18px] sm:text-[20px] font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[url('/images/bg.png')] group-hover:bg-cover group-hover:bg-center">
            Forecast My Project
          </p>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

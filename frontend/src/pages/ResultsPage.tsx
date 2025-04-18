"use client";

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ForecastMeter from "../components/ResultsPage/ForecastMeter";
import InsightList from "../components/ResultsPage/InsightList";
import SummaryBox from "../components/ResultsPage/SummaryBox";
import TipsList from "../components/ResultsPage/TipList";
import { useSearchParams } from "next/navigation";

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const prediction = Number(searchParams && searchParams.get("prediction"));

  return (
<div className="relative min-h-screen bg-gray-50">
  {/* 🔧 Development Banner */}
  <div className="fixed top-0 left-0 w-full z-50 bg-yellow-100 border-b border-yellow-300 text-yellow-800 text-sm py-2 px-4 text-center shadow-md">
    🚧 This site is currently under development. Features may not be final.
  </div>

  {/* Add margin to offset both banner and navbar */}
  <div className="pt-[110px]">
    <Navbar />
    <div className="w-full mt-[60px] px-6 flex justify-center">
      <div className="max-w-[900px] w-full space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Your Forecast is Ready!
        </h1>
        <ForecastMeter percentage={prediction} />
        <SummaryBox />
        <InsightList />
        <TipsList />
      </div>
    </div>
    <Footer />
  </div>
</div>

  );
};

export default ResultsPage;

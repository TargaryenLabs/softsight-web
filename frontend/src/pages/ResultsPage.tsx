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
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-gray-50 mt-[150px] px-6 flex justify-center">
        <div className="max-w-[900px] w-full space-y-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Your Forecast is Ready!</h1>
          <ForecastMeter percentage={prediction} />
          <SummaryBox />
          <InsightList />
          <TipsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultsPage;

"use client";

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ForecastMeter from "../components/ResultsPage/ForecastMeter";
import InsightList from "../components/ResultsPage/InsightList";
import TipsList from "../components/ResultsPage/TipList";
import { useEffect, useState } from "react";

const ResultsPage = () => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const storedPrediction = sessionStorage.getItem("prediction");
    const storedSuggestions = sessionStorage.getItem("suggestions");

    if (storedPrediction) {
      setPrediction(Number(storedPrediction));
    }

    if (storedSuggestions) {
      try {
        const parsed = JSON.parse(storedSuggestions);
        setSuggestions(parsed);
      } catch (err) {
        console.error("Failed to parse suggestions from sessionStorage:", err);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="pt-[110px]">
        <Navbar />
        <div className="w-full mt-[60px] px-6 flex justify-center">
          <div className="max-w-[900px] w-full space-y-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Your Forecast is Ready!
            </h1>
            {prediction !== null && <ForecastMeter percentage={prediction} />}
            <div className="mt-20">
               <InsightList suggestions={suggestions} />
            </div>
           
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ResultsPage;

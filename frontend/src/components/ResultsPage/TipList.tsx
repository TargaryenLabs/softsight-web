"use client";
import { motion } from "framer-motion";
import { SiTicktick } from "react-icons/si";

const tips = [
  "Reassess Scope: Focus on MVP if budget is tight.",
  "Improve Testing Plan: Allocate time/resources for QA.",
  "Involve Clients Regularly: Use sprint demos or review meetings.",
  "Upskill the Team: If experience is low, plan initial training or onboarding.",
];

const TipsList = () => (
  <motion.div
    className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-gray-800 shadow-sm mt-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
      <p><SiTicktick/> </p>
    Tips to Improve Your Chances
    </h2>
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
      {tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>
  </motion.div>
);

export default TipsList;

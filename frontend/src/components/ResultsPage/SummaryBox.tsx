'use client'
import { motion } from "framer-motion";

const SummaryBox = () => (
  <motion.div
    className="bg-blue-50 border  border-blue-200 rounded-lg p-6 text-gray-800 shadow-sm mt-20"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="text-xl font-semibold mb-2">Forecast Summary</h2>
    <p className="mb-1">
      <strong>
        Your team’s strong experience and Agile approach boost your chances.
      </strong>
    </p>
    <p>
      However, a tight budget and limited client involvement could pose
      challenges.
    </p>
  </motion.div>
);

export default SummaryBox;

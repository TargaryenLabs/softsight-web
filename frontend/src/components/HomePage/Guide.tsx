'use client';

import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { MdOutlineDoneOutline } from "react-icons/md";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Guide = () => {
  return (
    <div className="mt-20 px-4 flex w-full justify-center bg-[#f8fbff] py-16">
      <div className="flex w-full max-w-[1200px] flex-col items-center text-center justify-center">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-[48px] md:text-[60px] font-extrabold text-gray-800 leading-tight mb-8">
            How It Works
          </h2>
        </motion.div>

        {/* Step 01 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-[600px] mt-10"
        >
          <p className="text-[20px] text-[#0178d9] font-bold mb-2">Step 01</p>
          <h3 className="text-[28px] font-semibold text-gray-800">Input Your Project Details</h3>
          <p className="text-[15px] text-gray-600 mt-2">
            Enter key attributes like team size, experience, budget, and methodology. Our tool makes it simple.
          </p>
          <div className="mt-6 flex items-center justify-center w-full text-[#0178d9]">
            <PiArrowFatLinesDownFill size={40} />
          </div>
        </motion.div>

        {/* Step 02 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-[600px] mt-10"
        >
          <p className="text-[20px] text-[#0178d9] font-bold mb-2">Step 02</p>
          <h3 className="text-[28px] font-semibold text-gray-800">Predict Using Smart Algorithms</h3>
          <p className="text-[15px] text-gray-600 mt-2">
            Our forecasting engine analyses your inputs using patterns from real-world project outcomes.
          </p>
          <div className="mt-6 flex items-center justify-center w-full text-[#0178d9]">
            <PiArrowFatLinesDownFill size={40} />
          </div>
        </motion.div>

        {/* Step 03 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-[600px] mt-10"
        >
          <p className="text-[20px] text-[#0178d9] font-bold mb-2">Step 03</p>
          <h3 className="text-[28px] font-semibold text-gray-800">Get Actionable Insights</h3>
          <p className="text-[15px] text-gray-600 mt-2">
            View your success score and receive personalized tips to improve project outcomes.
          </p>
          <div className="mt-6 flex items-center justify-center w-full text-[#0178d9]">
            <MdOutlineDoneOutline size={40} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guide;

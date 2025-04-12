"use client";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
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
    <div className="mt-[50px] flex w-full justify-center">
      <div className="flex w-[1400px] flex-col items-center text-center justify-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <p className="text-[60px] font-[600]">How It Works</p>
        </motion.div>

        {/* Step 01 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-[45px] flex flex-col gap-2"
        >
          <p className="text-[45px] font-[500]">Step 01</p>
          <p className="text-[30px]">Input Your Project Details</p>
          <p className="w-[400px] text-[14px]">
            Enter key attributes like team size, experience, budget, and
            methodology. Our tool makes it simple.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-[#1E73E8] mt-[20px] ml-[170px]"
          >
            <PiArrowFatLinesDownFill size={60} />
          </motion.div>
        </motion.div>

        {/* Step 02 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-[45px] flex flex-col gap-2"
        >
          <p className="text-[45px] font-[500]">Step 02</p>
          <p className="text-[30px]">Predict Using Smart Algorithms</p>
          <p className="w-[400px] text-[14px]">
            Our forecasting engine analyses your inputs using patterns from
            real-world project outcomes.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-[#1E73E8] mt-[20px] ml-[170px]"
          >
            <PiArrowFatLinesDownFill size={60} />
          </motion.div>
        </motion.div>

        {/* Step 03 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-[45px] flex flex-col gap-2"
        >
          <p className="text-[45px] font-[500]">Step 03</p>
          <p className="text-[30px]">Get Actionable Insights</p>
          <p className="w-[400px] text-[14px]">
            View your success score and receive personalized tips to improve
            project outcomes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Guide;

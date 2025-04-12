"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

type ForecastMeterProps = {
  percentage: number;
};

const ForecastMeter = ({ percentage }: ForecastMeterProps) => {
  const radius = 80;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const color =
    percentage >= 75 ? "#22c55e" : percentage >= 50 ? "#eab308" : "#ef4444";

  // Count-up animation logic
  const progress = useMotionValue(0);
  const rounded = useTransform(progress, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(progress, percentage, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [percentage, progress, rounded]);

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="text-xl font-semibold text-gray-700">Success Probability</p>

      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Count-up number */}
      <div className="text-4xl font-bold text-gray-800 -mt-[114px]">
        {displayValue}%
      </div>
    </motion.div>
  );
};

export default ForecastMeter;

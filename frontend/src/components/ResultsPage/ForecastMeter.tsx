"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

type ForecastMeterProps = {
  percentage: number;
};

const ForecastMeter = ({ percentage }: ForecastMeterProps) => {
  const radius = 100;
  const stroke = 14;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;

  const progress = useMotionValue(0);
  const rounded = useTransform(progress, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getStatus = () => {
    if (percentage >= 75) return { label: "High Confidence", color: "#22c55e" };
    if (percentage >= 50) return { label: "Moderate", color: "#eab308" };
    return { label: "Low Confidence", color: "#ef4444" };
  };

  const status = getStatus();

  useEffect(() => {
    const controls = animate(progress, percentage, {
      duration: 1.8,
      ease: "easeInOut",
    });

    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [percentage]);

  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-lg font-semibold text-gray-600 tracking-wide">
        Success Probability
      </p>

      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={status.color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={status.color} stopOpacity="1" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Ring */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Animated Ring */}
          <motion.circle
            stroke="url(#gradientStroke)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            transform={`rotate(-90 ${radius} ${radius})`}
            filter="url(#glow)"
          />
        </svg>

        {/* Center Glass Core */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-white shadow-xl"
          style={{
            width: radius * 1.6,
            height: radius * 1.6,
            top: radius * 0.2,
            left: radius * 0.2,
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="text-5xl font-bold text-gray-800">
            {displayValue}%
          </div>
          <div
            className="mt-2 text-sm font-medium"
            style={{ color: status.color }}
          >
            {status.label}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ForecastMeter;

"use client";
import { motion } from "framer-motion";
import { GiThink } from "react-icons/gi";
import { SiTicktick } from "react-icons/si";
import { CiWarning } from "react-icons/ci";

type Suggestion = {
  title: string;
  suggestion: string;
};

type Props = {
  suggestions: Suggestion[];
};

const InsightList = ({ suggestions }: Props) => (
  <motion.div
    className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-gray-800 shadow-md mt-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="text-2xl font-bold text-blue-900 flex gap-2 items-center mb-6">
      <GiThink size={24} />
      Personalized Insights
    </h2>
    <ul className="space-y-5">
      {suggestions.map((item, index) => {
        const Icon = CiWarning;
        const iconColor = "text-yellow-600";

        return (
          <li
            key={index}
            className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-3">
              <span className={`mt-1 ${iconColor}`}>
                <Icon size={20} />
              </span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.suggestion}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </motion.div>
);

export default InsightList;

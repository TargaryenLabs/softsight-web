"use client"
import { motion } from 'framer-motion';
import { SiTicktick } from 'react-icons/si';
import { CiWarning } from "react-icons/ci";
import { GiThink } from "react-icons/gi";

const insights = [
  {
    type: <SiTicktick/> ,
    label: "High Experience",
    text: "Skilled teams are more adaptable and faster at problem-solving.",
  },
  {
    type: <CiWarning />,
    label: "Low Budget",
    text: "Budget constraints may affect testing and QA. Prioritize core features.",
  },
  {
    type: <CiWarning />,
    label: "Low Client Involvement",
    text: "Consider weekly check-ins to avoid misunderstandings and scope creep.",
  },
  {
    type: <SiTicktick/> ,
    label: "Agile Methodology",
    text: "Agile improves flexibility and early feedback, increasing success rate.",
  },
];

const InsightList = () => (
    <motion.div
    className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-gray-800 shadow-sm mt-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="text-xl font-semibold text-gray-800 flex gap-2 items-center mb-4">
      <p><GiThink /></p> Personalized Insights
    </h2>
    <ul className="space-y-4 text-left">
      {insights.map((item, index) => (
        <li className='flex gap-2' key={index}>
          <strong className='flex items-center gap-2'>
            {item.type} {item.label}:
          </strong>{" "}
          <span className="text-gray-600">{item.text}</span>
        </li>
      ))}
    </ul>
    </motion.div>
);

export default InsightList;

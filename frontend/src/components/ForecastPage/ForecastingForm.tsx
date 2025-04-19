"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const ForecastingForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    project_complexity: "",
    scope_clarity: "",
    urgency_level: "",
    org_structure_type: "",
    client_priority: "",
    avg_dev_experience: "",
    pm_experience: "",
    team_sdlc_knowledge: "",
    user_involvement: "",
    tool_familiarity: "",
    legacy_system_involved: "",
    tech_stack_familiarity: "",
    testing_strategy: "",
    on_schedule: "",
    budget_estimation: "",
    communication_quality: "",
    risk_management_score: "",
    control_mechanism: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("🔍 API Response:", data);

    if (!data || data.prediction === undefined) {
      alert("❌ Prediction failed. Check your API/server logs.");
      return;
    }

    router.push(`/results?prediction=${data.probability}`);
  };

  const renderSelect = (
    name: string,
    label: string,
    description: string,
    options: string[]
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block font-semibold text-gray-700 mb-1">{label}</label>
      <p className="text-sm text-gray-500 mb-1 h-[65px]">{description}</p>
      <select
        name={name}
        value={form[name as keyof typeof form]}
        onChange={handleChange}
        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex items-start justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-12"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-3xl px-12 py-14 w-full max-w-7xl border border-slate-200"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project-Specific Attributes Section */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-16">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
            <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {renderSelect(
                "project_complexity",
                "Project Complexity",
                "Indicates the technical and business difficulty of the project. Higher complexity may lead to more risks and delays.",
                ["Low", "Medium", "High"]
              )}
              {renderSelect(
                "scope_clarity",
                "Scope Clarity",
                "Represents how clearly the project scope is defined. Clearer scope helps reduce uncertainty and change requests.",
                ["Vague", "Medium", "Clear"]
              )}
              {renderSelect(
                "urgency_level",
                "Urgency Level",
                "Measures how quickly the client expects the project to be completed. High urgency may reduce time for testing and planning.",
                ["Low", "Medium", "High"]
              )}
              {renderSelect(
                "on_schedule",
                "On Schedule",
                "Is the project progressing according to the planned schedule? Useful to identify early delays.",
                ["Yes", "No"]
              )}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Budget Estimation (USD)
                </label>
                <p className="text-sm h-[65px] text-gray-500 mb-1">
                  Estimated cost of the full project. Affects resource
                  allocation and planning strategies.
                </p>
                <input
                  type="number"
                  name="budget_estimation"
                  value={form.budget_estimation}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="bg-blue-100/70 px-5 py-4 rounded-xl xl:h-[120px] text-sm text-blue-900 shadow-sm border border-blue-100">
              <h4 className="font-bold mb-2">Project-Specific Inputs</h4>
              These fields describe how complex, urgent, and well-defined your
              project is. More complex or vague projects usually face more
              challenges.
            </div>
          </div>
        </div>

        {/* Environmental & Organizational Attributes Section */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSelect(
                "org_structure_type",
                "Organizational Structure",
                "Defines how the team is structured within the organization. Projectized teams are fully dedicated, while Functional ones have more rigid chains.",
                ["Projectized", "Matrix", "Functional"]
              )}
              {renderSelect(
                "client_priority",
                "Client Priority",
                "What the client values most: fast delivery (Time), lower costs (Cost), or top-notch quality (Quality).",
                ["Time", "Cost", "Quality"]
              )}
              {renderSelect(
                "control_mechanism",
                "Control Mechanism",
                "Level of monitoring used during execution — dashboards, KPIs, and regular reviews indicate stronger control.",
                ["Weak", "Moderate", "Strong"]
              )}
              {renderSelect(
                "risk_management_score",
                "Risk Management Score",
                "Measures how thoroughly risks are identified, tracked, and mitigated in the project.",
                ["Low", "Medium", "High"]
              )}
            </div>
            <div className="bg-blue-100/70 px-5 py-4 rounded-xl xl:h-[150px] text-sm text-blue-900 shadow-sm border border-blue-100">
              <h4 className="font-bold mb-2">Organizational Context</h4>
              Organizational structure and client priorities shape how fast and
              efficiently decisions are made. Strong monitoring and risk
              management improve project control.
            </div>
          </div>
        </div>

        {/* Team & Human Factors Section */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Average Developer Experience (0–10)
                </label>
                <p className="text-sm h-[65px] text-gray-500 mb-1">
                  Average number of years your developers have been coding
                  professionally. More experience usually means better quality.
                </p>
                <input
                  type="number"
                  name="avg_dev_experience"
                  min="0"
                  max="10"
                  value={form.avg_dev_experience}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Project Manager Experience (0–10)
                </label>
                <p className="text-sm h-[65px] text-gray-500 mb-1">
                  Experience of the project manager in years. More experience
                  means better planning, mitigation, and delivery handling.
                </p>
                <input
                  type="number"
                  name="pm_experience"
                  min="0"
                  max="10"
                  value={form.pm_experience}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {renderSelect(
                "team_sdlc_knowledge",
                "Team SDLC Knowledge",
                "Team's understanding of Software Development Life Cycle (SDLC) such as Agile, Scrum, or Waterfall.",
                ["Low", "Medium", "High"]
              )}
              {renderSelect(
                "user_involvement",
                "User Involvement",
                "How often end-users are engaged during development — such as in feedback loops or testing.",
                ["Low", "Medium", "High"]
              )}
              {renderSelect(
                "communication_quality",
                "Communication Quality",
                "Measures how clearly and frequently the team shares updates internally and externally.",
                ["Poor", "Average", "Good"]
              )}
            </div>
            <div className="bg-blue-100/70 px-5 py-4 rounded-xl xl:h-[140px] text-sm text-blue-900 shadow-sm border border-blue-100">
              <h4 className="font-bold mb-2">
                Team Experience & Collaboration
              </h4>
              These factors reflect how skilled your team is and how well they
              work together. Strong teams with good communication and user input
              often perform better.
            </div>
          </div>
        </div>

        {/* Technology & Tools Section */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSelect(
                "tool_familiarity",
                "Tool Familiarity",
                "Familiarity with tools used during development like Git, Docker, CI/CD pipelines.",
                ["Low", "Medium", "High"]
              )}
              {renderSelect(
                "legacy_system_involved",
                "Legacy System Involved",
                "Does your system need to integrate with older software or databases? Legacy systems often cause complexity.",
                ["TRUE", "FALSE"]
              )}
              {renderSelect(
                "tech_stack_familiarity",
                "Tech Stack Familiarity",
                "How experienced the team is with the chosen tech stack (e.g., React, Django, AWS).",
                ["Low", "Medium", "High"]
              )}
              {renderSelect(
                "testing_strategy",
                "Testing Strategy",
                "Approach to quality assurance — automated tools, manual testing, or a hybrid.",
                ["Automated", "Manual", "Mixed"]
              )}
            </div>
            <div className="bg-blue-100/70 px-5 py-4 rounded-xl xl:h-[120px] text-sm text-blue-900 shadow-sm border border-blue-100">
              <h4 className="font-bold mb-2">Technology & Tools</h4>
              Familiarity with tools and technologies can drastically affect
              productivity. Integration with legacy systems may increase
              complexity.
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-12 py-4 rounded-xl shadow-lg transition duration-300 ease-in-out"
          >
            Predict Success ➜
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ForecastingForm;

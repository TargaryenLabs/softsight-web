"use client";
import { useRouter } from "next/navigation";
import ForecastingInputField from "./ForecastingInputField";
import { useState } from "react";

const ForecastingForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    teamSize: "",
    duration: "",
    budget: "",
    experience: "",
    techStack: "",
    methodology: "",
    clientInvolvement: "",
    riskLevel: "",
    successRate: "",
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
    router.push(`/results?prediction=${data.prediction}`)
  };

 

  return (
    <div className="w-full flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-10 py-10 w-full max-w-[900px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ForecastingInputField
            label="Team Size"
            name="teamSize"
            onChange={handleChange}
            placeholder="How many members are on your core team?"
          />
          <ForecastingInputField
            label="Project Duration"
            name="duration"
            onChange={handleChange}
            placeholder="Estimated timeline in months"
          />
          <ForecastingInputField
            label="Budget"
            name="budget"
            onChange={handleChange}
            placeholder="Total allocated budget in USD"
          />
          <ForecastingInputField
            label="Experience Level"
            name="experience"
            onChange={handleChange}
            placeholder="Overall experience level of your team"
          />
          <ForecastingInputField
            label="Technology Stack"
            name="techStack"
            onChange={handleChange}
            placeholder="Select the tech/tools you'll be using"
          />
          <ForecastingInputField
            label="Methodology"
            name="methodology"
            onChange={handleChange}
            placeholder="Pick your project methodology (Agile, Scrum…)"
          />
          <ForecastingInputField
            label="Client Involvement"
            name="clientInvolvement"
            onChange={handleChange}
            placeholder="How involved is the client throughout the process?"
          />
          <ForecastingInputField
            label="Risk Level"
            name="riskLevel"
            onChange={handleChange}
            placeholder="How risky is this project (based on scope/tech)?"
          />
          <ForecastingInputField
            label="Previous Success Rate"
            name="successRate"
            onChange={handleChange}
            placeholder="If you’ve done similar projects, what % were successful?"
          />
        </div>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg transition"
          >
            Predict Success ➜
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForecastingForm;

'use client';
import ForecastingInputField from "./ForecastingInputField";

const ForecastingForm = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={() => {
          console.log("done");
        }}
        className="bg-white shadow-lg rounded-xl px-10 py-10 w-full max-w-[900px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ForecastingInputField
            label="Team Size"
            name="teamSize"
            placeholder="How many members are on your core team?"
          />
          <ForecastingInputField
            label="Project Duration"
            name="duration"
            placeholder="Estimated timeline in months"
          />
          <ForecastingInputField
            label="Budget"
            name="budget"
            placeholder="Total allocated budget in USD"
          />
          <ForecastingInputField
            label="Experience Level"
            name="experience"
            placeholder="Overall experience level of your team"
          />
          <ForecastingInputField
            label="Technology Stack"
            name="techStack"
            placeholder="Select the tech/tools you'll be using"
          />
          <ForecastingInputField
            label="Methodology"
            name="methodology"
            placeholder="Pick your project methodology (Agile, Scrum…)"
          />
          <ForecastingInputField
            label="Client Involvement"
            name="clientInvolvement"
            placeholder="How involved is the client throughout the process?"
          />
          <ForecastingInputField
            label="Risk Level"
            name="riskLevel"
            placeholder="How risky is this project (based on scope/tech)?"
          />
          <ForecastingInputField
            label="Previous Success Rate"
            name="successRate"
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

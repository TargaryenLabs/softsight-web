import { SiBookstack } from "react-icons/si";
const AboutUsContent = () => {
  return (
    <div className="w-full  bg-white px-6 flex justify-center mt-[150px]">
      <div className="max-w-[900px] w-full text-center space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 justify-center flex items-center sm:gap-10">
          <p className="hidden sm:block">
            <SiBookstack />
          </p>
          <p>About SoftSight</p>
        </h1>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-blue-600">
            What is SoftSight?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            SoftSight is a smart forecasting tool designed for developers,
            managers, and startups to estimate the chances of project success
            based on practical software metrics.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-blue-600">Why Use It?</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Most software projects fail due to underestimated risks. SoftSight
            helps you predict and prepare before investing time and money.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-blue-600">
            Who is it for?
          </h2>
          <ul className="text-gray-700 text-base list-disc list-inside space-y-1 text-left max-w-[600px] mx-auto">
            <li>Startups launching MVPs</li>
            <li>Freelancers planning client work</li>
            <li>IT Managers assessing internal projects</li>
            <li>Educators teaching project management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;

import Footer from "../components/Footer";
import ForecastingForm from "../components/ForecastPage/ForecastingForm";
import ForecastingHeading from "../components/ForecastPage/ForecastingHeading";
import Navbar from "../components/NavBar";

const ForecastPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <ForecastingHeading />
      </div>
      <div>
        <ForecastingForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ForecastPage;

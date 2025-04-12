import Guide from "../components/HomePage/Guide";
import HeroSection from "../components/HomePage/HeroSection";
import Navbar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <Guide />
      </div>
    </div>
  );
};

export default HomePage;

import Footer from "../components/Footer";
import { CriteriaGrid } from "../components/GuidePage/CriteriaGrid";
import Navbar from "../components/NavBar";

const GuidePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <CriteriaGrid />
      </div>

      <Footer />
    </div>
  );
};

export default GuidePage;

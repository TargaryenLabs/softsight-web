'use client';

import AboutUsContent from "../components/AboutUsPage/AboutUsContent";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const AboutUsPage = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><AboutUsContent/></div>
      <div><Footer/></div>
    </div>
  );
};

export default AboutUsPage;

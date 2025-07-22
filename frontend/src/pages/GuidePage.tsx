"use client";
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { AttributeSidebar } from "../components/GuidePage/AttributeSidebar";
import { AttributeDetail } from "../components/GuidePage/AttributeDetail";

const GuidePage = () => {
  const [selected, setSelected] = useState("overview");

  return (
    <div>
      <Navbar />
      <div className="flex">
        <AttributeSidebar selected={selected} onSelect={setSelected} />
        <main className="flex-1 min-h-screen bg-gray-50">
          <AttributeDetail selected={selected} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default GuidePage;

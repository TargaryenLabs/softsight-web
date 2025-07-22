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
      <div className="flex justify-center bg-gray-100 min-h-screen pt-[150px] px-4">
        <div className="flex w-full max-w-7xl gap-6">
          <div className="bg-white rounded-lg shadow-md w-64 overflow-hidden">
            <AttributeSidebar selected={selected} onSelect={setSelected} />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <AttributeDetail selected={selected} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuidePage;

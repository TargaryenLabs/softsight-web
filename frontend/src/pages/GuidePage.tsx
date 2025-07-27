"use client";
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { AttributeSidebar } from "../components/GuidePage/AttributeSidebar";
import { AttributeDetail } from "../components/GuidePage/AttributeDetail";

const GuidePage = () => {
  const [selected, setSelected] = useState("overview");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 justify-center bg-gray-50 pt-[120px] px-4 pb-12">
        <div className="flex flex-col xl:flex-row w-full max-w-7xl gap-6">
          <div className=" xl:w-72 xl:bg-white xl:rounded-2xl xl:shadow-sm border border-white">
            <AttributeSidebar selected={selected} onSelect={setSelected} />
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <AttributeDetail selected={selected} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuidePage;

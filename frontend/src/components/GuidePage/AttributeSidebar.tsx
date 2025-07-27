"use client";
import React, { useState } from "react";
import { attributeCategories, projectSuccessStatus } from "./guideData";
import { Menu, X } from "lucide-react"; // Optional: if you're using icons (ensure `lucide-react` is installed)

type Props = {
  selected: string;
  onSelect: (key: string) => void;
};

export const AttributeSidebar = ({ selected, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (only visible on mobile) */}
      <div className="lg:hidden p-2 bg-white shadow-md sticky top-0 z-20 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-indigo-700">Guide</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-white p-4 overflow-y-auto h-full text-sm w-full lg:w-64 lg:sticky lg:top-0 lg:h-screen z-10`}
      >
        <h2 className="text-lg font-semibold mb-4 text-indigo-700 lg:block hidden">
          Guide
        </h2>
        <nav className="space-y-6">
          {/* Overview */}
          <div>
            <button
              className={`block w-full text-left px-2 py-1 rounded-md ${
                selected === "overview"
                  ? "text-white bg-indigo-600 font-semibold"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
              onClick={() => {
                onSelect("overview");
                setIsOpen(false);
              }}
            >
              Overview
            </button>
          </div>

          {/* Attributes Grouped */}
          {attributeCategories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 mt-2 mb-1">
                {cat.title}
              </h4>
              <ul className="space-y-1">
                {cat.items.map((attr) => (
                  <li key={attr.key}>
                    <button
                      className={`block w-full text-left px-2 py-1 rounded-md ${
                        selected === attr.key
                          ? "text-white bg-indigo-600 font-semibold"
                          : "hover:bg-indigo-50 text-gray-700"
                      }`}
                      onClick={() => {
                        onSelect(attr.key);
                        setIsOpen(false);
                      }}
                    >
                      {attr.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Final Output */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 mt-4 mb-1">
              Final Output
            </h4>
            <button
              className={`block w-full text-left px-2 py-1 rounded-md ${
                selected === "success_status"
                  ? "text-white bg-indigo-600 font-semibold"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
              onClick={() => {
                onSelect("success_status");
                setIsOpen(false);
              }}
            >
              {projectSuccessStatus.label}
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

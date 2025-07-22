"use client";
import React from "react";
import { attributeCategories, projectSuccessStatus } from "./guideData";

type Props = {
  selected: string;
  onSelect: (key: string) => void;
};

export const AttributeSidebar = ({ selected, onSelect }: Props) => {
  return (
    <aside className="p-4 overflow-y-auto h-full text-sm">
      <h2 className="text-lg font-semibold mb-4 text-indigo-700">Guide</h2>
      <nav className="space-y-6">
        {/* Overview */}
        <div>
          <button
            className={`block w-full text-left px-2 py-1 rounded-md ${
              selected === "overview"
                ? "text-white bg-indigo-600 font-semibold"
                : "hover:bg-indigo-50 text-gray-700"
            }`}
            onClick={() => onSelect("overview")}
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
                    onClick={() => onSelect(attr.key)}
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
            onClick={() => onSelect("success_status")}
          >
            {projectSuccessStatus.label}
          </button>
        </div>
      </nav>
    </aside>
  );
};

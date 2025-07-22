"use client";
import React from "react";
import { attributeCategories, projectSuccessStatus } from "./guideData";

type Props = {
  selected: string;
  onSelect: (key: string) => void;
};

export const AttributeSidebar = ({ selected, onSelect }: Props) => {
  return (
    <aside className="w-64 p-6 border-r border-gray-300 h-[calc(100vh-80px)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Guide</h2>
      <nav className="space-y-6">
        <div>
          <button
            className={`block text-left w-full ${
              selected === "overview" ? "text-indigo-600 font-semibold" : ""
            }`}
            onClick={() => onSelect("overview")}
          >
            Overview
          </button>
        </div>
        {attributeCategories.map((cat) => (
          <div key={cat.title}>
            <h4 className="text-sm font-medium text-gray-500 mt-4">
              {cat.title}
            </h4>
            <ul className="ml-2 space-y-1 mt-1">
              {cat.items.map((attr) => (
                <li key={attr.key}>
                  <button
                    className={`text-sm text-left w-full ${
                      selected === attr.key
                        ? "text-indigo-600 font-semibold"
                        : ""
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
        <div>
          <h4 className="text-sm font-medium text-gray-500 mt-4">
            Final Output
          </h4>
          <button
            className={`text-sm text-left w-full ${
              selected === "success_status" ? "text-indigo-600 font-semibold" : ""
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

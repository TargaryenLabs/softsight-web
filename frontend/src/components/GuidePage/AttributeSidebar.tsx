"use client";
import React from "react";
import { attributeCategories, projectSuccessStatus } from "./guideData";

type Props = {
  selected: string;
  onSelect: (key: string) => void;
};

export const AttributeSidebar = ({ selected, onSelect }: Props) => {
  return (
    <aside className="p-4 overflow-y-auto h-full">
      <h2 className="text-xl font-bold mb-4">Guide</h2>
      <nav className="space-y-6 text-sm">
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
            <h4 className="text-xs font-semibold text-gray-500 mt-4 uppercase tracking-wide">
              {cat.title}
            </h4>
            <ul className="ml-2 space-y-1 mt-1">
              {cat.items.map((attr) => (
                <li key={attr.key}>
                  <button
                    className={`text-left w-full ${
                      selected === attr.key
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-700"
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
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Final Output
          </h4>
          <button
            className={`text-left w-full ${
              selected === "success_status"
                ? "text-indigo-600 font-semibold"
                : "text-gray-700"
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

"use client";
import React from "react";
import {
  attributeCategories,
  overviewText,
  projectSuccessStatus,
} from "./guideData";

type Props = {
  selected: string;
};

export const AttributeDetail = ({ selected }: Props) => {
  if (selected === "overview") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Overview</h2>
        <p className="text-gray-700 whitespace-pre-line">{overviewText}</p>
      </div>
    );
  }

  const allAttributes = attributeCategories.flatMap((c) => c.items);
  if (selected === "success_status") {
    return <AttributeBox attribute={projectSuccessStatus} />;
  }

  const found = allAttributes.find((a) => a.key === selected);
  return found ? <AttributeBox attribute={found} /> : null;
};

const AttributeBox = ({
  attribute,
}: {
  attribute: {
    label: string;
    description: string;
    example: string;
    howToGet?: string;
  };
}) => (
  <div>
    <h2 className="text-2xl font-bold mb-2 text-indigo-700">
      {attribute.label}
    </h2>
    <p className="text-gray-800 mb-4">{attribute.description}</p>
    <div className="text-sm text-gray-600 italic mb-2">
      Example: {attribute.example}
    </div>
    {attribute.howToGet && (
      <div className="text-sm text-gray-500">
        How to get: {attribute.howToGet}
      </div>
    )}
  </div>
);

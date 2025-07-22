"use client";
import React from "react";
import {
  attributeCategories,
  overviewText,
  projectSuccessStatus,
} from "./guideData";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type Props = {
  selected: string;
};

export const AttributeDetail = ({ selected }: Props) => {
  if (selected === "overview") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Overview</h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {overviewText}
        </p>
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

type Attribute = {
  label: string;
  description: string;
};

const AttributeBox = ({ attribute }: { attribute: Attribute }) => (
  <div>
    <h2 className="text-2xl font-bold mb-2 text-indigo-700">
      {attribute.label}
    </h2>

    <div className="bg-white text-black p-4 rounded shadow mb-4">
      <div className="prose max-w-none text-black">
        <Markdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {attribute.description}
        </Markdown>
      </div>
    </div>
  </div>
);

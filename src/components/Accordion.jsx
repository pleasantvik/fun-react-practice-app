import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(items[0].id);

  const handleExpanded = (id) => {
    setExpandedIndex((prev) => {
      if (prev === id) {
        return "";
      }
      return id;
    });
  };

  const renderedItems = items.map((item) => {
    const isExpanded = item.id === expandedIndex;
    const icon = (
      <span
        className={`h-4  w-4 font-semibold mr-4 text-3xl ${
          isExpanded ? "text-red-600" : ""
        }`}
      >
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div
        key={item.id}
        onClick={() => handleExpanded(item.id)}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-semibold flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer ">
          {item.label} {icon}
        </h2>

        {isExpanded && (
          <div className="italic text-red-500 border-x border-t rounded p-4">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

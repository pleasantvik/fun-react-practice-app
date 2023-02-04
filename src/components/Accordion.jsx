import React from "react";

export const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => (
    <div key={item.id}>
      <h2>{item.label}</h2>
      <div>{item.content}</div>
    </div>
  ));

  return <div>{renderedItems}</div>;
};

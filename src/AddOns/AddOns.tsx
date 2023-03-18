import React from "react";
import { colors, messages } from "../utils";
import "./addon.css";

const AddOns = () => {
 
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <div className="texts">
      {messages.map((item) => (
        <>
          <h1 style={{ color: getRandomColor() }}>|- {item} -| </h1>
        </>
      ))}
    </div>
  );
};

export default AddOns;

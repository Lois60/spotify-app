import React from "react";
import { isDOMComponent } from "react-dom/test-utils";
import "./Buttons.css";

export const Buttons = ({ variant, children }) => {
  const buttonClasses = `button ${variant}`;
  return (
    <>
      <button className={buttonClasses}>{children}</button>
    </>
  );
};


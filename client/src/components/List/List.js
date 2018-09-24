import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="#">
      <ul className="#">
        {children}
      </ul>
    </div>
  );
};

import React from "react";

export const FormBtn = props => (
  <div className="submitBtnDiv center-align">
    <button {...props} className="searchBtn waves-effect">
      {props.children}
    </button>
  </div>
);

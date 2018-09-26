import React from "react";

const Results = props => {
  const date = props.date && props.date.slice(0, 10);
  return (
    <div className="#">
      <a href={props.url}><h6 id={props._id}>{props.title}</h6></a>
      <p>{date}</p>
      <span className="#">
        <button className="saveBtn" onClick={(event) => props.handleSaveButton(event, props._id)}>Save</button>
      </span>
    </div>
  )
};

export default Results;

import React from "react";
import "./Features.scss";

function Features({ data = [] }) {
  return (
    <>
      {data.map(({ _id, title, text, icon }) => (
        <div key={_id} className="feature-card">
          <div className="feature-title">
            <img src={icon} alt="" />
            <h6>{title}</h6>
          </div>
          <p>{text}</p>
        </div>
      ))}
    </>
  );
}

export default Features;

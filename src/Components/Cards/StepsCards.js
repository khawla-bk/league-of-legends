import React from "react";
import "./Cards.scss";

function Stepscards({ data = [] }) {
  return (
    <div className="steps__container">
      {data.map(({ _id, icon, text, title }) => (
        <div key={_id} className="steps__card">
          <img src={icon} alt="" className="steps__icon" />
          <h6 className="steps__title">{title}</h6>
          <p className="steps__text">{text}</p>
        </div>
      ))}
    </div>
  );
}

export default Stepscards;

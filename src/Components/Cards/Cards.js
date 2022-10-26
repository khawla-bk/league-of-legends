import React from "react";
import "./Cards.scss";

function CustomCards({ data = [] }) {
  return (
    <>
      {data.map(
        ({ _id, image, title, description, png, imageFirst = false }) => (
          <div className="CustomCard" key={_id}>
            {!imageFirst && image && (
              <img src={image} alt="" className="CustomCardImage" />
            )}
            <div className="CustomCardText">
              <div className="CustomCardPTitleContainer">
                <img className="CustomCardPng" src={png} alt="" />
                <h4 className="CustomCardTitle">{title}</h4>
              </div>
              <p>{description}</p>
            </div>
            {imageFirst && image && (
              <img src={image} alt="" className="CustomCardImage" />
            )}
          </div>
        )
      )}
    </>
  );
}

export default CustomCards;

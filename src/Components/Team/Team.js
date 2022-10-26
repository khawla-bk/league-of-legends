import React from "react";
import "./Team.scss";

function TeamCards({ data = [] }) {
  return (
    <>
      {data.map(({ _id, image, name, role }) => (
        <div className="teamContainer">
          <img src={image} alt="" />
          <p className="teamName">{name}</p>
          <p className="teamRole">{role}</p>
        </div>
      ))}
    </>
  );
}

export default TeamCards;

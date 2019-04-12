import React from "react";
import "./card.css";

//pass the image into each card so all 12 are rendered
const JellyBellyCard = props => (
  <div className="card" id={props.id} onClick={props.clickCount}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default JellyBellyCard;
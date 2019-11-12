import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.country}</h2>
      <p>Number of times searched: {props.searches}</p>
    </div>
  );
};

export default PlayerCard;

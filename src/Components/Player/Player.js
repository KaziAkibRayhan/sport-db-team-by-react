import React from "react";
import "./Player.css";
const Player = ({ player }) => {
  // strNationality, idPlayer,
  const { strPlayer, strCutout, strDescriptionEN } = player;

  return (
    <div className="card">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <p>
        {strDescriptionEN
          ? strDescriptionEN?.slice(0, 60)
          : "lorem is dummy text here, no data available this player"}
      </p>
    </div>
  );
};

export default Player;

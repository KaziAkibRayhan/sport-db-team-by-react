import React from "react";
import Player from "../Player/Player";
import "./Players.css";
const Players = ({ players, cart, setCart }) => {
  return (
    <div className="cart-container">
      {players.map((player) => (
        <Player
          player={player}
          key={player.idPlayer}
          cart={cart}
          setCart={setCart}
        ></Player>
      ))}
    </div>
  );
};

export default Players;

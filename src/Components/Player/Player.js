import React from "react";
import "./Player.css";
const Player = ({ player, cart, setCart }) => {
  // strNationality, idPlayer,
  const { strPlayer, strCutout, idPlayer, strDescriptionEN } = player;

  const handleAddToCart = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      strDescriptionEN,
      price: 200,
    };

    if (cart) {
      const newCart = [...cart, info];
      setCart(newCart);
    }
  };

  return (
    <div className="card" data-aos="zoom-in">
      <img className="player-img" src={strCutout} alt="" />
      <h4>{strPlayer}</h4>
      <p>
        {strDescriptionEN
          ? strDescriptionEN?.slice(0, 60)
          : "lorem is dummy text here, no data available this player"}
      </p>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add to Cart
      </button>
      <button className="card-btn">Bookmark</button>
    </div>
  );
};

export default Player;

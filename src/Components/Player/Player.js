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

  const handleBookMark = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      strDescriptionEN,
      quantity: 1,
      bookmark: true,
    };
    const prevBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(prevBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer);
      if (isExist) {
        const updatedPrice = parseFloat(isExist.quantity);
        const newUpdatedPrice = updatedPrice + 1;
        isExist.quantity = newUpdatedPrice;

        localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
        return;
      } else {
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...oldBookmark, info])
        );
      }
      localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
      console.log("nai");
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
      <button onClick={handleBookMark} className="card-btn">
        Bookmark
      </button>
    </div>
  );
};

export default Player;

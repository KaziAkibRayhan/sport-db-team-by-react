import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

  return (
    <div>
      <div className="home-container">
        <div className="left-side-container">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">Search Players</button>
          <div className="players-container">
            <Players players={players}></Players>
          </div>
        </div>
        <div className="right-side-container">
          <div className="cart">
            <p>this is player cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

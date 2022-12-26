import React, { useState } from "react";
import MainContext from "../context/MainContext";
import List from "./List";
import Buttons from "./MainButtons";
import "../style/style.css";

const initialValue = {
  advice: "Hello World!",
  isFavorite: false,
  id: Date.now(),
};

function Main() {
  const [current, setCurrent] = useState(initialValue);
  const [saved, setSaved] = useState([]);

  return (
    <div className="container">
      <MainContext.Provider value={{ setCurrent, current, saved, setSaved }}>
        <nav>
          <List saved={saved} setSaved={setSaved} />
        </nav>

        <div className="main">
          <p>{current.advice}</p>
          <Buttons />
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Main;

import React, { useEffect, useState } from "react";
import MainContext from "../context/MainContext";
import List from "./List";
import Buttons from "./MainButtons";
import "../style/style.css";
import Button from "./Button";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialValue = {
  advice: "Hello World!",
  isFavorite: false,
  id: Date.now(),
};

function Main() {
  const [current, setCurrent] = useState(initialValue);
  const [saved, setSaved] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <MainContext.Provider
        value={{
          setCurrent,
          current,
          saved,
          setSaved,
          setToggle,
          setIsLoading,
        }}
      >
        <div className="hamburgerMenu">
          {!toggle && <Button icon={faBars} event={() => setToggle(true)} />}
        </div>
        {toggle && (
          <nav className={toggle ? "navbar" : "hideNavbar"}>
            <Button icon={faXmark} event={() => setToggle(false)} />
            <List saved={saved} />
          </nav>
        )}

        <div className="main">
          {isLoading ? (
            <FontAwesomeIcon size="2x" icon={faSpinner} spin />
          ) : (
            <p className="advice">"{current.advice}"</p>
          )}
          {!isLoading && <Buttons />}
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Main;

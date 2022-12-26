import React from "react";
import Button from "./Button";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import MainContext from "../context/MainContext";

function Buttons() {
  const { current, setCurrent, saved, setSaved } = useContext(MainContext);

  async function getData() {
    const { slip } = await (
      await fetch("https://api.adviceslip.com/advice")
    ).json();
    setCurrent({
      advice: slip.advice,
      isFavorite: false,
      id: Date.now(),
    });
  }

  function redirect() {
    if (current) {
      window.open(
        `https://twitter.com/intent/tweet?text="${current.advice}"`,
        "_blank"
      );
    }
  }

  function favorite() {
    setCurrent({
      ...current,
      isFavorite: (current.isFavorite = !current.isFavorite),
    });

    if (saved.length > 0) {
      if (saved.some((item) => item.id === current.id)) {
        return;
      } else {
        setSaved([...saved, current]);
      }
    } else {
      setSaved([...saved, current]);
    }
  }

  return (
    <div className="buttons">
      <Button icon={faTwitter} event={redirect}></Button>
      <Button icon={faArrowRight} event={getData}></Button>
      <Button icon={faHeart} event={favorite}></Button>
    </div>
  );
}

export default Buttons;

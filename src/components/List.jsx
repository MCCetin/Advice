import React from "react";
import { useContext } from "react";
import MainContext from "../context/MainContext";
import Button from "./Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function List() {
  const { saved, setSaved } = useContext(MainContext);
  function deleteAdvice(id) {
    setSaved(
      saved.filter((item) => {
        return item.id !== id;
      })
    );
  }

  const list = saved
    .map((item, i) => (
      <li key={item + i} className="saved-li">
        {item.advice}
        <Button event={() => deleteAdvice(item.id)} icon={faTrash} />
      </li>
    ))
    .reverse();
  return <ul>{list}</ul>;
}

export default List;

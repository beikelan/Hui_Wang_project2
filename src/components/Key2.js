import React, { useContext } from "react";
import { AppContext } from "../Game2";

function Key2({ keyValue, big, disabled }) {
  const { gameOver, onSelect, onEnter, onDelete } = useContext(AppContext);
  const select = () => {
    if (gameOver.gameOver) return;
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelect(keyValue);
    }
  };
  return (
    <div
      className="key"
      id={big ? "big" : disabled && "disabled"}
      onClick={select}
    >
      {keyValue}
    </div>
  );
}

export default Key2;

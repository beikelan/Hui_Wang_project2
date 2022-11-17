import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../Game";
import Key from "./Key";

function Keyboard() {
  const { onSelect, onEnter, OnDelete, disabledLetters, currAtt, gameOver } =
    useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        OnDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
      }
    },
    [currAtt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key keyValue={key} disabled={disabledLetters.includes(key)} />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key keyValue={key} disabled={disabledLetters.includes(key)} />
          );
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} big />
        {keys3.map((key) => {
          return (
            <Key keyValue={key} disabled={disabledLetters.includes(key)} />
          );
        })}
        <Key keyValue={"DELETE"} big />
      </div>
    </div>
  );
}

export default Keyboard;

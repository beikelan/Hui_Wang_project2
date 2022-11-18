import React, { useContext, useEffect } from "react";
import { AppContext } from "../Game2";

function Letter2({ letterPos, value }) {
  const { board, correctWord, currAtt, disabledLetters, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[value][letterPos];
  let correct = false;
  if (
    correctWord.toUpperCase()[letterPos] !== undefined &&
    letter !== undefined &&
    correctWord.toUpperCase()[letterPos] === letter
  ) {
    correct = true;
  } else {
    correct = false;
  }
  // const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState = correct ? "correct" : almost ? "almost" : "error";
  if (correct) {
    console.log("2222");
    console.log(letter);
  }
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAtt.att]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter2;

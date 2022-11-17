import React, { useContext } from "react";
import { AppContext } from "../Game2";

function GameOver2() {
  const { gameOver, setGameOver, correctWord, currAtt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You correctly guessed!" : "You failed!"}</h3>
      <h1>Correct: {correctWord} </h1>
      {gameOver.guessedWord && <h3>You guessed in {currAtt.att} attempts</h3>}
    </div>
  );
}

export default GameOver2;

import React, { useContext, useState, useEffect, createContext } from "react";
import Board2 from "./components/Board2";
import GameOver2 from "./components/GameOver2";
import Keyboard2 from "./components/Keyboard2";
import { generateWords2 } from "./Words";
import { boardDefault2 } from "./Words";

export const AppContext = createContext();

function Game2() {
  const [board, setBoard] = useState(boardDefault2);
  const [currAtt, setCurrAtt] = useState({ att: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWords2().then((words) => {
      setWordSet(words.set);
      setCorrectWord(words.wordForToday);
    });
  }, []);

  const onEnter = () => {
    if (currAtt.letter !== 7) return;

    let currWord = "";
    for (let i = 0; i < 7; i++) {
      currWord += board[currAtt.att][i];
    }
    setCurrAtt({ att: currAtt.att + 1, letter: 0 });
    console.log("word for today is : " + correctWord);
    console.log(currWord);
    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAtt);
    if (currAtt.att === 6) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAtt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAtt.att][currAtt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAtt({ ...currAtt, letter: currAtt.letter - 1 });
  };

  const onSelect = (key) => {
    if (currAtt.letter > 6) return;
    const newBoard = [...board];
    newBoard[currAtt.att][currAtt.letter] = key;
    setBoard(newBoard);
    setCurrAtt({
      att: currAtt.att,
      letter: currAtt.letter + 1,
    });
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAtt,
          setCurrAtt,
          correctWord,
          onSelect,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
        }}
      >
        <div className="game">
          <Board2 />
          {gameOver.gameOver ? <GameOver2 /> : <Keyboard2 />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default Game2;

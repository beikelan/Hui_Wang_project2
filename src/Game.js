import React, { useContext, useState, useEffect, createContext } from "react";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import { generateWords } from "./Words";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function Game() {
  const [board, setBoard] = useState(boardDefault);
  const [currAtt, setCurrAtt] = useState({ att: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWords().then((words) => {
      setWordSet(words.set);
      setCorrectWord(words.wordForToday);
    });
  }, []);

  const onEnter = () => {
    if (currAtt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAtt.att][i];
    }
    // if (wordSet.has(currWord.toLowerCase())) {
    setCurrAtt({ att: currAtt.att + 1, letter: 0 });
    // }
    // } else {
    //   alert("Word not found");
    // }
    console.log("word for today is : " + correctWord);
    console.log(currWord);
    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAtt);
    if (currAtt.att === 5) {
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
    if (currAtt.letter > 4) return;
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
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default Game;

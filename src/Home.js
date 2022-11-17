import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWords } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Game from "./Game";
import Game2 from "./Game2";
import Rules from "./Rules";
import "./App.css";

function Home() {
  return (
    <div>
      <nav>
        <h1>WELCOME TO THE WORDLE!</h1>
      </nav>
      <div>
        <div>
          <title>
            <t1>
              <Link to="/game">GAME-EASY </Link>
            </t1>
            <t1>
              <Link to="/game2">GAME-MEDIUM </Link>
            </t1>
            <t1>
              <Link to="/rules">RULES </Link>
            </t1>
          </title>
        </div>

        <Routes>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/game2" element={<Game2 />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Home;

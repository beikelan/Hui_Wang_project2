import React from "react";
import Letter2 from "./Letter2";

function Board2() {
  return (
    <div className="board">
      <div className="row">
        <Letter2 Letter2Pos={0} value={0} />
        <Letter2 Letter2Pos={1} value={0} />
        <Letter2 Letter2Pos={2} value={0} />
        <Letter2 Letter2Pos={3} value={0} />
        <Letter2 Letter2Pos={4} value={0} />
        <Letter2 Letter2Pos={5} value={0} />
        <Letter2 Letter2Pos={6} value={0} />
      </div>
      <div className="row">
        <Letter2 Letter2Pos={0} value={1} />
        <Letter2 Letter2Pos={1} value={1} />
        <Letter2 Letter2Pos={2} value={1} />
        <Letter2 Letter2Pos={3} value={1} />
        <Letter2 Letter2Pos={4} value={1} />
        <Letter2 Letter2Pos={5} value={1} />
        <Letter2 Letter2Pos={6} value={1} />
      </div>

      <div className="row">
        <Letter2 Letter2Pos={0} value={2} />
        <Letter2 Letter2Pos={1} value={2} />
        <Letter2 Letter2Pos={2} value={2} />
        <Letter2 Letter2Pos={3} value={2} />
        <Letter2 Letter2Pos={4} value={2} />
        <Letter2 Letter2Pos={5} value={2} />
        <Letter2 Letter2Pos={6} value={2} />
      </div>
      <div className="row">
        <Letter2 Letter2Pos={0} value={3} />
        <Letter2 Letter2Pos={1} value={3} />
        <Letter2 Letter2Pos={2} value={3} />
        <Letter2 Letter2Pos={3} value={3} />
        <Letter2 Letter2Pos={4} value={3} />
        <Letter2 Letter2Pos={5} value={3} />
        <Letter2 Letter2Pos={6} value={3} />
      </div>
      <div className="row">
        <Letter2 Letter2Pos={0} value={4} />
        <Letter2 Letter2Pos={1} value={4} />
        <Letter2 Letter2Pos={2} value={4} />
        <Letter2 Letter2Pos={3} value={4} />
        <Letter2 Letter2Pos={4} value={4} />
        <Letter2 Letter2Pos={5} value={4} />
        <Letter2 Letter2Pos={6} value={4} />
      </div>
    </div>
  );
}

export default Board2;

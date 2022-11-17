import React from "react";
import Letter from "./Letter";

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Letter letterPos={0} value={0} />
        <Letter letterPos={1} value={0} />
        <Letter letterPos={2} value={0} />
        <Letter letterPos={3} value={0} />
        <Letter letterPos={4} value={0} />
        <Letter letterPos={5} value={0} />
      </div>
      <div className="row">
        <Letter letterPos={0} value={1} />
        <Letter letterPos={1} value={1} />
        <Letter letterPos={2} value={1} />
        <Letter letterPos={3} value={1} />
        <Letter letterPos={4} value={1} />
        <Letter letterPos={5} value={1} />
      </div>

      <div className="row">
        <Letter letterPos={0} value={2} />
        <Letter letterPos={1} value={2} />
        <Letter letterPos={2} value={2} />
        <Letter letterPos={3} value={2} />
        <Letter letterPos={4} value={2} />
        <Letter letterPos={5} value={2} />
      </div>
      <div className="row">
        <Letter letterPos={0} value={3} />
        <Letter letterPos={1} value={3} />
        <Letter letterPos={2} value={3} />
        <Letter letterPos={3} value={3} />
        <Letter letterPos={4} value={3} />
        <Letter letterPos={5} value={3} />
      </div>
      <div className="row">
        <Letter letterPos={0} value={4} />
        <Letter letterPos={1} value={4} />
        <Letter letterPos={2} value={4} />
        <Letter letterPos={3} value={4} />
        <Letter letterPos={4} value={4} />
        <Letter letterPos={5} value={4} />
      </div>
      <div className="row">
        <Letter letterPos={0} value={5} />
        <Letter letterPos={1} value={5} />
        <Letter letterPos={2} value={5} />
        <Letter letterPos={3} value={5} />
        <Letter letterPos={4} value={5} />
        <Letter letterPos={5} value={5} />
      </div>
    </div>
  );
}

export default Board;

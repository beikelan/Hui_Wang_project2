import React from "react";
import Letter2 from "./Letter2";

function Board2() {
  return (
    <div className="board">
      <div className="row">
        <Letter2 letterPos={0} value={0} />
        <Letter2 letterPos={1} value={0} />
        <Letter2 letterPos={2} value={0} />
        <Letter2 letterPos={3} value={0} />
        <Letter2 letterPos={4} value={0} />
        <Letter2 letterPos={5} value={0} />
        <Letter2 letterPos={6} value={0} />
      </div>
      <div className="row">
        <Letter2 letterPos={0} value={1} />
        <Letter2 letterPos={1} value={1} />
        <Letter2 letterPos={2} value={1} />
        <Letter2 letterPos={3} value={1} />
        <Letter2 letterPos={4} value={1} />
        <Letter2 letterPos={5} value={1} />
        <Letter2 letterPos={6} value={1} />
      </div>

      <div className="row">
        <Letter2 letterPos={0} value={2} />
        <Letter2 letterPos={1} value={2} />
        <Letter2 letterPos={2} value={2} />
        <Letter2 letterPos={3} value={2} />
        <Letter2 letterPos={4} value={2} />
        <Letter2 letterPos={5} value={2} />
        <Letter2 letterPos={6} value={2} />
      </div>
      <div className="row">
        <Letter2 letterPos={0} value={3} />
        <Letter2 letterPos={1} value={3} />
        <Letter2 letterPos={2} value={3} />
        <Letter2 letterPos={3} value={3} />
        <Letter2 letterPos={4} value={3} />
        <Letter2 letterPos={5} value={3} />
        <Letter2 letterPos={6} value={3} />
      </div>
      <div className="row">
        <Letter2 letterPos={0} value={4} />
        <Letter2 letterPos={1} value={4} />
        <Letter2 letterPos={2} value={4} />
        <Letter2 letterPos={3} value={4} />
        <Letter2 letterPos={4} value={4} />
        <Letter2 letterPos={5} value={4} />
        <Letter2 letterPos={6} value={4} />
      </div>
    </div>
  );
}

export default Board2;

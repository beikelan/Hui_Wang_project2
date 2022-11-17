import React from "react";

function Rules() {
  return (
    <div className="game">
      <div className="rule">
        <div>1. You have to guess the Wordle in six goes or less</div>
        <div>2. A correct letter turns green </div>
        <div>3. A correct letter in the wrong place turns yellow</div>
        <div>4. An incorrect letter turns gray</div>
        <div>5. Letters can be used more than once</div>
        <div>6. Answers are never plurals</div>
      </div>
    </div>
  );
}

export default Rules;

import React from "react";

export default function GameOverModal({ isGameWon, resetGame }) {
  return (
    <div className="overlay">
      <div className="game-over-modal">
        <h2>{isGameWon ? "You Win! 🥳" : "Game Over! 😫"}</h2>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
}

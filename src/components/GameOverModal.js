import React from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function GameOverModal({ isGameWon, resetGame }) {
  const ref = useClickOutside(resetGame);

  return (
    <div className="overlay">
      <div className="game-over-modal" ref={ref}>
        <h2>{isGameWon ? "You Win! 🥳" : "Game Over! 😫"}</h2>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
}

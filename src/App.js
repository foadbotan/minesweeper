import { useCallback, useEffect, useState } from "react";
import Tile from "./components/Tile";
import createNewBoard from "./utils/createNewBoard";
import GameOverModal from "./components/GameOverModal";
import LevelSelector, { DIFFICULTY_LEVELS } from "./components/LevelSelector";

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState(DIFFICULTY_LEVELS.EXPERT.level);
  const [board, setBoard] = useState(createNewBoard(DIFFICULTY_LEVELS[selectedLevel]));
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  function resetGame() {
    setBoard(createNewBoard(DIFFICULTY_LEVELS[selectedLevel]));
    setIsGameOver(false);
    setIsGameWon(false);
  }

  const updateTile = useCallback(({ y, x }, callback) => {
    if (board[y][x].isOpen) return;
    setBoard((prevBoard) =>
      prevBoard.map((row) =>
        row.map((tile) => {
          if (tile.x === x && tile.y === y) return callback(tile);
          return tile;
        })
      )
    );
  }, []);

  useEffect(() => {
    resetGame();
  }, [selectedLevel]);

  useEffect(() => {
    const hasLost = board.some((row) => row.some((tile) => tile.hasMine && tile.isOpen));
    const hasWon = board.every((row) =>
      row.every((tile) => {
        const isFlaggedMine = tile.hasMine && tile.isFlagged;
        const isOpenTile = !tile.hasMine && tile.isOpen;
        return isFlaggedMine || isOpenTile;
      })
    );

    if (hasLost) setIsGameOver(true);
    if (hasWon) {
      setIsGameWon(true);
      setIsGameOver(true);
    }
  }, [board]);

  return (
    <main>
      <h1>Minesweeper</h1>
      <LevelSelector selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
      {isGameOver && <GameOverModal isGameWon={isGameWon} resetGame={resetGame} />}
      <div className="board">
        {board.map((row, index) => (
          <div className="row" key={index}>
            {row.map((tile) => (
              <Tile key={tile.id} tile={tile} updateTile={updateTile} isGameOver={isGameOver} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

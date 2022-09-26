import { useCallback, useEffect, useState } from "react";
import Tile from "./components/Tile";
import createNewBoard from "./utils/createNewBoard";

const BOARD_TYPE = {
  BEGINNER: { boardWidth: 8, boardHeight: 8, numberOfMines: 10 },
  INTERMEDIATE: { boardWidth: 16, boardHeight: 16, numberOfMines: 40 },
  EXPERT: { boardWidth: 30, boardHeight: 16, numberOfMines: 99 },
};

export default function App() {
  const [boardType, setBoardType] = useState(BOARD_TYPE.EXPERT);
  const [board, setBoard] = useState(createNewBoard(boardType));
  const [isGameOver, setIsGameOver] = useState(false);

  function resetGame() {
    setBoard(createNewBoard(boardType));
    setIsGameOver(false);
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
  }, [boardType]);

  return (
    <main style={{ "--width": boardType.boardWidth }}>
      <h1>Minesweeper</h1>
      <div className="board-type">
        <button onClick={() => setBoardType(BOARD_TYPE.BEGINNER)}>Beginner</button>
        <button onClick={() => setBoardType(BOARD_TYPE.INTERMEDIATE)}>Intermediate</button>
        <button onClick={() => setBoardType(BOARD_TYPE.EXPERT)}>Expert</button>
      </div>
      {isGameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      <div className="board">
        {board.map((row, index) => (
          <div className="row" key={index}>
            {row.map((tile) => (
              <Tile
                key={tile.id}
                tile={tile}
                updateTile={updateTile}
                setIsGameOver={setIsGameOver}
                isGameOver={isGameOver}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

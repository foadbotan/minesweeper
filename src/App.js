import { useState } from "react";
import Board from "./components/Board";
import createNewBoard from "./utils/createNewBoard";

const BOARD_TYPE = {
  BEGINNER: { boardWidth: 8, boardHeight: 8, mineCount: 10 },
  INTERMEDIATE: { boardWidth: 16, boardHeight: 16, mineCount: 40 },
  EXPERT: { boardWidth: 30, boardHeight: 16, mineCount: 99 },
};

export default function App() {
  const [boardType, setBoardType] = useState(BOARD_TYPE.EXPERT);
  const [board, setBoard] = useState(createNewBoard(boardType));

  function updateTile(index, callback) {
    setBoard((prevBoard) => {
      return prevBoard.map((tile) => {
        if (tile.index !== index) return tile;
        return callback(tile);
      });
    });
  }

  return (
    <main style={{ "--width": boardType.boardWidth }}>
      <h1>Minesweeper</h1>
      <Board board={board} updateTile={updateTile} />
    </main>
  );
}

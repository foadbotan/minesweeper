import { useState } from "react";
import Tile from "./Tile";

const BOARD_SIZE = 5;
const MINE_COUNT = 5;

export default function Board() {
  const [board, setBoard] = useState(newBoard());

  console.log(board);
  return <div className="board">{board.map(Tile)}</div>;
}

function newBoard() {
  let board = [];

  for (let x = 0; x < BOARD_SIZE; x++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      board.push({
        y,
        x,
        value: 3,
      });
    }
  }

  return board;
}

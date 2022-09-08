export default function createNewBoard(boardSize = 5) {
  let board = [];

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      board.push({
        y,
        x,
        id: `${y} - ${x}`,
        show: false,
        flag: false,
        nearbyMines: "2",
      });
    }
  }

  return board;
}

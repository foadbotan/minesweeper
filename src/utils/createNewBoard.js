export default function createNewBoard(boardSize = 5) {
  let board = [];

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      board.push({
        y,
        x,
        id: `${y} - ${x}`,
        isShown: false,
        isFlagged: false,
      });
    }
  }

  return board;
}

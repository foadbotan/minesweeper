export default function createNewBoard(boardSize = 5) {
  let board = [];
  let mines = createMines();
  console.log(mines);

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      board.push({
        y,
        x,
        id: `${y} - ${x}`,
        isOpen: false,
        isFlagged: false,
        hasMine: false,
        nearbyMinesCount: 2,
      });
    }
  }

  return board;
}

function createMines(mineCount = 5) {
  let mines = [];

  while (mines.length < mineCount) {
    let mine = randomTileId();
    if (!mines.includes(mine)) {
      mines.push(mine);
    }
  }

  return mines;
}

function randomTileId() {
  const x = Math.floor(Math.random() * 5);
  const y = Math.floor(Math.random() * 5);
  const tileId = `${y} - ${x}`;
  return tileId;
}

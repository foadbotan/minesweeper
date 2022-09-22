export default function createNewBoard(boardSize = 5) {
  let board = [];
  let mines = createMines();

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      const id = `${y} - ${x}`;
      board.push({
        y,
        x,
        id,
        isOpen: false,
        isFlagged: false,
        hasMine: mines.includes(id),
        nearbyMinesCount: mines.filter((mine) => isNearby(mine, { y, x })).length,
      });
    }
  }

  return board;
}

function createMines(mineCount = 5, boardSize = 5) {
  let mines = [];

  while (mines.length < mineCount) {
    const y = Math.floor(Math.random() * boardSize);
    const x = Math.floor(Math.random() * boardSize);
    const id = `${y} - ${x}`;
    if (!mines.includes(id)) {
      mines.push(id);
    }
  }

  return mines;
}

function getNearbyTiles(board, id) {
  return board.filter(isNearby.bind(null, id));
}

function isNearby(id, tile) {
  const { y, x } = tileIdToCoordinates(id);
  return Math.abs(y - tile.y) <= 1 && Math.abs(x - tile.x) <= 1;
}

function tileIdToCoordinates(id) {
  const [y, x] = id.split(" - ").map(Number);
  return { y, x };
}

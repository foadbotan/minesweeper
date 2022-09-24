export default function createNewBoard({ boardWidth, boardHeight, mineCount }) {
  const boardSize = boardWidth * boardHeight;
  let board = Array(boardSize).fill(null);
  let mines = createMines(boardSize, mineCount);

  return board.map((_, index) => {
    const nearbyTiles = getNearbyTiles(index, boardWidth, boardSize);
    return {
      index,
      isOpen: false,
      isFlagged: false,
      hasMine: mines.includes(index),
      nearbyTiles,
      nearbyMinesCount: CountMines(mines, nearbyTiles),
    };
  });
}

function createMines(boardSize, mineCount) {
  let mines = [];

  while (mines.length < mineCount) {
    const mine = Math.floor(Math.random() * boardSize);
    if (!mines.includes(mine)) mines.push(mine);
  }

  return mines;
}

function getNearbyTiles(index, boardWidth, boardSize) {
  const nearbyTiles = [];

  for (let y = index - boardWidth; y <= index + boardWidth; y += boardWidth) {
    for (let x = y - 1; x <= y + 1; x++) {
      if (x >= 0 && x < boardSize && x !== index) {
        nearbyTiles.push(x);
      }
    }
  }

  return nearbyTiles;
}

function CountMines(mines, nearbyTiles) {
  return nearbyTiles.reduce((count, tile) => {
    if (mines.includes(tile)) count++;
    return count;
  }, 0);
}

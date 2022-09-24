export default function createNewBoard(boardWidth = 5) {
  let board = Array(boardWidth ** 2).fill(null);
  let mines = createMines();

  return board.map((_, index) => {
    const nearbyTiles = getNearbyTiles(index, boardWidth);
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

function createMines(mineCount = 5, boardWidth = 5) {
  let mines = [];

  while (mines.length < mineCount) {
    const mine = Math.floor(Math.random() * boardWidth ** 2);
    if (!mines.includes(mine)) mines.push(mine);
  }

  return mines;
}

function getNearbyTiles(index, boardWidth) {
  const nearbyTiles = [];
  const maxIndex = boardWidth ** 2;

  for (let y = index - boardWidth; y <= index + boardWidth; y += boardWidth) {
    for (let x = y - 1; x <= y + 1; x++) {
      if (x >= 0 && x < maxIndex && x !== index) {
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

export default function createBoard({ boardWidth, boardHeight, mineCount }) {
  const board = [];
  const mines = createMines(boardWidth, boardHeight, mineCount);

  for (let y = 0; y < boardHeight; y++) {
    const row = [];
    for (let x = 0; x < boardWidth; x++) {
      const tile = { y, x };
      const nearbyTiles = getNearbyTiles(tile, boardWidth, boardHeight);
      row.push({
        y,
        x,
        id: JSON.stringify(tile),
        isOpen: false,
        isFlagged: false,
        hasMine: hasTile(mines, tile),
        nearbyTiles,
        nearbyMinesCount: countMines(nearbyTiles, mines),
      });
    }
    board.push(row);
  }

  return board;
}

function createMines(boardWidth, boardHeight, mineCount) {
  const mines = [];

  while (mines.length < mineCount) {
    const mine = {
      y: Math.floor(Math.random() * boardHeight),
      x: Math.floor(Math.random() * boardWidth),
    };
    if (!hasTile(mines, mine)) mines.push(mine);
  }

  return mines;
}

function hasTile(tiles, { y, x }) {
  return tiles.some((tile) => tile.x === x && tile.y === y);
}

function getNearbyTiles(tile, boardWidth, boardHeight) {
  const nearbyTiles = [];

  for (let y = tile.y - 1; y <= tile.y + 1; y++) {
    for (let x = tile.x - 1; x <= tile.x + 1; x++) {
      const notTooSmall = y >= 0 && x >= 0;
      const notTooBig = y < boardHeight && x < boardWidth;
      const notSelf = y !== tile.y || x !== tile.x;
      if (notTooBig && notTooSmall && notSelf) {
        nearbyTiles.push({ y, x });
      }
    }
  }

  return nearbyTiles;
}

function countMines(tiles, mines) {
  return tiles.filter((tile) => hasTile(mines, tile)).length;
}

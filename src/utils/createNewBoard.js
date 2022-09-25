export default function createBoard({ boardWidth, boardHeight, mineCount }) {
  const board = [];
  const mines = createMines(boardWidth, boardHeight, mineCount);

  for (let y = 0; y < boardHeight; y++) {
    const row = [];
    for (let x = 0; x < boardWidth; x++) {
      const tile = { y, x };
      row.push({
        y,
        x,
        id: JSON.stringify(tile),
        isOpen: false,
        isFlagged: false,
        hasMine: hasTile(mines, tile),
        nearbyTiles: [],
        nearbyMinesCount: 0,
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

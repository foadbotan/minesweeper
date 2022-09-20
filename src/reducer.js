export const ACTIONS = {
  SHOW: "show",
  FLAG: "flag",
};

export default function reducer(board, action) {
  const tileId = action.payload;

  switch (action.type) {
    case ACTIONS.SHOW:
      return board.map((tile) => {
        if (tile.id !== tileId || tile.flag) return tile;
        return { ...tile, show: true };
      });
    case ACTIONS.FLAG:
      return board.map((tile) => {
        if (tile.id !== tileId || tile.show) return tile;
        return { ...tile, flag: !tile.flag };
      });
  }

  return state;
}

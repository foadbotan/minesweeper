import { memo, useEffect } from "react";

function Tile({ tile, updateTile, setIsGameOver, isGameOver }) {
  let value = tile.isFlagged ? "🚩" : "";
  if (tile.isOpen) {
    value = tile.hasMine ? "💣" : tile.nearbyMinesCount || "";
  }
  if (isGameOver) value = tile.hasMine ? "💣" : value;

  useEffect(() => {
    if (tile.nearbyMinesCount === 0 && tile.isOpen && !tile.hasMine) {
      tile.nearbyTiles.forEach(openTile);
    }
  }, [tile.isOpen]);

  useEffect(() => {
    if (tile.hasMine && tile.isOpen) {
      setIsGameOver(true);
    }
  }, [tile]);

  function handleLeftClick(e) {
    const singleClick = 1;
    const doubleClick = 2;
    switch (e.detail) {
      case doubleClick:
        tile.nearbyTiles.forEach((t) => {
          openTile(t);
        });
        break;
      case singleClick:
        if (tile.isFlagged) return;
        openTile(tile);
        break;
    }
  }

  function handleRightClick(e) {
    e.preventDefault();
    toggleFlagged(tile);
  }

  function openTile(tile) {
    if (isGameOver) return;
    updateTile(tile, (tile) => {
      if (tile.isFlagged) return tile;
      return { ...tile, isOpen: true };
    });
  }

  function toggleFlagged(tile) {
    updateTile(tile, (tile) => ({ ...tile, isFlagged: !tile.isFlagged }));
  }

  return (
    <div
      className="tile"
      style={{
        cursor: tile.isOpen || tile.isFlagged ? "" : "pointer",
        backgroundColor:
          isGameOver && tile.hasMine ? "hsl(0, 100%, 50%)" : tile.isOpen && "hsl(210, 10%, 80%)",
      }}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {value}
    </div>
  );
}

export default memo(Tile);

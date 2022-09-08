import { memo } from "react";
import { ACTIONS } from "../utils/reducer";

function Tile({ dispatch, tile }) {
  function handleRightClick(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.FLAG, payload: tile.id });
  }

  function handleLeftClick() {
    dispatch({ type: ACTIONS.SHOW, payload: tile.id });
  }

  return <div className="tile" onClick={handleLeftClick} onContextMenu={handleRightClick}></div>;
}

export default memo(Tile);

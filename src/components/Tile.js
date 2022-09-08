import { ACTIONS } from "../utils/reducer";

export default function Tile({ dispatch, tile }) {
  function handleRightClick(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.FLAG, payload: tile.id });
  }

  function handleLeftClick() {
    dispatch({ type: ACTIONS.SHOW, payload: tile.id });
  }

  return <div className="tile" onClick={handleLeftClick} onContextMenu={handleRightClick}></div>;
}

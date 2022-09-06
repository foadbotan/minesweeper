export const ACTIONS = {
  SHOW: "show",
  FLAG: "flag",
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SHOW:
      console.log("show", action.payload);
      break;
    case ACTIONS.FLAG:
      console.log("flag", action.payload);
      break;
  }

  return state;
}

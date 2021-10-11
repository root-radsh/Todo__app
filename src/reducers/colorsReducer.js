import { SET__COLOR } from "../actions/colorAction";
const initial = [];

export const colorReducer = (state = initial, action) => {
  switch (action.type) {
    case SET__COLOR:
      return [...action.payload];
    default:
      return state;
  }
};

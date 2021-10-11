import {
  CHANGE_LIST_NAME,
  GET__TODOLISTS,
  DELETE__LIST,
  ADD__TODOLIST,
} from "../actions/todoListsActions";

export const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case GET__TODOLISTS:
      return [...action.payload];
    case DELETE__LIST:
      return [...state].filter((list) => list.id !== action.payload);
    case CHANGE_LIST_NAME:
      return [...state].map((list) => {
        if (list.id === action.payload.listId) {
          list.name = action.payload.name;
        }
        return list;
      });
    case ADD__TODOLIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

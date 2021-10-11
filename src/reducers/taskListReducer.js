import {
  GET__TASKS,
  COMPLETE__TASK,
  ADD__TASK,
  DELETE__TASK,
} from "../actions/taskListActions";

export const taskListReducer = (state = [], action) => {
  switch (action.type) {
    case GET__TASKS:
      return [...action.payload];
    case ADD__TASK:
      return [...state, action.payload];
    case COMPLETE__TASK:
      return [...state].map((task) => {
        if (task.id === action.payload.id) {
          task.completed = action.payload.checked;
        }
        return task;
      });
    case DELETE__TASK:
      return [
        ...state.filter((task) => {
          return task.id !== action.payload;
        }),
      ];
    default:
      return state;
  }
};

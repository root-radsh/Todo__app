import { combineReducers } from "redux";

import { taskListReducer } from "./taskListReducer";
import { todoListReducer } from "./todoListRerducer";
import { colorReducer } from "./colorsReducer";

export const rootReducer = combineReducers({
  taskList: taskListReducer,
  todoList: todoListReducer,
  colors: colorReducer
});

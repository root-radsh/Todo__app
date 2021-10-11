import axios from "axios";

export const getTodoLists = () => {
  return axios.get("http://localhost:3001/lists");
};
export const createTodoList = (todoList) => {
  return axios.post("http://localhost:3001/lists", todoList);
};
export const deleteList = (id) => {
  axios.delete(`http://localhost:3001/lists/${id}`);
};
export const updateList = (id, name) => {
  return axios.patch(`http://localhost:3001/lists/${id}`, { name });
};

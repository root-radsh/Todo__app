import axios from "axios";

export const getTasks = () => {
  return axios.get("http://127.0.0.1:3001/tasks");
};

export const setCompleted = (id, checked) => {
  return axios.patch(`http://localhost:3001/tasks/${id}`, {
    completed: checked,
  });
};

export const createTask = (text, listId) => {
  const newTask = {
    text,
    listId,
    completed: false,
  };
  return axios.post("http://localhost:3001/tasks", newTask);
};

export const deleteTask = (id) => {
  return axios.delete(`http://localhost:3001/tasks/${id}`);
};

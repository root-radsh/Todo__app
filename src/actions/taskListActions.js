import {
  createTask,
  deleteTask,
  getTasks,
  setCompleted,
} from "../services/taskService";

export const GET__TASKS = "GET__TASKS";
export const COMPLETE__TASK = "COMPLETE__TASK";
export const ADD__TASK = "ADD__TASK";
export const DELETE__TASK = "DELETE__TASK";

const completeTask = (payload) => {
  return {
    type: COMPLETE__TASK,
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: ADD__TASK,
    payload,
  };
};
const removeTask = (payload) => {
  return {
    type: DELETE__TASK,
    payload,
  };
};
const loadTask = (payload) => {
  return {
    type: GET__TASKS,
    payload,
  };
};

export const onLoadTask = () => {
  return async (dispatch) => {
    try {
      const tasks = await getTasks();
      dispatch(loadTask(tasks.data));
    } catch (error) {
      alert("Load tasks error");
      console.log(error);
    }
  };
};

export const onCompleteTask = (id, checked) => {
  return async (dispatch) => {
    try {
      await setCompleted(id, checked);
      dispatch(completeTask({ id, checked }));
    } catch (error) {
      alert("Complete task error");
      console.log(error);
    }
  };
};
export const onAddTask = (text, listId) => {
  return async (dispatch) => {
    try {
      const newTask = await createTask(text, listId);
      dispatch(addTask(newTask.data));
    } catch (error) {
      alert("Create task error");
      console.log(error);
    }
  };
};
export const onDeleteTask = (id) => {
  return async (dispatch) => {
    try {
      await deleteTask(id);
      dispatch(removeTask(id));
    } catch (error) {
      alert("Remove task error");
      console.log(error);
    }
  };
};

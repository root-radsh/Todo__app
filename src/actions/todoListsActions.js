import {
  createTodoList,
  deleteList,
  getTodoLists,
  updateList,
} from "../services/listService";

export const CHANGE_LIST_NAME = "CHANGE_LIST_NAME";
export const GET__TODOLISTS = "GET__TODOLISTS";
export const DELETE__LIST = "DELETE__LIST";
export const ADD__TODOLIST = "ADD__TODOLIST";

export const onChangeListName = (payload) => {
  return {
    type: CHANGE_LIST_NAME,
    payload,
  };
};

export const getLists = (payload) => {
  return {
    type: GET__TODOLISTS,
    payload,
  };
};

const deleteTodoList = (listId) => {
  return {
    type: DELETE__LIST,
    payload: listId,
  };
};

const addList = (newList) => {
  return {
    type: ADD__TODOLIST,
    payload: newList,
  };
};

export const onLoadLists = () => {
  return async (dispatch) => {
    try {
      const { data: todoLists } = await getTodoLists();
      dispatch(getLists(todoLists));
    } catch (error) {
      alert("Load todo lists error.");
      console.log(error);
    }
  };
};

export const onDeleteTodoList = (listId) => {
  return async (dispatch) => {
    try {
      await deleteList(listId);
      dispatch(deleteTodoList(listId));
    } catch (error) {
      alert("Remove todo list error.");
      console.log(error);
    }
  };
};
export const onUpdateList = (listId, name) => {
  return async (dispatch) => {
    try {
      await updateList(listId, name);
      dispatch(onChangeListName({ listId, name }));
    } catch (error) {
      alert("Update title todo list error.");
      console.log(error);
    }
  };
};
export const onAddList = (newList) => {
  return async (dispatch) => {
    try {
      const createdList = await createTodoList(newList);
      dispatch(addList(createdList.data));
    } catch (error) {
      alert("Create todo list error.");
      console.log(error);
    }
  };
};

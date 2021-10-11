import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddTask } from "../../actions/taskListActions";
import { onUpdateList } from "../../actions/todoListsActions";

import { TaskItem } from "./TaskItem";
import { TaskLoader } from "../Loader/taskListLoader";
import {
  TaskListContainer,
  TaskListHeader,
  TaskListBody,
  TaskItems,
  AddTaskWrapper,
  AddTaskContainer,
  AddTaskPopup,
  Field,
  ButtonGroup,
  AddButton,
  CancelButton,
} from "./TaskListStyle";

export const TaskList = ({ todoList }) => {
  const [toglePopup, setToglePopup] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [isRead, setIsRead] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.taskList);

  const filterTask = tasks.filter((task) => task.listId === todoList.id);

  const createTask = (text, listId) => {
    if (!taskName) {
      alert("Введите текст задачи!");
      return;
    }
    dispatch(onAddTask(text, listId));
    setTaskName("");
    setToglePopup(false);
  };

  const onChangeText = (text) => {
    if (!text) {
      alert("Название списка не может быть пустым!");
      return;
    }
    const isConfirm = window.confirm(`Изменить название списка на "${text}"`);
    if (isConfirm) {
      dispatch(onUpdateList(todoList.id, text));
      setEditedTitle("");
    }
  };
  return (
    <TaskListContainer>
      <TaskListHeader isRead={isRead} color={todoList.color.hex}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onChangeText(editedTitle);
          }}
        >
          <input
            value={editedTitle}
            readOnly={readOnly}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={() => {
              setIsRead(false);
              setReadOnly(true);
              setEditedTitle("");
            }}
            placeholder={todoList.name}
          />
        </form>
        <svg
          onClick={() => {
            setIsRead(true);
            setReadOnly(false);
          }}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z"
            fill="#000000"
          />
        </svg>
      </TaskListHeader>
      <TaskListBody>
        <TaskItems>
          {filterTask.length > 0 ? (
            filterTask.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  text={task.text}
                  completed={task.completed}
                  id={task.id}
                />
              );
            })
          ) : (
            <TaskLoader />
          )}
        </TaskItems>
      </TaskListBody>
      <AddTaskWrapper>
        <AddTaskContainer>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 8H15"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span onClick={() => setToglePopup((prev) => !prev)}>
            Добавить задачу
          </span>
        </AddTaskContainer>
        {toglePopup ? (
          <AddTaskPopup>
            <Field
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              type="text"
              placeholder="Текст задачи"
            />
            <ButtonGroup>
              <AddButton onClick={() => createTask(taskName, todoList.id)}>
                Добавить задачу
              </AddButton>
              <CancelButton onClick={() => setToglePopup((prev) => !prev)}>
                Отмена
              </CancelButton>
            </ButtonGroup>
          </AddTaskPopup>
        ) : null}
      </AddTaskWrapper>
    </TaskListContainer>
  );
};

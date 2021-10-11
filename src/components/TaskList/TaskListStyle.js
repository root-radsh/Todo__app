import styled from "styled-components";
import { lighten, darken } from "polished";
import { Button, Input } from "../../Styles";

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
`;

export const TaskListHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 30px;

  form {
    width: 350px;
    input {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 39px;
      border-radius: 5px;
      border: ${(props) => (props.isRead ? "2px solid #c1c1c1" : "none")};
      outline: none;
      width: 100%;

      &::placeholder {
        color: ${(props) => (props ? props.color : "#000")};
      }
    }
  }

  svg {
    visibility: hidden;
    opacity: 0.2;
    margin-top: 11px;
    margin-left: 14px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  &:hover {
    svg {
      visibility: visible;
    }
  }
`;
export const TaskListBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TaskItems = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const TaskItemContainer = styled.li`
  display: flex;
  align-items: center;
  flex: 1;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
export const CompleteTask = styled.div`
  display: inline-flex;
  margin-right: 15px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: #e8e8e8;
    border-radius: 20px;
    cursor: pointer;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #4dd599;

    path {
      stroke: #fff;
    }
  }
  &:hover {
    label {
      background-color: #f2f2f2;
      border-color: #f2f2f2;
      svg {
        opacity: 1;
        path {
          stroke: #b2b2b2;
        }
      }
    }
  }
`;
export const TaskItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  &:hover {
    cursor: pointer;
    svg {
      visibility: visible;
    }
  }
`;

export const RemoveTask = styled.svg`
  visibility: hidden;
  margin-top: 3px;
  opacity: 0.4;

  &:hover {
    opacity: 0.7;
  }
`;
export const AddTaskWrapper = styled.div`
  position: relative;
`;
export const AddTaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  opacity: 0.4;

  svg {
    margin-right: 16px;
    margin-left: 5px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const AddTaskPopup = styled.div`
  visibility: visible;
  position: absolute;
  top: 11px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.15px;
  transition: visibility 0.4s ease-in-out;
`;
export const Field = styled(Input)`
  width: 100%;
  height: 40px;
`;
export const ButtonGroup = styled.div`
  margin-top: 10px;
  button {
    transition: color 0.2s ease-in-out;
  }
`;
export const AddButton = styled(Button)`
  width: 145px;
  height: 36px;
  margin-right: 10px;
`;
export const CancelButton = styled(Button)`
  width: 90px;
  height: 36px;
  background: #efefef;
  color: #a7a7a7;

  &:hover {
    background: ${darken(0.3, "#efefef")};
    color: ${darken(0.4, "#a7a7a7")};
  }
  &:active {
    color: ${lighten(0.2, "#a7a7a7")};
  }
`;

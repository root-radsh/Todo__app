import styled from "styled-components";

export const TodoLists = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TodoListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  height: 40px;

  img {
    position: absolute;
    left: 11px;
    top: 12px;
    width: 16px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;

    svg {
      visibility: visible;
    }
  }

  svg {
    position: absolute;
    top: 15px;
    right: 7px;
    visibility: hidden;

    &:hover {
      cursor: pointer;

      path {
        fill: #707070;
      }
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  left: 15px;
  top: 15px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 30px;
  background-color: ${(props) => (props ? props.color : "#42B883")};
`;

export const Title = styled.h2`
  margin-left: 25px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

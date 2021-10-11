import styled from "styled-components";

import { Button } from "../../Styles";

export const AddListWrapper = styled.div`
  position: relative;
`;
export const AddLists = styled.ul`
  display: flex;
  margin-top: 50px;
  width: 100%;
  overflow: hidden;
  opacity: 0.5;
  padding: 10px;
`;
export const AddListItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    margin-left: 4px;
    margin-right: 6px;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const AddListPopup = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  left: 15px;
  top: 35px;
  width: 240px;
  height: 150px;
  padding: 18px;
  background-color: #fff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -6px;
    right: -5px;
    opacity: 0.6;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const Colors = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;
export const Color = styled.li`
  width: 18px;
  height: 18px;
  border-radius: 30px;

  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
  &:active {
  }
`;

export const AddButton = styled(Button)`
  margin-top: 14px;
  width: 200px;
  height: 40px;
`;

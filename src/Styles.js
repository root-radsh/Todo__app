import styled from "styled-components";
import { lighten, darken } from "polished";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  width: calc(100vw - 50px);
  height: 540px;
  border-radius: 5px;
  box-shadow: 0px 0px 29px 10px #ececec;
`;

export const SideBar = styled.div`
  width: 200px;
  height: 100%;
  background-color: #e5e5e5;
  border-right: 1px solid #f1f1f1;
  padding: 60px 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
`;

export const Button = styled.button`
  background: #4dd599;
  border-radius: 4px;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${lighten(0.2, "#4DD599")};
  }

  &:active {
    background: ${darken(0.2, "#4DD599")};
  }
`;
export const Input = styled.input`
  font-family: "Lato", sans-serif;
  padding-left: 10px;
  height: 32px;
  border: 1px solid #efefef;
  border-radius: 4px;
  outline: none;
  &:focus {
    border: 2px solid #c1c1c1;
  }
`;

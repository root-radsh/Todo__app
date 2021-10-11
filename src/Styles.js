import styled from "styled-components";
import { lighten, darken } from "polished";

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

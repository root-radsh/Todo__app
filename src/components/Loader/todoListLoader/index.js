import React from "react";
import { Container } from "../StyleLoader";
import Loader from "./TodolistLoader";

export const TodoListLoader = () => {
  return (
    <Container>
      {[...Array(5)].map((item, idx) => {
        return <Loader key={idx} />;
      })}
    </Container>
  );
};

import React from "react";

import { TasksContainer } from "./TaskStyle";

export const Tasks = (props) => {
  return <TasksContainer>{props.children}</TasksContainer>;
};

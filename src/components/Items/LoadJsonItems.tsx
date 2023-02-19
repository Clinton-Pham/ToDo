import * as React from "react";
import { setTodoTypes, TodosType } from "../common/store";

export const LoadJsonItems = ({
  todos,
  setTodo,
}: {
  todos: TodosType;
  setTodo: setTodoTypes;
}) => {
  const task = require("../data/task.json");
  for (let i = 0; i < task.length; i++) {
    task[i].id = i + 1;
  }

  // setTodo([...task, todos]);
  setTodo([...todos, ...task]);
};

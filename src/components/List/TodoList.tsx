import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { TodoListItems } from "../Items/TodoListItems";
import {
  setTodoTypes,
  TodosType,
  toggleTodo,
  updateTodo,
  removeTodo,
} from "../common/store";
function TodoList({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: setTodoTypes;
}) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;

import {
  removeTodo,
  setTodoTypes,
  TodosType,
  toggleTodo,
  updateTodo,
} from "../common/store";
import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import * as React from "react";

export function TodoListItems({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: setTodoTypes;
}) {
  return (
    <>
      {todos.map((todo: { id: number; text: string; complete: boolean }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => setTodos(toggleTodo(todos, todo.id))} />
          <Input
            mx={2}
            value={`ID ${todo.id}: ${todo.text}`}
            onChange={(evt) =>
              setTodos(updateTodo(todos, todo.id, evt.target.value))
            }
          />
          <Button onClick={() => setTodos(removeTodo(todos, todo.id))}>
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

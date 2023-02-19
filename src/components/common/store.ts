// Standard interface and functions
import * as React from "react";

export interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    complete: todo.id === id ? !todo.complete : todo.complete,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] => {
  console.log("todos before remove: ", todos);
  console.log("removing todo with id: ", id);
  const newTodos = todos.filter((todo) => todo.id !== id);
  console.log("todos after remove: ", newTodos);
  return newTodos;
  // todos.filter((todo) => todo.id !== id);
};
export const addTodo = (todos: Todo[], text: string): Todo[] => {
  const maxId = Math.max(...todos.map(({ id }) => id), 0);
  const newId = maxId === 0 ? 1 : maxId + 1;

  // Create the new todo item with the next available id
  const newTodo = { id: newId, text: text, complete: false };

  // Return a new array with the new todo item appended to the end
  return [...todos, newTodo];
};

export const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);
export type useTodosType = ReturnType<typeof useTodos>;
export type TodosType = useTodosType[0];
export type setTodoTypes = useTodosType[1];

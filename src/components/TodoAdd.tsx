import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { addTodo, setTodoTypes, TodosType } from "./common/store";

function TodoAdd({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: setTodoTypes;
}) {
  const [newTodo, setNewTodo] = React.useState("");
  const [isEmpty, setIsEmpty] = React.useState(true);

  const checkInputIsEmpty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(event.target.value.length < 1);
  };

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(evt) => {
          setNewTodo(evt.target.value);
          checkInputIsEmpty(evt);
        }}
      />
      <Button
        disabled={isEmpty}
        onClick={() => {
          setTodos(addTodo(todos, newTodo));
          setIsEmpty(true);
          setNewTodo("");
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;

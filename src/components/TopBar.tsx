import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { setTodoTypes, TodosType } from "./common/store";
import { LoadJsonItems } from "./Items/LoadJsonItems";
import { useState } from "react";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar({
  todos,
  setTodo,
}: {
  todos: TodosType;
  setTodo: setTodoTypes;
}) {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    if (!loaded) {
      LoadJsonItems({ todos, setTodo });
      setLoaded(true);
    }
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad} disabled={loaded}>
        {loaded ? "Loaded task to list" : "Load"}
      </Button>
    </Grid>
  );
}

export default TopBar;

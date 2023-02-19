import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/List/TodoList";
import TodoAdd from "./components/TodoAdd";

export function App() {
  // @ts-ignore
  const [todos, setTodos] = React.useState<ToDo[]>([]);
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar todos={todos} setTodo={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoAdd todos={todos} setTodos={setTodos} />
      </Box>
    </ChakraProvider>
  );
}

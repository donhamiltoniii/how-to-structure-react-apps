import { useEffect, useState } from "react";
import { Todo } from "types/todo";
import { Container } from "../../components/container";
import { Header } from "../../components/header";
import { TodoList } from "../../components/todo-list";

import "./styles.css";

export function App() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    (async () => {
      // Simulates fetching data from some external source (i.e. an API)
      const { data } = await import("../../data/todos");
      setTodos(data);
    })();
  }, []);

  return (
    <div data-testid="app-container">
      <Header />
      <Container maxWidth={60}>{todos && <TodoList todos={todos} />}</Container>
    </div>
  );
}

import { TodoItem } from "./todo-item";
import { Todo } from "types/todo";

import "./styles.css";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="todo-list" data-testid="todo-list-container">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.title} todo={todo} />
      ))}
    </ul>
  );
};

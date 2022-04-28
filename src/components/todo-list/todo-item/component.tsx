import { Todo } from "types/todo";

import "./styles.css";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, description, title } = todo;
  return (
    <li className="todo-item" data-testid="todo-item-container">
      <input
        checked={completed}
        className="todo-item__completed"
        name="completed"
        type="checkbox"
      />
      <div>
        <h3 className="todo-item__title">{title}</h3>
        <p className="todo-item__description">{description}</p>
      </div>
    </li>
  );
};

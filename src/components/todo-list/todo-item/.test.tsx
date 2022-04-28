import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { TodoItem } from "./component";
import { Todo } from "../../../types/todo";

describe("App", () => {
  const mockTodo: Todo = {
    completed: false,
    description: "",
    title: "",
  };

  it("should render", () => {
    render(<TodoItem todo={mockTodo} />);
    const component = screen.getByTestId("todo-item-container");
    expect(component).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Todo } from "@types/todo";

import { TodoList } from "./component";

describe("TodoList", () => {
  const mockTodos: Todo[] = [{ completed: false, description: "", title: "" }];
  it("should render", () => {
    render(<TodoList todos={mockTodos} />);
    const component = screen.getByTestId("todo-list-container");
    expect(component).toBeInTheDocument();
  });
});

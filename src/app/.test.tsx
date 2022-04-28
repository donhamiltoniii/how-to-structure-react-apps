import { render, screen } from "@testing-library/react";
import { App } from "./component";

test("renders learn react link", () => {
  render(<App />);
  const appContainer = screen.getByTestId("app-container");
  expect(appContainer).toBeInTheDocument();
});

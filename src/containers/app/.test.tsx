import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

import { App } from "./component";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const component = screen.getByTestId("app-container");
    expect(component).toBeInTheDocument();
  });
});

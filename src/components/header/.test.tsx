import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Header } from "./component";

describe("App", () => {
  it("should render", () => {
    render(<Header />);
    const component = screen.getByTestId("header-container");
    expect(component).toBeInTheDocument();
  });
});

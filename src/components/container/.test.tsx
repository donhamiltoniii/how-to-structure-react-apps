import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Container } from "./component";

describe("App", () => {
  it("should render", () => {
    render(
      <Container>
        <div></div>
      </Container>
    );
    const component = screen.getByTestId("container-container");
    expect(component).toBeInTheDocument();
  });
});

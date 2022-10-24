import { describe, expect, it } from "vitest";
import Home from "../Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render Home Page", () => {
    render(<Home />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});

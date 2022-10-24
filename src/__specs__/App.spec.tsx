import { describe, expect, it } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render App", () => {
    render(<App />);
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });
});

import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render footer", () => {
    render(<Footer />);
    expect(
      screen.getByText("Made with love by Sukhdev Singh")
    ).toBeInTheDocument();
  });
});

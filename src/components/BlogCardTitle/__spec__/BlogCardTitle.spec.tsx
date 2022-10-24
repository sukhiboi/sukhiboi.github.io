import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogCardTitle from "../BlogCardTitle";

describe("Blog Card Title", () => {
  it("should render the tile for a blog card", () => {
    render(<BlogCardTitle title={"Title"} />);
    expect(screen.getByText("<h2>Title</h2>")).toBeInTheDocument();
  });
});

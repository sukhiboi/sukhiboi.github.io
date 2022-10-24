import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogPostTitle from "../BlogPostTitle";

describe("Blog Post Title", () => {
  it("should render the tile for a blog post", () => {
    render(<BlogPostTitle title={"Title"} />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});

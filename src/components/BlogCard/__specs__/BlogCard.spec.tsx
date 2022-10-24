import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogCard from "../BlogCard";

describe("Blog Card", () => {
  it("should render blog card", () => {
    render(<BlogCard title={"Title"} content={"Content"} />);

    expect(screen.getByText("<h2>Title</h2>")).toBeInTheDocument();
    expect(screen.getByText("<p>Content</p>")).toBeInTheDocument();
  });
});

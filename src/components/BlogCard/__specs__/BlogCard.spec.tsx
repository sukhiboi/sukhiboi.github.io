import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogCard from "../BlogCard";

describe("Blog Card", () => {
  it("should render blog card", () => {
    render(
      <BlogCard title={"Title"} initialContent={"Some initial Content"} />
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Some initial Content")).toBeInTheDocument();
  });
});

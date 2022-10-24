import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogPost } from "../../../types";
import BlogList from "../BlogList";

const blogs: BlogPost[] = [
  { id: "1", title: "Blog1", content: "This is first blog" },
  { id: "2", title: "Blog2", content: "This is second blog" },
  { id: "3", title: "Blog3", content: "This is third blog" },
  { id: "4", title: "Blog4", content: "This is fourth blog" },
];

describe("Blog List", () => {
  it("render provided blogs", () => {
    render(<BlogList blogs={blogs} />);
    expect(screen.getByTestId("blog-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("blog-card-2")).toBeInTheDocument();
    expect(screen.getByTestId("blog-card-3")).toBeInTheDocument();
    expect(screen.getByTestId("blog-card-4")).toBeInTheDocument();
  });

  it("render correct message when there are no blogs", () => {
    render(<BlogList blogs={[]} />);
    expect(screen.getByText("No blogs written yet")).toBeInTheDocument();
  });
});

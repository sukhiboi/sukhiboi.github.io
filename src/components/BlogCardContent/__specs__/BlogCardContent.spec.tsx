import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogContent from "../BlogCardContent";

describe("Blog Card Content", () => {
  it("should render the blog card content", () => {
    render(<BlogContent content={"Blog card Content"} />);
    expect(screen.getByText(/Blog card Content/)).toBeInTheDocument();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TagText from "../TagText";

describe("Tag Text", () => {
  it("should render the title in given component tag", () => {
    render(<TagText tag={"h1"} content={"Content"} />);
    expect(screen.getByText(/Content/)).toBeInTheDocument();
    expect(screen.getByText("<h1>")).toBeInTheDocument();
    expect(screen.getByText("</h1>")).toBeInTheDocument();
  });

  it("should render the content in given component tag", () => {
    render(<TagText tag={"p"} content={"Content"} />);
    expect(screen.getByText(/Content/)).toBeInTheDocument();
    expect(screen.getByText("<p>")).toBeInTheDocument();
    expect(screen.getByText("</p>")).toBeInTheDocument();
  });
});

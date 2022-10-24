import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogPost from "../BlogPost";

describe("Blog Post", () => {
    it("should render blog post", () => {
        render(<BlogPost title={"Title"} />);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders main hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /hi, i'm juan manuel/i }),
    ).toBeInTheDocument();
  });
});

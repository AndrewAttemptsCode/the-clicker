import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Clicker from "../components/Clicker";

describe("Clicker Component", () => {
  it("renders clicker button", () => {
    render(<Clicker />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments count when clicked", async () => {
    render(<Clicker />);
    const button = screen.getByText("0");
    await userEvent.click(button);
    expect(screen.getByText("1")).toBeInTheDocument();
  })
});

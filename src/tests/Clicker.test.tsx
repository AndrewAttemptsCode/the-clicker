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

  it("does not render any power orbs on clicker button render", () => {
    render(<Clicker />);
    expect(screen.queryByText("+ 5")).not.toBeInTheDocument();
  });

  it("increments count when clicker button clicked", async () => {
    render(<Clicker />);
    const button = screen.getByText("0");
    await userEvent.click(button);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders a +5 power orb button at 100 click count only", () => {
    render(<Clicker initialCount={100}/>);

    expect(screen.getByText("+ 5")).toBeInTheDocument();
    expect(screen.queryByText("+ 10")).not.toBeInTheDocument();
  });

  it("renders no more than four power orbs", () => {
    render(<Clicker initialCount={500}/>);

    expect(screen.getByText("+ 5")).toBeInTheDocument();
    expect(screen.getByText("+ 10")).toBeInTheDocument();
    expect(screen.getByText("+ 15")).toBeInTheDocument();
    expect(screen.getByText("+ 20")).toBeInTheDocument();
    expect(screen.queryByText("+ 25")).not.toBeInTheDocument();
  });

  it("power orbs increment count by correct amount when clicked", async () => {
    render(<Clicker initialCount={400} />);

    const powerOrb1 = screen.getByText("+ 5");
    await userEvent.click(powerOrb1);
    expect(screen.getByText("405")).toBeInTheDocument();

    const powerOrb2 = screen.getByText("+ 10");
    await userEvent.click(powerOrb2);
    expect(screen.getByText("415")).toBeInTheDocument();

    const powerOrb3 = screen.getByText("+ 15");
    await userEvent.click(powerOrb3);
    expect(screen.getByText("430")).toBeInTheDocument();

    const powerOrb4 = screen.getByText("+ 20");
    await userEvent.click(powerOrb4);
    expect(screen.getByText("450")).toBeInTheDocument();
  });
});

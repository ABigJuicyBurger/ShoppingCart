import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App.tsx";

describe("displays shop heading", () => {
  it("renders heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const heading = screen.getAllByText("Shop.AI")[0]; // Get 1st instance
    expect(heading).toBeInTheDocument();
  });
});

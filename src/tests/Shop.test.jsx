import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop";
import Products from "../components/Products";
import { vi } from "vitest";

describe("Shop Component", () => {
  it("displays All AI components", () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    const companions = [
      "Coding Companion",
      "Creative Writer",
      "Study Buddy",
      "Life Coach",
      "EntertainmentAI",
    ];

    companions.forEach((companion) => {
      expect(screen.getByText(companion)).toBeInTheDocument();
    });
  });
});

describe("Shop prices", () => {
  it("Displays product prices", () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    const productPrices = [
      { name: "Coding Companion", price: "$99.99" },
      { name: "Creative Writer", price: "$79.99" },
      { name: "Study Buddy", price: "$49.99" },
      { name: "Life Coach", price: "$149.99" },
      { name: "EntertainmentAI", price: "$89.99" },
    ];

    productPrices.forEach((product) => {
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });
  });
});

describe("Cart Interactions", () => {
  it("increases cart count when adding items", async () => {
    const mockAddToCart = vi.fn(); // Create a mock function
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/shop/item/coding-companion"]}>
        <Routes>
          <Route element={<Outlet context={{ addToCart: mockAddToCart }} />}>
            <Route path="/shop/item/:productid" element={<Products />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addToCartButton);

    // Verify our mock function was called
    expect(mockAddToCart).toHaveBeenCalled();
  });
});

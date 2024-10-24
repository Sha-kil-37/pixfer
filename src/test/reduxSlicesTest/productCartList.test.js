// productCartListSlice.test.js
import { describe, it, expect } from "vitest";
import productCartListSlice, {
  setProductCartList,
} from "../../redux/slices/productCartSlice/productCartListSlice";

describe("productCartListSlice", () => {
  const initialState = {
    productCartList: [],
  };
  //
  it("should return the initial state", () => {
    const result = productCartListSlice(undefined, {});
    expect(result).toEqual(initialState);
  });
  //
  it("should handle setProductCartList", () => {
    const initialState = {
      productCartList: [],
    };
    const product = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      // ... include other necessary fields
    };
    const newState = productCartListSlice(
      initialState,
      setProductCartList(product)
    );

    expect(newState.productCartList).toContain(product);
    expect(newState.productCartList.length).toBe(1); // Check if the product count is now 1
  });
  //
  it("should handle setProductCartList", () => {
    const product = {
      id: 1,
      title: "Test Product",
      price: 100,
      description: "This is a test product.",
      category: "test",
      image: "https://example.com/image.jpg",
      rating: {
        rate: 4,
        count: 10,
      },
    };
    const result = productCartListSlice(
      initialState,
      setProductCartList(product)
    );
    expect(result.productCartList).toEqual([product]);
  });

  it("should not duplicate products when added multiple times", () => {
    const product = {
      id: 1,
      title: "Test Product",
      price: 100,
      description: "This is a test product.",
      category: "test",
      image: "https://example.com/image.jpg",
      rating: {
        rate: 4,
        count: 10,
      },
    };
    // Add the product once
    let state = productCartListSlice(initialState, setProductCartList(product));

    // Try adding the same product again
    state = productCartListSlice(state, setProductCartList(product));
    expect(state.productCartList).toEqual([product]); // Ensure no duplicates
  });

  //
});

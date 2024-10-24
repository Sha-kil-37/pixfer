import { describe, expect, it } from "vitest";
import searchValueSlice, { setSearchValue } from "../../redux/slices/searchValueSlice/searchValueSlice";
describe("searchValueSlice", () => {
  const initialState = { value: "" };
  it("should return the initial state", () => {
    const result = searchValueSlice(undefined, { type: undefined });
    expect(result).toEqual(initialState);
  });

  it("should handle setSearchValue", () => {
    const newValue = "Test Search";
    const action = setSearchValue(newValue);
    const result = searchValueSlice(initialState, action);
    expect(result.value).toBe(newValue);
  });
});

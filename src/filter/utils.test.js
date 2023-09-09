import { filterByProperty, filterUniqueStrings } from "./utils";

describe("filter utility exercises", () => {
  describe("filterUniqueStrings", () => {
    test("should filters out duplicate strings", () => {
      expect(
        filterUniqueStrings([
          "apple",
          "banana",
          "cherry",
          "apple",
          "date",
          "banana"
        ])
      ).toEqual(["apple", "banana", "cherry", "date"]);
    });

    test("should handles empty input array", () => {
      expect(filterUniqueStrings([])).toEqual([]);
    });

    test("should handles input with all unique strings", () => {
      expect(filterUniqueStrings(["one", "two", "three"])).toEqual([
        "one",
        "two",
        "three"
      ]);
    });

    test("should handles input with one repeated string", () => {
      expect(filterUniqueStrings(["apple", "apple", "apple"])).toEqual([
        "apple"
      ]);
    });

    test("should checks if the output array contains only unique strings", () => {
      const isArrayUnique = (arr) => new Set(arr);
      const result = filterUniqueStrings([
        "apple",
        "banana",
        "cherry",
        "apple",
        "date",
        "banana"
      ]);
      expect(isArrayUnique(result)).toBeTruthy();
    });

    test("should checks if the output array length is correct", () => {
      expect(
        filterUniqueStrings([
          "apple",
          "banana",
          "cherry",
          "apple",
          "date",
          "banana"
        ])
      ).toHaveLength(4);
    });

    test("should checks if the function throws an error with invalid input", () => {
      expect(() => filterUniqueStrings("invalid")).toThrow();
    });
  });

  describe("filterByProperty", () => {
    test("should filters objects with specified property", () => {
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { color: "yellow" },
            { name: "cherry", color: "red" }
          ],
          "name"
        )
      ).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" }
      ]);
    });

    test("should handles empty input array", () => {
      expect(filterByProperty([], "name")).toEqual([]);
    });

    test("should handles objects with property having falsy values", () => {
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { size: 0 },
            { name: "cherry", color: "red" }
          ],
          "size"
        )
      ).toEqual([{ size: 0 }]);
    });

    test("should checks if the output array contains only objects with the specified property", () => {
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { color: "yellow" },
            { name: "cherry", color: "red" }
          ],
          "name"
        )
      ).toEqual([
        { color: "red", name: "apple" },
        { color: "red", name: "cherry" }
      ]);
    });

    test("should check if the function throws an error with invalid input", () => {
      expect(() => filterByProperty("invalid", "name")).toThrow();
    });
  });
});

import { capitalizeValues, findDuplicates } from "./utils";

describe("map utility exercises", () => {
  describe("capitalizeValues", () => {
    test("should capitalize all strings in the array", () => {
      expect(capitalizeValues(["apple", "banana", "cherry"])).toEqual([
        "Apple",
        "Banana",
        "Cherry"
      ]);
    });

    test("should handle empty input array", () => {
      expect(capitalizeValues([])).toEqual([]);
    });

    test("should capitalize strings with spaces", () => {
      expect(capitalizeValues(["hello world", "goodbye space"])).toEqual([
        "Hello world",
        "Goodbye space"
      ]);
    });

    test("should not change original array", () => {
      expect(capitalizeValues(["abc", "def"])).not.toBe(["abc", "def"]);
    });

    test("should capitalize strings with special characters", () => {
      expect(capitalizeValues(["!@#", "$%^"])).toEqual(["!@#", "$%^"]);
    });

    test("should capitalize and check mixed case strings", () => {
      expect(capitalizeValues(["loRem", "IpSum", "DoLor"])).toEqual([
        "Lorem",
        "Ipsum",
        "Dolor"
      ]);
    });
  });

  describe("findDuplicates", () => {
    describe("should find duplicates in an array", () => {
      expect(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 7])).toEqual([2, 3]);
    });

    describe("should handle array with no duplicates", () => {
      expect(findDuplicates([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([]);
    });

    describe("should find duplicates with negative numbers", () => {
      expect(findDuplicates([1, -2, 3, -2, 4, 5, 3, -6, 7])).toEqual([-2, 3]);
    });

    describe("should find duplicates with floating-point numbers", () => {
      expect(findDuplicates([1.5, 2.3, 1.5, 4.8, 2.3])).toEqual([1.5, 2.3]);
    });

    describe("should handle empty input array", () => {
      expect(findDuplicates([])).toEqual([]);
    });
  });
});

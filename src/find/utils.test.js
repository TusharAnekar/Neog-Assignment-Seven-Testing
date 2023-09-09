import { findLastNegativeNumber, findLongestWord } from "./utils";

describe("find utility exercises", () => {
  describe("findLongestWord", () => {
    test("should find longest word in a sentence", () => {
      expect(
        findLongestWord("The quick brown fox jumps over the lazy dog.")
      ).toBe("quick");
    });

    test("should find longest word in a sentence with a single word", () => {
      expect(findLongestWord("Hello")).toBe("Hello");
    });

    test("should find longest word in an empty string", () => {
      expect(findLongestWord("")).toBeUndefined();
    });

    test("should check if the output is a string", () => {
      expect(
        findLongestWord("The quick brown fox jumps over the lazy dog.")
      ).toEqual(expect.any(String));
    });
  });

  describe("findLastNegativeNumber", () => {
    test("should find last negative number", () => {
      expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toBe(-5);
    });

    test("should find last negative number in an array with no negative numbers", () => {
      expect(findLastNegativeNumber([3, 7, 2, 9, 5])).toBeUndefined();
    });

    test("should find last negative number in an array with decimal numbers", () => {
      expect(findLastNegativeNumber([3.5, -7.2, -2.1, 9.7, 5.3])).toBe(-2.1);
    });

    test("should check if the output is a number", () => {
      expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toEqual(
        expect.any(Number)
      );
    });

    test("should check if the function throws an error with invalid input", () => {
      expect(() => findLastNegativeNumber("invalid")).toThrow();
    });
  });
});

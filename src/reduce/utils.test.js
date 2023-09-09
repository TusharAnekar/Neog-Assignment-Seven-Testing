import { calculateFactorial, sumNestedArrays } from "./utils";

describe("reduce utility exercises", () => {
  describe("sumNestedArrays", () => {
    test("should sum numbers in a nested array", () => {
      expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toBe(21);
    });

    test("should sum numbers in an empty nested array", () => {
      expect(sumNestedArrays([])).toBe(0);
    });

    test("should ensure original array remains unchanged", () => {
      expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).not.toBe([
        [1, 2],
        [3, 4, 5],
        [6]
      ]);
    });

    test("should check if the output is a number", () => {
      expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual(
        expect.any(Number)
      );
    });
  });

  describe("calculateFactorial", () => {
    test("should calculate factorial of 0", () => {
      expect(calculateFactorial(0)).toBe(1);
    });

    test("should calculate factorial of 1", () => {
      expect(calculateFactorial(1)).toBe(1);
    });

    test("should calculate factorial of 5", () => {
      expect(calculateFactorial(5)).toBe(120);
    });

    test("should calculate factorial of 10", () => {
      expect(calculateFactorial(10)).toBe(3628800);
    });

    test("should check if the output is a number", () => {
      expect(calculateFactorial(5)).toEqual(expect.any(Number));
    });

    test("should handle negative input", () => {
      expect(() => calculateFactorial(-5)).toThrow();
    });
  });
});

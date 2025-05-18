import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./index";

test("Functions", () => {
  expect(addNumbers(1, 2)).toBe(3);
  expect(subtractNumbers(5, 3)).toBe(2);
  expect(multiplyNumbers(4, 2)).toBe(8);
  expect(divideNumbers(8, 2)).toBe(4);
});
export function addNumbers(a: number, b: number): number {
  return a + b;
}
export function subtractNumbers(a: number, b: number): number {
  return a - b;
}
export function multiplyNumbers(a: number, b: number): number {
  return a * b;
}
export function divideNumbers(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
// This is an example of functional math operations with no hard dependencies

function sum(x: number, y: number): number {
  return x + y;
}

function substract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}

export { sum, substract, multiply, divide };

import { sum, substract, multiply, divide } from './math';

describe('MathService', () => {
  describe('sum', () => {
    it('should add two numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });

    it('should add two negative numbers', () => {
      expect(sum(-1, -2)).toBe(-3);
    });
  });
  describe('substract', () => {
    it('should substract two numbers', () => {
      expect(substract(2, 1)).toBe(1);
    });

    it('should substract two negative numbers', () => {
      expect(substract(-1, -2)).toBe(1);
    });
  });
  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });
  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });
  });
});

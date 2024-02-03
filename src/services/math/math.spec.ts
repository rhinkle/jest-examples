import { sum, substract } from './math';

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
});

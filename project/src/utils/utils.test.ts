import { isTrueString } from './utils';

describe('Utils module', () => {
  describe('testing Function: isTrueString()', () => {
    it('should return true for string "true"', () => {
      expect(isTrueString('true')).toBe(true);
    });
    it('should return false for string ither "true"', () => {
      expect(isTrueString('some string')).toBe(false);
    });
  });
});

import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('should format a positive number appropriately as USD', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50');
  });

  it('should format zero correctly', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('should format a negative number correctly', () => {
    expect(formatCurrency(-500.75)).toBe('-$500.75');
  });

  it('should format numbers with many decimals correctly (rounding)', () => {
    expect(formatCurrency(100.129)).toBe('$100.13');
  });

  it('should throw an error for invalid numbers (NaN)', () => {
    expect(() => formatCurrency(NaN)).toThrow('Invalid number provided to formatCurrency');
  });
  
  it('should allow custom currency types', () => {
    // Note: The representation depends on the environment running the test,
    // but typically it handles localized currencies.
    expect(formatCurrency(100, 'EUR', 'en-US')).toMatch(/€100\.00/);
  });
});

export function formatCurrency(amount: number, currency: string = 'USD', locale: string = 'en-US'): string {
  if (isNaN(amount)) {
    throw new Error('Invalid number provided to formatCurrency');
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

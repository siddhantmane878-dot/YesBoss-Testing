/**
 * Utility to validate email addresses.
 * Task: Implement a robust email validation function.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (email.length > 3) && emailRegex.test(email);
};

// Example usage:
// console.log(isValidEmail("test@example.com")); // true

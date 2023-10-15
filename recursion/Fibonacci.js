// Ряд Фибоначчи — это 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

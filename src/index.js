function getFibonacci(n) {
  let result = '0'
  let a = 1;
  let b = 0;

  for (i = 1; i < n; i++) {
    a += b;
    b = a - b;
    result += ', ' + b;
  }

  return result;
}
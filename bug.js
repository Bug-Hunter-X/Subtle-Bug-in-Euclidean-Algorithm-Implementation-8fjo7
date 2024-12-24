function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: false
console.log(foo(15, 9)); // Output: true
console.log(foo(10, 5)); // Output: true
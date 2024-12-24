function foo(a, b) {
  if (a === 0 || b === 0) {
    return false; // Correct base case for mutual divisibility
  }
  if (a === b) {
    return true; //If both numbers are equal, they are mutually divisible
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: true
console.log(foo(15, 9)); // Output: true
console.log(foo(10, 5)); // Output: true
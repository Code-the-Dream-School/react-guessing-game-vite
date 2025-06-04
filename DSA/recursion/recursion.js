// function recur(i) {
//   // // Base case
//   if (i <= 0) {
//     console.log("Done recursing");
//     return;
//   }
//   // Recursive step
//   console.log("i recurrr:", i);
//   recur(i - 1);
// }
// recur(5);

var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log("Fib(5) is " + fib(5));

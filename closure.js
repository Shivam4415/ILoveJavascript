// Closure is fn bundled within its environment lexical scope
// Example ::
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// Return function::
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
x(); // prints function
x()(); // prints value

// Example 2::
console.log("Welcome to Second Example");

function z() {
  const a = 100;
  function x() {
    const b = 9;
    function y() {
      console.log(b, a);
    }
    return y();
  }
  return x();
}
z();

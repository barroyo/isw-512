// anonymous function expression
//anonymous();

// const substract = function (x,y){
//   return x - y;
// };

// calc(substract, 4, 10);

// declaration();

// var anonymous = function() {
//   console.log('anonymous function called');
// };

// anonymous();

// const sum = function(x,y) {
//   return x + y;
// };

// function calc(operation, x, y){
//    const result = operation(x,y);
//    console.log('The result is:', result);
// }


// lets sum 2 numbers


// anynymous
var anonymous = function() {
  console.log('anonymous function called');
};

// named function expression
var named = function named() {
  console.log('named function called');
};

// immediately-invoked function expression (IIFE)
(function(where) {
 console.log('Welcome to the '+ where +'. Please follow me.');
})('Costa Rica');

function declaration(){
  console.log('calling a function declaration');
}

declaration();
named();
anonymous();

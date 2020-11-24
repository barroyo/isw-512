// anonymous function expression
//anonymous();

declaration();

var anonymous = function() {
  console.log('anonymous function called');
};

//anonymous();


function calc(operation, x, y){
   const result = operation(x,y);
   console.log('The result is:', result);
}

const sum = function(x,y) {
  return x + y;
};

const substract = function (x,y){
  return x - y;
};


// lets sum 2 numbers
//calc(substract, 4, 10);


// named function expression
var named = function named() {
  return true;
};

// immediately-invoked function expression (IIFE)
//(function(where) {
//  console.log('Welcome to the '+ where +'. Please follow me.');
//})('Costa Rica');

function declaration(){
  console.log('calling a function declaration');
}

//global scope


function increaseX(y) {
   //local scope
   x = 15;
   return x + y;
}

function testScopeWithLet() {
  let x = 15;

  if (true){
     let x = 20;
     console.log('X inside block:', x);
  }
  console.log('X outside of block:', x);
}


//testScopeWithLet();

function testScopeWithVar() {
  var x = 15;

  if (true){
     var x = 20;
     console.log('X inside block:', x);
  }
  console.log('X outside of block:', x);
}

//testScopeWithVar();

function testConst() {
  const x = 15;

  if (true){
     x = 20;
     console.log('X inside block:', x);
  }
  console.log('X outside of block:', x);
}

testConst();
//console.log('X before calling increase',x);
//result = increaseX(5);
//console.log('X after calling increase',x);
//console.log('result:',result);



const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce( (sum, item) => sum + item, 0 );
};

const multiply = function(array) {
	return array.reduce( (prod, item) => prod * item, 1 );
};

const power = function(num, pow) {
  let val = num;
	for(let i=0; i<pow-1; i++){
    num *= val;
  }
  return num;
};

const factorial = function(n) {
	if(n === 0 || n === 1) return 1;
  else{
    let fac = 1;
    for(let i=1; i<=n; i++){
      fac *= i;
    }
    return fac;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

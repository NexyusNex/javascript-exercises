const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  total=0;
	for(var i=0;i<array.length;i++){
    total+=array[i];
  }
  return total;
};

const multiply = function(array) {
  total=1;
	for(var i=0;i<array.length;i++){
    total*=array[i];
  }
  return total;
};

const power = function(num,pow) {
  var result=1;
	for(var i=0;i<pow;i++){
    result*=num;
  }
  return result;
};

const factorial = function(num) {
  if(num==0) return 1;
  total=1;
  for(var i=num;i>=1;i--){
    total*=i;
  }
  return total;
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

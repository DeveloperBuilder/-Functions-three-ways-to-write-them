//function declaration
function squareDeclaration(number1A, number2A) {
  const squared1A = number1A * number1A;
  const squared2A = number2A *  number2A;
  const totalA = squared1A + squared2A;
  const totalsumA = totalA * totalA;
  return (totalsumA);
};
console.log(squareDeclaration(5,5)); 

//function expression
const squareExpression = function (number1B, number2B) {
  const squared1B = number1B * number1B;
  const squared2B = number2B * number2B;
  const totalB = squared1B + squared2B;
  const totalsumB = totalB * totalB;
  return (totalsumB);
};
console.log(squareExpression(5,5)); 

//arrow function
const squareArrow = (number1C, number2C) => {
  const squared1C = number1C * number1C;
  const squared2C = number2C * number2C;
  const totalC = squared1C + squared2C;
  const totalsumC = totalC * totalC;
  return (totalsumC);
};
console.log(squareArrow(5,5)); 

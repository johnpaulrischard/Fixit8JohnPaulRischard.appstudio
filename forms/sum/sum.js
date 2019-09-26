/* #5: Option A */
function calculate(num1, num2) {
  let answer = +num1 + +num2
  return answer
  }
  
  let num1 = prompt('What is your first number?')
  let num2 = prompt('What is your second number?')
  let summedNumbers = calculate(num1, num2)
  console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}`)
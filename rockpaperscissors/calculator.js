const readline = require('readline');

// Set up readline to get input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Node.js Calculator!");
console.log("Enter the operation you want to perform (add, subtract, multiply, divide):");

rl.question("Operation: ", (operation) => {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      let result;

      switch (operation.toLowerCase()) {
        case 'add':
          result = number1 + number2;
          break;
        case 'subtract':
          result = number1 - number2;
          break;
        case 'multiply':
          result = number1 * number2;
          break;
        case 'divide':
          if (number2 !== 0) {
            result = number1 / number2;
          } else {
            console.log("Error: Division by zero is not allowed.");
            rl.close();
            return;
          }
          break;
        default:
          console.log("Invalid operation.");
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});

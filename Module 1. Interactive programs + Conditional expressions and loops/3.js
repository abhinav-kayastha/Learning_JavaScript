const num1 = parseInt(prompt('Enter a number.'));
const num2 = parseInt(prompt('Enter a number.'));
const num3 = parseInt(prompt('Enter a number.'));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3)/3

document.querySelector('#paragraph1').innerHTML = `The sum is ${sum}, the product is ${product}, the average is ${average}.`;

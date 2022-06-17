//Váriavel de entrada
const numInput = 9;

let isFibonacci = false;
let numPrevious = 0;
let temp = 0;
let numCurrent = 0;

console.log(`Sequência de Fibonacci até o número ${numInput}:`) 

while (numCurrent <= numInput) {
  if(numInput === numCurrent) isFibonacci = true;
  if (numCurrent === 0) {
    console.log(numCurrent);
    numCurrent++;
  } else {
    console.log(numCurrent);
    temp = numCurrent;
    numCurrent = numPrevious + numCurrent;
    numPrevious = numCurrent;
    numPrevious = temp;
  }
}

isFibonacci ? 
  console.log(`O número ${numInput} pertence a sequência!`) 
  : console.log(`O número ${numInput} não pertence a sequência!`)
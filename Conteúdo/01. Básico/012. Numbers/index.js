// Padrão JS - IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

// resolvendo problema de imprecisão na soma de valores pequenos num < 0
//num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
//num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
//num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

// resolve o problema de imprecisão 
num1 = num1 + num2;
num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); /*ocorre a concatenação em decorreência da string*/
// num1 = num1.toString; /*transformando num1 em string definitiva*/
// console.log(typeof num1); /*typeof mostra qual o tipo da váriavel*/
// console.log(num1.toString(2)); /*representação binária*/
// console.log(num1.toFixed(2)); /*arredonda o valor em decorrência da precisão determinada entre os parenteses*/
// console.log(Number.isInteger(num1)); /*checa se o número é inteiro ou não (true or false)*/

// let temp = num1 * 'Ola';
// console.log(Number.isNaN(temp)); /*se a conta for inválida (number e string) ele retorna o valor true, não sendo possivel pois Not a Number(NaN)*/
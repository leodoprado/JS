// Tipos de dados primitivos:
// string, number, undefined, null, boolean, symbol

const nome = 'Leo'; // string
const nome1 = "Leo"; // string
const nome2 = `Leo`; // string
const num1 = 10; // number
const num2 = 12.34; // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória 
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true or false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2  2

a = 3;
console.log(a, b); // 3  2

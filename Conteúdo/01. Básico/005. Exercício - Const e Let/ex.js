/*
Leo Prado tem 18 anos, pesa 86 kg
tem 1.88 de altura e seu IMC é de 25.92595925924
*/
const nome = 'Leo';
const sobrenome = 'Prado';
const idade = 18;
const peso = 86;
const alturaEmCm = 1.88;
let indiceMassaCorporal = peso / (alturaEmCm*alturaEmCm);
let anoNascimento = 2020 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); 
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
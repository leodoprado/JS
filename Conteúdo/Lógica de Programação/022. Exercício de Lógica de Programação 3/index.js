/* 
Escreva uma função que recebe um número e retone:
Número é divisível por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisivel por 3 e 5 - Retorna NaN (Not a Number)
Checar se o número é realmente um número
Use a função com números de 0 a 100 
*/

function CheckNumeroDivisivel(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

console.log('a', CheckNumeroDivisivel('a'))
for (let i = 0; i < 100; i++){
    console.log(i, CheckNumeroDivisivel(i));
}
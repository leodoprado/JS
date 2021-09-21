//               01234567
let umaString = 'Um texto';

//console.log(umaString[3]);

console.log(umaString.charAt(3)); // pegar um character em determinada posição


console.log(umaString.concat(' em um lindo dia.')); // concatenando string

console.log(`${umaString} em um lindo dia.`); // concatenando string


console.log(umaString.indexOf('texto')); // descobrir aonde indice inicia

console.log(umaString.indexOf('o', 3)); // descobrir em que indice está a partir do indice 3, começa da frente para trás

console.log(umaString.lastIndexOf('m', 5)); // começa de trás para frente


console.log(umaString.match(/[a-z]/g)); // expressão regular

console.log(umaString.search(/x/)); // procura o indice, é possível usar expressão regular


console.log(umaString.replace(/Um/, 'Outro')); // substituindo palavras, com expressão regular

console.log(umaString.replace(/o/g, '#')); // substituindo todos os caracteres 


console.log(umaString.length); // quantia de caracteres 

console.log(umaString.slice(3, 8)); // pegando apenas uma parte de string

console.log(umaString.slice(-3)); // = console.log(umaString.slice(5));

console.log(umaString.slice(-5, -1)); // o primeiro numero pega todos e após subtrai -1 (ultimo)

console.log(umaString.substring(umaString.length - 5)); // mesma coisa que o anterior

console.log(umaString.split(' ')); // dividindo por um espaço


console.log(umaString.toUpperCase()); // deixa todo o texto maiúsculo

console.log(umaString.toLocaleLowerCase()) // deixa todo o texto minúsculo


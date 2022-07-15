// O array é indexado por cada elemento
//                0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos instanceof Array); /*verificando se é de fato um array*/
// console.log(typeof alunos) /*o array no JS é um objeto indexado*/

// console.log(alunos.slice(0, -1)); /*estou dividindo o array passando os parrametros que eu quero exibir*/
// console.log(alunos.slice(0, 2)); /*estou dividindo o array passando os parrametros que eu quero exibir*/

// delete alunos[1]; /*deleta um indice, e deixa-o vazio*/
// alunos.pop(); /*remove o ultimo indice do array*/
// alunos.shift(); /*remove um indice do inicio do array*/

// alunos.unshift('Otavio'); /*adiciona um nome no primeiro indice do array*/
// alunos.push('Otavio'); /*adiciona um nome no ultimo indice do array*/

// console.log(alunos[1]); /*acessando determinado nome pelo seu indíce*/

// alunos[0] = 'Eduardo'; /*alterando o valor de 'Luiz' para 'Eduardo'*/
// console.log(alunos[0]);

// alunos[alunos.length] = 'Luiza'; /*adicionando nomes independente do número de itens do array*/
// alunos[alunos.length] = 'Fabio';
// alunos[alunos.length] = 'Luana';
// console.log(alunos);
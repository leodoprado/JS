// IIFE -> Immediately invoked function expression

// não tem conflito com variaveis globais
(function(idade, peso, altura) {
    
const sobrenome = 'Prado';
function criaNome(nome) {
    return nome + ' ' + sobrenome;
}

function falaNome() {
    console.log(criaNome('Luiz'));
}

falaNome();
console.log(idade, peso, altura);

})(19, 85, 1.88);
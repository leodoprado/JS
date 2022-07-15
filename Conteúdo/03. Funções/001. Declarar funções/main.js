// Declaração de função (Function hoisting) - 'normal'
// declarações são elevadas ao topo da execução
falaOi();

function falaOi() {
    console.log('Oi')
}

falaOi();

// First-class objects (Objetos de primeira classe)
// a função pode ser tratada como dado
// Function expression
const souUmDado = function() {
    console.log('Sou um dado')
}

souUmDado();

// recebendo parametro como uma função, e executando a função
function executaFuncao(funcao) {
    funcao();
}

// Arrow Function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
}

arrowFunction();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
};
obj.falar();
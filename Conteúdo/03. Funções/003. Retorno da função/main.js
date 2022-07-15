function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);

// ---- //

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    // retornando a função sem executar
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

// ---- //

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

// closure
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(6));
console.log(quadriplica(8));
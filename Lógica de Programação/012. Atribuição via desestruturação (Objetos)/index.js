const pessoa = {
    nome: 'Cauã',
    sobrenome: 'Miranda',
    idade: 17,
    endereco: {
        rua: 'Av dos Homosexual',
        numero: 314
    }
}

// Atribuição via desestruturação
const { nome: n, sobrenome: s, endereco: {rua, numero}} = pessoa;
console.log(n, s, rua, numero);
const pessoa = {
    nome: 'Junior',
    sobrenome: 'Marcos',
    idade: 17,
    endereco: {
        rua: 'Av sla',
        numero: 314
    }
}

// Atribuição via desestruturação
const { nome: n, sobrenome: s, endereco: {rua, numero}} = pessoa;
console.log(n, s, rua, numero);
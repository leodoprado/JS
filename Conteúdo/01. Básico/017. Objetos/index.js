// objeto literal
/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);*/

// criando objetos através de uma function
// function criaPessoa(nome, sobrenome, idade) /*<<parâmetros da função*/ {
    // return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
    // };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25) /*<< argumentos sendo passados para os parâmetros da função*/;
// const pessoa2 = criaPessoa('Maria', 'Carmen', 32) /*<< argumentos sendo passados para os parâmetros da função*/;
// const pessoa3 = criaPessoa('Luiza', 'Cabrito', 43) /*<< argumentos sendo passados para os parâmetros da função*/;
// const pessoa4 = criaPessoa('Jõao', 'Gustavo', 12) /*<< argumentos sendo passados para os parâmetros da função*/;
// const pessoa5 = criaPessoa('Leo', 'Ferreira', 20) /*<< argumentos sendo passados para os parâmetros da função*/;

// console.log(pessoa1.nome, pessoa2.nome);


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
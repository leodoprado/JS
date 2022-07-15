// contexto de escopo léxico 
const nome = 'Leo';

function falaNome() {
    // const nome = 'Otavio';
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome();
}

usaFalaNome();
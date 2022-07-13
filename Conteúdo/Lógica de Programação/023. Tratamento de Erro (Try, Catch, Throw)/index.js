function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        // Lançando o error
        throw new ReferenceError('x e y precisam ser números');
    }
    return x + y;
}

// Capturando e Tratando o error
try {
    console.log(soma(1, 2));
    console.log(soma(1, 'a'))
} catch(err) {
    console.log(err);
    console.log('Alguma coisa mais amigavel para o usuário')
}
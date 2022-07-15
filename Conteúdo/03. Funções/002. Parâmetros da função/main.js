// função sustenta todos os argumentos enviados
function conta(operador, acumulador, ...numeros) { // ... Rest operator
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (oeprador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50);


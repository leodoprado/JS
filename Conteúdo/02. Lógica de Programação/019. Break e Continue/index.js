const numeros = [1,2,3,4,5,6,7,8,9];

for (let i=0; i<numeros.length; i++) {
    let numero = numeros[i];
    
    if (numero === 2) {
        continue;
    }
    else if (numero === 4 || numero === 6) {
        continue;
    }
    else if (numero === 7) {
        break;
    }
    console.log(numero);
}
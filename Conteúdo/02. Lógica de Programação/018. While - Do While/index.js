// laços geralmente utilizado quanto não sabemos quantas condições serão processadas

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// Do While: executa o código e depois verifica a condição
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
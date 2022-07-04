// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso necessariamente de um if antes
// Posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, apenas com if e else

const hora = 15;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}
/*try {
    console.log(a); // Erro
    console.log('Abri um arquivo');
    console.log('Manipulei uma arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch(err) {
    console.log('CATCH: Tratando erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1997 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(err) {
    // Tratar erro
    console.log(err)
} finally {
    console.log('Sempre serei executado se ocorrer erro.')
}

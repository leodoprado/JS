/*
    Primitivos (imutáveis) - string, number, boolean, undefined, 
    null (bigint, symbol) -> (=) são valores copiados, independentes

    Referência (mutável) - Array, object, fucntion -> (=) são valores passados por referência, dependetes
*/

// no caso de dados primitivos, ocorre a cópia dos dados, a não depende de b, apena para copiar o primeiro valor que está sendo passado
/*let a = 'A';
let b = a; // Cópia
console.log(a, b);

a =  'Outra coisa';
console.log(a, b);*/

// no caso de dados por referência, b está linkado por a, apontando para o mesmo valor na memória, afetando assim ambos os valores
let a = [1, 2, 3];
let b = [...a]; // << o valor de b está sendo copiado para a variável a, tornando o valor de b independente
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
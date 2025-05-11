// Exemplo de function expression (pois a ARROW também é uma espécie de function expression)

const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4 ) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(9, 3));


// Arrow function:

const exibeNome = (nome) => nome;
console.log(exibeNome('Ana'));


// Pontos importantes:

// É prática e mais curta, porém NÃO SUBSTITUI as outras formas
// Não fazem uso de HOISTING (pois de certa forma são functions expressions)
// São muito utilizadas em CALLBACK FUNCTIONS









// Ex 1

// function fazSaudacao (nome) {
//     return `Olá, ${nome}. Seja bem vindo(a)!`;
// }
// console.log(fazSaudacao('Ana'));




// Ex 2

// function checaIdade (idade) {
//     if (idade >= 18) {
//         return `No momento, você tem ${idade} anos. É maior de idade!`;
//     } else {
//         return `No momento, você tem ${idade} anos. Ainda não é maior de idade.`;
//     }
// }
// console.log(checaIdade(21))







// Ex 3

// function checaPalindromo (palavra) {
//     const palavraInversa = palavra.split('').reverse().join('');
//     return palavra.toLowerCase() === palavraInversa.toLowerCase();
// }

// console.log(checaPalindromo('Arara'));







// Ex 4

// function comparaValores (a, b, c) {
//     if (a > b && a > c) {
//         return `O número ${a} é o maior.`;
//     } else if (b > a && b > c) {
//         return `O número ${b} é o maior.`;
//     } else if (c > a && c > b) {
//         return `O número ${c} é o maior.`;
//     } else {
//         return 'Numeros iguais';
//     }
// }

// console.log(comparaValores(10, 9, 9))







// Ex 5

const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

console.log(calculaPotencia(1, 5))
const aprovado = true;

if (aprovado === true) {
    console.log('Aprovado');
}


if ('0' == 0) { // Dois iguais
    console.log('Passou na comparação')
} else {
    console.log('Não passou na comparação')
}

if ('0' === 0) { // Três iguais
    console.log('Passou na comparação')
} else {
    console.log('Não passou na comparação')
}




// Existem dois tipos de operadores de comparação, um que foi muito usado anteriormente, o "==" (dois iguais) e o outro é o "===" (TRES iguais).
// Dois iguais: irá comparar apenas o CONTEÚDO BRUTO, os VALORES passados
// TRÊS iguais: também irá comparar os valores, porém, a diferença é que este também irá comparar O TIPO dos valores que são passados



// No exemplo acima, existem duas comparações usando os diferentes operadores de comparação. Na primeira, onde é usado "==" (dois iguais), os valores comparados resultará em TRUE, pois este operador compara apenas valores.
// Já no segundo exemplo, onde é usado "===" (três iguais), a comparação será FALSE, pois este comparador além de comparar os valores, também compara os TIPOS. Ou seja, os valores precisam ser ****ESTRITAMENTE IGUAIS****.


// ------------------------------------------------------------------------------------------


// Ex 1

// const saldo = 5000;
// const deposito = 2000;
// const saque = 1000;
// const operacao = saldo + deposito - saque;
// console.log(operacao);



// Ex 2

// const numero = 9;

// numero % 2 === 0
//     ? console.log('O número é par')
//     : console.log('O número é impar')
// ;



// Ex 3

// const usuarioLogado = true;
// const usuarioPermissao = true;

// if (usuarioLogado && usuarioPermissao) {
//     console.log('Acesso à funcionalidade permitido.')
// } else {
//     console.log('Acesso à funcionalidade negado.')
// }

// OU 

// const logado = true;
// const admin = false;

// const resultado = logado && admin;

// console.log('Administrador logado no sistema:', resultado); 



// Ex 4

// const usuarioLogado = true;
// const usuarioPermissao = false;

// if (usuarioLogado || usuarioPermissao) {
//     console.log('Acesso à funcionalidade permitido.')
// } else {
//     console.log('Acesso à funcionalidade negado.')
// }

// OU 

// const condicao1 = true;
// const condicao2 = false;

// const resultado = condicao1 || condicao2;

// console.log('Resultado do operador OR:', resultado)



// Ex 5

// const idadeUsuario = 21;
// const idadeMinima = 18;

// idadeUsuario >= idadeMinima
//     ? console.log('Apto para comprar o ingresso')
//     : console.log('Não apto para comprar o ingresso')
// ;

//desafio 1

// alert('Boas vindas ao nosso site!');
// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// alert('Erro! Preencha todos os campos.');
// let mensagemDeErro = 'Erro! Preencha todos os campos.';
// alert(mensagemDeErro);
// let nome = prompt('Digite seu nome: ');
// let idade = prompt('Digite sua idade: ');
// if (idade >= 18) {
//     alert('Pode tirar a habilitação!')
// };

//desafio 2

// let dia = prompt('Qual é o dia da semana?');
// if (dia == 'sábado') {
//     alert('Bom fim de semana!');
// } else {
//     if (dia == 'domingo') {
//         alert('Bom fim de semana!');
//     } else {
//         alert('Boa semana!');
//     }
// }

// let dia = prompt('Qual é o dia da semana?');
// if (dia == 'sábado') {
//     alert('Bom fim de semana!');
// } else if (dia == 'domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// };

// let numero = prompt('Digite um número');
// if (numero > 0) {
//     alert('O número digitado é positivo.');
// } else {
//     alert('O número digitado é negativo.');
// }

// let pontos = prompt('Digite sua pontuação: ');
// if (pontos >= 100) {
//     alert('Parabéns! Você venceu.')
// } else {
//     alert('Tente novamente!')
// }

// let saldo = 980;
// alert(`Seu saldo é R$${saldo},00`);

// let nome = prompt('Insira seu nome');
// let sobrenome = prompt('Insira seu sobrenome');
// alert(`Seja muito bem vindo, ${nome} ${sobrenome}!`)

//desafio 3

// let contador = 0;
// while (contador < 10) {
//     contador++;
//     console.log(contador);
// }

// let contador = 10;
// while (contador > 0) {
//     console.log(contador);
//     contador--;
// }

// let num = prompt('Digite um número:');
// while (num >= 0) {
//     console.log(num);
//     num--;
// }

// let num = prompt('Digite um numero:');
// let contador = 0;
// while (num >= contador ) {
//     console.log(contador);
//     contador++;
// }

//desafio 4

// console.log('Seja bem vindo!');

// let nome = 'Lucas';
// console.log('Olá,', nome);

// let nome = 'Lucas';
// alert(`Olá, ${nome}!`);

// let variavel = prompt('Qual linguagem de programação você mais gosta?');
// console.log(variavel);

// let valor1 = 5;
// let valor2 = 15;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é ${resultado}.`);

// let valor1 = 390;
// let valor2 = 150;
// let resutado = valor1 - valor2;
// console.log(`A diferença entre ${valor1} e ${valor2} é ${resutado}.`)

// let idade = prompt('Digite sua idade');
// if (idade >= 18) {
//     console.log('A pessoa é maior de idade');
// } else {
//     console.log('A pessoa é menor de idade');
// }

// let numero = prompt('Digite um número');
// if (numero > 0) {
//     alert(`O número ${numero} é um número positivo.`);
// } else {
//     if (numero == 0) {
//         alert(`O número digitado é ${numero}.`);
//     } else {
//         alert(`O número ${numero} é um número negativo.`);
//     }
// }

// let contador = 0; 
// while (contador < 10) {
//     contador++;
//     console.log(contador);
// }

// let nota = 9;
// let aprovacao = nota >= 7 ? 'Aprovado!' : 'Reprovado.';
// console.log(aprovacao);

// let numero = Math.random();
// console.log(numero);

// let numero = parseInt(Math.random() * 10 + 1);
// console.log(numero);

let numero = parseInt(Math.random() * 1000 + 1);
console.log(numero);







/* ---------------------------- USANDO ESSE ESPAÇO PARA ESCREVER CÓDIGOS DE EXERCÍCIOS TIRADOS POR AÍ ----------------------- */

/*
let cores = ['amarelo', 'azul', 'vermelho', 'verde', 5];
let animais = {
    cavalo: 5,
    tigre: 6,
    bufalo: 7,
};
console.log(cores)

cores.push('preto');
console.log(cores);

cores.pop();
console.log(cores);

console.log(cores.length);

console.log(typeof cores);
console.log(typeof animais);

let corRetirada = cores.shift();
console.log(corRetirada);
console.log(cores);
*/

/* ---------- */

/*function palindromo() {
    var palavra = 'rever';
    var palavraCortada = palavra.split('');
    console.log(palavraCortada);
    var palavraInvertida = palavraCortada.reverse();
    palavraInvertida = palavraInvertida.join('');
    console.log(palavraInvertida);

    if (palavraInvertida == palavra) {
        console.log('A palavra é um palíndromo');
    } else {
        console.log('A palavra não é um palíndromo')
    }
}

palindromo();*/

/*
const palindromo = function () {
    var palavra = 'rever';
    var palavraCortada = palavra.split('');
    console.log(palavraCortada);
    var palavraInvertida = palavraCortada.reverse();
    palavraInvertida = palavraInvertida.join('');
    console.log(palavraInvertida);

    if (palavraInvertida == palavra) {
        console.log('A palavra é um palíndromo');
    } else {
        console.log('A palavra não é um palíndromo')
    }
}

palindromo();

let marcas = ['ford', 'mustang', 'honda', 'yamaha'];
console.log(marcas.join(''));
*/


// const result = parseInt("hello");
// if (Number.isNaN(result)) {
//   console.log("O resultado não é um número.");
// }

// let idade = prompt('Digite sua idade');
// let possuiCarteira = prompt('Possui carteira?');
// if (possuiCarteira == 'sim') {
//     possuiCarteira = true;
// } else {
//     possuiCarteira = false;
// }
// if (idade >= 18 && possuiCarteira) {
//     alert('Apto para dirigir.')
// } else {
//     alert('Não apto para dirigir.')
// }

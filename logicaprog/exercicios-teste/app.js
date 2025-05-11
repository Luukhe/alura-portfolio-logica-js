// let titulo = document.querySelector('h1');
// titulo = titulo.innerHTML = 'Hora do desafio';

// function botaoConsole() {
//     console.log('O botão foi clicado!');
// }

// function botaoAlert() {
//     alert('Eu amo o JS!');
// }

// function botaoPrompt() {
//     let cidade = prompt('Digite o nome de uma cidade do Brasil');
//     alert(`Estive em ${cidade} e lembrei de você!`)
// }

// function botaoSoma() {
//     // let numero1 = Number(prompt('Digite um número'))
//     // let numero2 = Number(prompt('Digite outro número'))
//     let numero1 = parseInt(prompt('Digite outro número'));
//     let numero2 = parseInt(prompt('Digite outro número'));
//     let resultado = (numero1 + numero2);
//     alert(`O resultado da soma é ${resultado}.`);
// }

// function ola() {
//     console.log('Olá, mundo!');
// }
// ola();

// function nome(x) {
//     console.log(`Olá, ${x}!`);
// }
// nome('Lucas');

// function dobro(n) {
//     return n * 2;
// }
// console.log(dobro(14));
// OU assim, armazenando em uma variável (para talvez depois usar o retorno)
// let multi = dobro(15);
// console.log(multi);

// function calcularMedia(x, y, z) {
//     let calculoMedia = (x + y + z) / 3;
//     return calculoMedia;
// }
// let media = calcularMedia(6, 7, 8);
// console.log(media);

// function maiorMenor(x, y) {
//     if (x > y) {
//         console.log(`O número ${x} é maior que o número ${y}.`)           
//     } else {
//         console.log(`O número ${y} é maior que o número ${x}.`)
//     }
// }
// maiorMenor(10, 7)

// FAZENDO AGORA A MESMA FUNÇÃO PORÉM USANDO *******OPERADOR TERNÁRIO*********
// function maiorMenor(x, y) {
//     return x > y ? x : y;
// }
// let maiorNumero = maiorMenor(17, 15);
// console.log(maiorNumero);

// function multiPorSi(x) {
//     let multi = x * x;
//     return multi;
// }
// console.log(multiPorSi(10))
// // OU
// let multiSi = multiPorSi(9);
// console.log(multiSi);


// function calcularImc (peso, altura) {
//     let imc = peso / (altura * altura);
//     return imc.toFixed(2);
// }
// // OU
// let calcularImc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// console.log(calcularImc(86, 1.78));
// // OU
// function calcularImc(peso, altura) {
//     let imc = (peso / (altura * altura)).toFixed(2);
//     imc < 18.5
//         ? console.log(`O IMC de ${imc} é considerado abaixo do peso.`)
//         : imc < 25
//         ? console.log(`O IMC de ${imc} é considerado peso normal.`)
//         : imc < 30
//         ? console.log(`O IMC de ${imc} é considerado sobrepeso.`)
//         : console.log(`O IMC de ${imc} é considerado obesidade`)
// };

// console.log(calcularImc(75, 1.5812));


// function calcularFatorial(n) {
//     let fatorial = 1;
//     while (n > 1) {
//         fatorial = fatorial * n;
//         n--
//     }
//     return fatorial;
// }
// console.log(calcularFatorial(10));

// function conversorDolar(dolar) {
//     let reais = (dolar * 4.80).toFixed(2);
//     console.log(`A conversão de $${dolar} dólares equivale a R$${reais} reais.`);  
// }
// conversorDolar(50);

// function calcularPerimetro(altura, largura) {
//     let perimetro = (altura + largura) * 2;
//     let area = altura * largura;
//     alert(`A área é ${area}m² e o perímetro é de ${perimetro}m.`);
// }
// calcularPerimetro(3, 5);


// calcularPerimetro(5, 10);

// function calcularAreaPerimetro (raio) {
//     let area = Math.PI * (raio * raio);
//     let perimetro = 2 * Math.PI * raio;
//     alert(`A área é ${area} e o perímetro é ${perimetro}`);
// }
// calcularAreaPerimetro(25);

// function calcularTabuada(x) {
//     let contador = 1;
//     let resultado;
//     while (contador <= 10) {
//         resultado = x * contador;
//         console.log(`${x} x ${contador} = ${resultado}`);
//         resultado = 0;
//         contador++;
//     };
// };
// calcularTabuada(); //Também dá para perguntar ao usuário qual número ele quer usando PROMPT, colocando o **PROMPT COMO PARÂMETRO NA CHAMADA DA FUNÇAO** (ideia que eu tive)


let listaGenerica = [];

let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

let listaNomes = ['Lucas', 'Isa', 'Dani'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);
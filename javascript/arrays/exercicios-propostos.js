// ------------------------------------------------ Aula 1 ------------------------------------



// Ex 1
// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.


// const lista = [,,,,,,,,,,] // Lista vazia

// console.log(lista);
// console.log(lista.length);

// lista[1] = 'a'; // Atribuindo valores aos index especificados
// lista[3] = 'b';
// lista[7] = 'c';

// console.log(lista);

// lista[1] = 1; // Trocando valor de um index já adicionado

// console.log(lista);






// Ex 2

// const lista = [1, 2, 3, 4, 5]; // Iniciando um array com 5 elementos

// console.log(lista);

// lista[0] = 'a'; // Sobrescrevendo o primeiro elemento de um array

// console.log(lista);








// Ex 3

// const meuArray = []; // Criando array vazio

// meuArray.push(5, 'a', 9); // Adicionando 3 elementos de uma só vez usando push

// console.log(meuArray);

// meuArray[0] = meuArray[0] * 2; // Substituindo o primeiro valor (índice 0) pelo dobro dobro dele mesmo

// console.log(meuArray);







// Ex 4

// const meuArray = []; // Criando array vazio

// meuArray.push(1, 2, 3); // Adicionado três elementos ao array de uma só vez (assim também funciona, ao invés de usar o push três vezes);

// console.log(meuArray);







// Ex 5

// const clinica = [];

// clinica.push('a');
// clinica.push('b');
// clinica.push('c');

// console.log(clinica);

// clinica.pop();
// clinica.pop();
// clinica.pop();

// console.log(clinica);









// ----------------------------------------------------- Aula 2 --------------------------------------------------------



// Ex 1

// const lista1 = ['a', 'b', 'c'];
// const lista2 = [1, 2, 3];

// function concatenaArray (arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(concatenaArray(lista1, lista2));






// Ex 2

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const parteNumeros = numeros.slice(3, 7);

// console.log(parteNumeros);






// Ex 3

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
// frutas.splice(2, 2, 'Kiwi', 'Pêssego');

// console.log(frutas);







// Ex 4

// const menuPrincipal = ['Strogonoff', 'Tilápia', 'Filé', 'Salmão'];
// const menuDeSobremesas = ['Cheesecake', 'Pudim', 'Sorvete', 'Milkshake'];

// const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

// console.log(menuCompleto);









// Ex 5

















// ----------------------------------------------------------- Aula 3 -----------------------------------------------------




// Ex 1


// const meuArray = [1, 2, 3, 4, 5];

// function imprimeElementos (arr) {
//     for (const numero of arr) {
//         console.log(numero);
//     }
// }

// imprimeElementos(meuArray);





// Ex 2 

// const meuArray = ['a', 'b', 'c', 'd'];

// function imprimeLista (arr) {
//     for (let i = 0; i < meuArray.length; i++) {
//         console.log(`Índice: ${i}, elemento: ${arr[i]}`);
//     }
// }

// imprimeLista(meuArray);








// Ex 3

// const meuArray = [1, 2, 3, 4, 5];

// function somaNumeros (arr) {
//     let soma = 0;
//     for (let numeros of arr) {
//         soma += numeros;
//     }
//     return soma;
// }

// console.log(somaNumeros(meuArray));







// Ex 4 (exercicio copiado)


// const arrMenoresMaiores = [5, 37, 18, 59, 12, -2];

// function imprimeMaiorEMenor(arr) {

//   let maior = 0;
//   let menor = 0;

//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > maior) {
//       maior = arr[i]
//     }
//     if (arr[i] < menor) {
//       menor = arr[i]
//     }
//   }
//   return `o maior número é ${maior} e o menor número é ${menor}`;
// }

// console.log(imprimeMaiorEMenor(arrMenoresMaiores));










// Ex 5


// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// function mostraNumerosPares (arr) {
//     for (let numero of arr) {
//         if (numero % 2 === 0) {
//             console.log(numero);
//         }
//     }
// }

// mostraNumerosPares (numeros);








// Ex 6

// const notas = [5, 8, 7, 6, 9, 3, 7, 6];

// function calculaMedia () {
//     let media = 0;
//     for (let i = 0; i < notas.length; i++) {
//         media = media + notas[i];
//     }
//     return media / notas.length;
// }

// console.log(calculaMedia());



// const notas = [5, 8, 7, 6, 9, 3, 7, 6];
// let soma = 0;

// for (let nota of notas) {
//     soma = soma + nota
// }

// const media = soma / notas.length;

// console.log(media);














// ------------------------------------------------------- Aula 4 ----------------------------------------------





// Ex 1

// const meuArray = [1, 2, 3, 4, 5];

// meuArray.forEach((elemento, indice) => {
//     console.log(`O elemento é ${elemento}, e seu índice é ${indice}`);
// })




// Ex 2

// const myArray = [1, 2, 3, 4, 5];

// function executaOperacaoEmArray (arr, callback) {
//     return arr.map(callback);
// }

// function somaNumeros (n) {
//     return n * 5;
// }

// const resultado = executaOperacaoEmArray(myArray, somaNumeros);

// console.log(resultado);






// Ex 3

// const meuArray = [1, 2, 3, 4, 5];

// function analisaNumero (numero, arr) {
//     if (arr.includes(numero)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (numero === arr[i]) {
//                 return `O número ${numero} tem o índice ${i}.`;
//             }
//         }
//     } else {
//         return -1;
//     }
// }

// console.log(analisaNumero(4, meuArray));


// const meuArray = [1, 2, 3, 4, 5]; 
// const numeroProcurado = 5;
// let posicao = -1;


// function procuraNumero (numero, arr) {
//     let resposta;
//     for (let i = 0; i < arr.length; i++) {
//         if (numero === arr[i]) {
//             posicao = i;
//             resposta = `O índice do número ${numero} é ${posicao}.`;
//             break;
//         } else {
//             resposta = posicao;
//         }
//     }
    
//     return resposta;
// }

// const result = procuraNumero(numeroProcurado, meuArray);

// console.log(result);


// Fazendo a mesma coisa só que sem usar função

// const numeros = [10, 20, 30, 40, 50];
// const numeroProcurado = 30;
// let posicao = -1;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] === numeroProcurado) {
//     posicao = i;
//     break;
//   }
// }

// console.log(`Posição do número ${numeroProcurado}: ${posicao}`);





// Ex 4


// const nomesTurmaA = [
//     'João Silva',
//     'Maria Santos',
//     'Pedro Almeida'
// ];
  
//   const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
// ];

// const turmaUnificada = nomesTurmaA.concat(nomesTurmaB);

// console.log(turmaUnificada);

// const alunoAchado = turmaUnificada.find((n) => {
//     return n === 'Lucas Fernandes';
// })

// const alunoe = turmaUnificada.find((n) => {
//     return n.startsWith('P');
// });

// console.log(alunoe);


// console.log(alunoAchado);









// Ex 5


// const numeros = [1, 2, 3, 4, 5];

// // numeros.forEach((n) => console.log(n * 3));
// numeros.forEach((n) => {
//     const result = n * 3;
//     console.log(result); // LEMBRETE: Usa-se LOG pois forEach NÃO TEM RETORNO!
    
// })

// const numeroEscolhido = 5;
// // const indice = numeros.findIndex((n) => n === numeroEscolhido);
// const indice = numeros.findIndex((n) => {
//     return n === numeroEscolhido;
// })


// console.log(indice);


// if (indice !== -1) {
//     console.log(`O índice do número escolhido ${numeroEscolhido} é: ${indice}.`);
// } else {
//     console.log(`O índice do número escolhido ${numeroEscolhido} é: ${indice}.`);
// }










// -------------------------------------------------- AULA 5 ----------------------------------------------------------------------





// Ex 1

// const numeros = [1, 2, 3, 4, 5];
// const letras = ['a', 'b', 'c', 'd', 'e'];

// function juntaListas (...arr) {
//     return [].concat(...arr);
// }; 

// console.log(juntaListas(numeros, letras));






// Ex 2

// const valores = [1, 2, 3, 4, 5];

// const somaDosValores = valores.reduce((accumu, valor) => accumu + valor, 0);
// console.log(somaDosValores);

// OU

// const valores = [1, 2, 3, 4, 5];

// function somaValores (arr) {
//     const soma = arr.reduce((accumu, valor) => accumu + valor, 0);
//     return soma;
// }

// console.log(somaValores(valores));






// Ex 3

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// function consertaListas (listaUm, listaDois) {
//     const novaLista = [...listaUm, ...listaDois];
//     // const novaListaAtualizada = [...new Set(novaLista)]; // Método usando Set para retirar duplicatas e spread operator para transformar em Array logo em seguida
//     const novaListaAtualizada = Array.from(new Set(novaLista)); // Método usando Set para retirar duplicatas e Array.from para transformar Set em Array em seguida
//     return novaListaAtualizada;
// }

// console.log(consertaListas(coresLista1, coresLista2));






// Ex 4

// const numeros = [1, 2, 5, 7, 8, 10, 12, 13, 15, 17, 19, 20, 21];

// function identificaPares (arr) {
//     const pares = arr.filter((n) => n % 2 === 0);
//     return pares;
// }

// console.log(identificaPares(numeros));






// Ex 5

// const numeros = [29, 31, 82, 95, 38, 5, 9, 26, 27, 12, 35, 36, 8, 21, 23, 63];

// function filtraNumeros (arr) {
//     const filtered = arr.filter((n) => n % 3 === 0 && n > 5);
//     return filtered;
// }

// console.log(filtraNumeros(numeros));








// Ex 6


// const numeros = [1, 8, 5, 5, 2, 4, 10];

// function somaNumeros (arr) {
//     const soma = arr.reduce((accumu, n) => accumu + n, 0);
//     return soma;
// }

// console.log(somaNumeros(numeros));

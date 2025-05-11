const notas = [10, 9.5, 8, 7, 6];


const notasAtualizadas = notas.map((nota) => nota = nota + 1 > 10 ? nota = 10 : nota + 1);
console.log(notasAtualizadas);



// const notasAtualizadas = notas.map((nota) => {
//     nota = nota + 1;
//     if (nota > 10) {
//         return nota = 10;
//     } else {
//         return nota = nota + 1
//     }
// })

// console.log(notasAtualizadas);



// const notasAtualizadas = notas.map(function (nota) {
//     nota = nota + 1;
//     if (nota > 10) {
//         return nota = 10;
//     } else {
//         return nota = nota + 1
//     }
// })

// console.log(notasAtualizadas);





// O map funciona muito parecidamente com o forEach, a diferença é que o map RETORNA o que é feito


// OBS: Quando a função de callback é passada ao parâmetro do map, o PRIMEIRO PARÂMETRO DA FUNÇÃO CALLBACK É REFERENTE AO ELEMENTO DO ARRAY, E O SEGUNDO PARÂMETRO DA FUNÇÃO CALLBACK É REFERENTE AO ÍNDICE!!!!









// const myArrow = (arr) => {
//     let soma = 0
//     for (const numero of arr) {
//         soma = soma + numero
//     }
//     return soma;
// }

// console.log(myArrow(notas));



// const myArrow = (a, b) => {
//     return a + b
// }

// console.log(myArrow(3, 5));




// const nomeDaFuncao = (a, b, c) => {
//     // corpo da função
// }




// Arrow func simplificada com 1 return apenas

// const myArrow = (a, b) => a + b;
// console.log(myArrow(5, 5));



// const myArrow = (a, b) => a * b;
// console.log(myArrow(3, 5));



// const myArrow = n => n * 5;
// console.log((myArrow(5)));



// const myArrow = n => n * 5 > 20 ? "Maior" : "Menor";
// console.log(myArrow(5));

// const myArrow = (n) => {
//     if (n * 5 > 20) {
//         return "Maior"
//     } else {
//         return "Menor"
//     }
// }

// console.log(myArrow(5));



// const myArrow = (n) => {
//     let resposta;
//     n * 5 > 20
//     ? 'Maior'
//     : 'Menor'
//     return resposta;
// }

// console.log(myArrow(5));



// const myArrow = (a, b) => a * b > 10 ? 'Maior' : 'Menor';
// console.log(myArrow(5, 3));


// const arrayNums = [1, 2, 3, 4];

// const result = arrayNums.map((numero) =>  numero * 10);

// console.log(result);

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


// Utilizando a função com return   ***** NO REDUCE *****

// function calculaMedia (listaDeNotas) { 
//     const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
//         return acumulador + nota;
//     }, 0);

//     const media = somaDasNotas / listaDeNotas.length;

//     return media;
// }


// Utilizando arrow function simplificada ********** NO REDUCE ***********

function calculaMedia (listaDeNotas) {        // Parâmetro 1 (FUNÇÃO CALLBACK)       // Parâmetro 2 (NÚMERO ZERO)
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}



console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));



// *********************************** IMPORTANTE SE ATENTAR À MANEIRA MAIS ATÍPICA DE SE UTILIZAR O REDUCE COMPARADO ÀS OUTRAS ****************************

// ------------------------------------------- OBSERVAÇÕES -----------------------------------------


// ----- UTILIZANDO REDUCE:

// A função reduce tem como objetivo *** SOMAR *** todos os elementos de um array desejado e ** REDUZI-LA A UM VALOR **.

// ***** A FUNÇÃO REDUCE PEDE TAMBÉM, ALÉM DA FUNÇÃO CALLBACK COMO PRIMEIRO PARÂMETRO, UM SEGUNDO PARÂMETRO, QUE PRECISA SER 0 (ZERO!!!!)



// NA FUNÇÃO CALLBACK DO REDUCE:

// Para utilizar o reduce, a **** FUNÇÃO QUE FOR CALLBACK **** precisará de ** DOIS PARÂMETROS **.
// *** SENDO O PRIMEIRO PARÂMETRO: o elemento que irá ACUMULAR A SOMA DOS ELEMENTOS, como normalmente é feito, que precisamos criar uma variável separada para acumular a soma de números quando fazemos uma iteração, porém, sua criação é feita no PRIMEIRO PARÂMETRO.
// *** APENAS NO SEGUNDO PARÂMETRO ** que O ELEMENTO EM SI DE FATO É REFERENCIADO.


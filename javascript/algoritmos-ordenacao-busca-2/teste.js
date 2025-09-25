const {edFolha, edGalho} = require('./arrays');


// Tentativa 1 solo
// function selection (arr, inicio) {
//     let precoMenor = arr[inicio].preco;
//     let indiceMenor = inicio;

//     for (let i = inicio; i < arr.length; i++) {
//         let precoAtual = arr[i].preco;
//         if (precoAtual < precoMenor) {
//             indiceMenor = i;
//         }
//     }

//     return indiceMenor;
// };


// Tentativa 2 solo
function selection (arr, inicio) {
    let indiceMenor = inicio;
    for (let i = inicio; i < arr.length; i++) {
        if (arr[i].preco < arr[indiceMenor].preco) {
            indiceMenor = i;
        }
    };

    return indiceMenor;
};


function ordenarElementos (arr) {
    for (let i = 0; i < arr.length; i++) {
        let menorIndice = selection(arr, i);

        let atual = arr[i];
        let menorPreco = arr[menorIndice];

        arr[i] = menorPreco;
        arr[menorIndice] = atual;
    };

    return arr;
};


module.exports = ordenarElementos;
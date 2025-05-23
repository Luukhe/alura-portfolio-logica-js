const livros = require('./lista-livros');


// O algorítmo de ordenação **INSERTION SORT** trabalha de uma maneira que, ao longo, vai **INSERINDO OS ELEMENTOS NA POSIÇÃO CORRETA COM BASE NO ELEMENTO ANTERIOR** 


// Novamente, criando uma função para inserir o algoritmo a ser escrito para que futuramente, caso haja a necessidade, poder-se usar a mesma função em outra ocasião, pois inserindo o código em uma função, poderá se tornar EXPORTÁVEL, evitando assim a repetição de código em outras partes do "projeto" e facilitando para usar em outras partes.
// ** NOTA: O algoritmo também PODE incluir partes de OUTRAS funções que **TAMBÉM FORAM IMPORTADAS** para serem usadas em outras partes do código, como na função abaixo, utilizadas para COMPLEMENTAR o algoritmo a ser criado

function insertionSort (lista) {
    for (atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAtual = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise - 1] = itemAtual;
            lista[analise] = itemAnterior;
        }
    }

    console.log(lista);
};


insertionSort(livros);
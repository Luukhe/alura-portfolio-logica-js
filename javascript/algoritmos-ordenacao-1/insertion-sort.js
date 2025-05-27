const livros = require('./lista-livros');


// Importando a função que faz a troca dos elementos para ordená-los
const trocaElementos = require('./troca');


// O algorítmo de ordenação **INSERTION SORT** trabalha de uma maneira que, ao longo, vai **INSERINDO OS ELEMENTOS NA POSIÇÃO CORRETA COM BASE NO ELEMENTO ANTERIOR** 


// Novamente, criando uma função (insertionSort) para inserir o algoritmo a ser escrito para que futuramente, caso haja a necessidade, poder-se usar a mesma função em outra ocasião, pois inserindo o código em uma função, poderá se tornar EXPORTÁVEL, evitando assim a repetição de código em outras partes do "projeto" e facilitando para usar em outras partes.
// ** NOTA: O algoritmo também PODE incluir partes de OUTRAS funções que **TAMBÉM FORAM IMPORTADAS** para serem usadas em outras partes do código, como na função abaixo, utilizadas para COMPLEMENTAR o algoritmo a ser criado


// ************* IMPORTANTE:
// ************* O grande "pulo do gato" para entender bem como o insertionSort funciona é, além de, obviamente, entender como as variáveis se comportam e a função em si age como um todo, entender:
// ** O PORQUÊ DO USO DO WHILE**
// ** O PORQUÊ DA CRIAÇÃO DA VARIÁVEL "ANALISE" (AO INVÉS DE APENAS USAR A VARIÁVEL INCREMENTADORA "ATUAL")**
// ** COMO A VARIÁVEL "ANALISE" SE COMPORTA E FUNCIONA COM O DECREMENTO DENTRO DO WHILE**.

function insertionSort (lista) {
    for (atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

            // Trocando o código abaixo pela função, pois este mesmo código foi "modularizado" (escrito em uma função em um arquivo próprio) para a função abaixo, usando assim funções importadas de outros arquivos

            // let itemAtual = lista[analise];
            // let itemAnterior = lista[analise - 1];

            // lista[analise - 1] = itemAtual;
            // lista[analise] = itemAnterior;

            trocaElementos(lista, analise);

            analise --;
        }
    }

    console.log(lista);
};


insertionSort(livros);
// Importando as duas listas de uma vez só, usando DESTRUCTURING (desestruturação)
const {edFolha, edGalho} = require('./arrays-aula-1');
// const ordenarElementos = require('./teste');



// function juntaListas (lista1, lista2) {
//     const listasJuntas = lista1.concat(lista2);
//     const listasJuntasOrdenadas = ordenarElementos(listasJuntas);
//     return listasJuntasOrdenadas;
// }

// console.log(juntaListas(edFolha, edGalho));



function juntaListas (lista1, lista2) {
    let listaFinal = [];
    let posicaoLista1 = 0;
    let posicaoLista2 = 0;
    let posicaoListaAtualizada = 0;

    // NOTA: Importante se atentar ***ONDE SÃO COLOCADOS*** os incrementos das listas 1 e 2, pois se colocados fora do if/else (mas ainda dentro do while, próximo ao incremento da lista final), ocorrerá um resultado indesejado, pois assim, independente de qual condição (if/else) seja verdadeira no momento do loop, tanto uma quanto a outra serão incrementadas (fazendo com que a LISTA DA CONDIÇÃO FALSA *PULE* o elemento iterado, logo, ele não será mais comparado e não entrará na lista final), quando na verdade seria para *APENAS PARA A VARIÁVEL DA CONDIÇÃO CORRESPONDENTE À LISTA* (posicaoLista1/posicaoLista2) ser incrementada.
    while (posicaoLista1 < lista1.length && posicaoLista2 < lista2.length) {
        if (lista1[posicaoLista1].preco < lista2[posicaoLista2].preco) {
            listaFinal[posicaoListaAtualizada] = lista1[posicaoLista1];
            posicaoLista1++;
            
        } else {
            listaFinal[posicaoListaAtualizada] = lista2[posicaoLista2];
            posicaoLista2++;
        }
        
        // Incrementa a posição da LISTA FINAL, assim como, consequentemente, o índice do elemento adicionado ao array na iteração
        posicaoListaAtualizada++;
    };

    while (posicaoLista1 < lista1.length) {
        listaFinal[posicaoListaAtualizada] = lista1[posicaoLista1];
        posicaoLista1++;
        posicaoListaAtualizada++
    };

    while (posicaoLista2 < lista1.length) {
        listaFinal[posicaoListaAtualizada] = lista1[posicaoLista2];
        posicaoLista2++;
        posicaoListaAtualizada++
    };

    return listaFinal;
};

console.log(juntaListas(edFolha, edGalho));

// Passo 1: Dividir
// Passo 2: Ordenar

// O intuito do *MERGE SORT* é ir sempre, RECURSSIVAMENTE, DIVIDINDO UM ARRAY EM DOIS, até partes bem menores (de 1 ou 2 elementos) para que, então, possa ser feita a COMPARAÇÃO entre eles e então possam ser ORDENADOS, colocando-os em uma NOVA LISTA ORDENADA

// O processo é repetido diversas vezes até o array ser COMPLETAMENTE *DESMONTADO*

// A seguir, entra um algoritmo para COMPARAR e ORDENAR a uma nova lista

// Na recurssão, ou seja, no momento em que a função é passada NOVAMENTE dentro da mesma função, o PARÂMETRO PASSADO para a função no momento da recurssão é o próprio ARRAY "FATIADO"/DIVIDIDO PELO SLICE, fazendo assim com que a recurssão seja criada (a função seja chamada novamente) sendo sempre chamada com o array fatiado pela metade

// ** Se atentando à CONDIÇÃO: o que permite a recurssão acontecer sempre e dividir o array em pedaços menores é a CONDIÇÃO imposta na própria função

const listaLivros = require('./array-aula-2');



function mergeSort (array) {

    // **MÉTODO DE RECURSSÃO** para dividir o array em DOIS (inicio ao meio, meio ao fim) até as menores quantidades possíveis, usando o **MÉTODO SLICE**
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    };

    return array;

};


function ordena (lista1, lista2) {
    let posicaoLista1 = 0;
    let posicaoLista2 = 0;
    const listaFinal = [];

    while (posicaoLista1 < lista1.length && posicaoLista2 < lista2.length) {

        if (lista1[posicaoLista1].preco < lista2[posicaoLista2].preco) {
            listaFinal.push(lista1[posicaoLista1]);

            posicaoLista1++;
        } else {
            listaFinal.push(lista2[posicaoLista2]);

            posicaoLista2++;
        };

    };

    // while (posicaoLista1 < lista1.length) {
    //     listaFinal.push(lista1[posicaoLista1])
    //     posicaoLista1++;
    // };

    // while (posicaoLista2 < lista2.length) {
    //     listaFinal.push(lista2[posicaoLista2])
    //     posicaoLista2++;
    // };

    // return listaFinal;



    // Maneira que substitui os whiles acima, que usa operador ternário e concat para verificar se caso em alguma lista sobrar algum elemento, concatenar à lista final

    // Ao invés dos elementos que sobraram e não entraram no array final serem adicionados um a um, como é feito dentro do modo que utiliza o while, usa-se o SLICE para FATIAR a parte inteira não adicionada, transformando essa parte em um ARRAY (pois o slice retorna um array), podendo então essa parte ser CONCATENADA/ADICIONADA ao array final

    // A verificação (feita pelos operadores ternários) e a parte dos elementos que sobraram (fatiados pelo SLICE) são passadas diretamente dentro do parâmetro do concat

    return listaFinal.concat(posicaoLista1 < lista1.length
        ? lista1.slice(posicaoLista1)
        : lista2.slice(posicaoLista2)
    )
};

console.log(mergeSort(listaLivros));












// Teste 1: Meu jeito de dividir as duas listas usando while
// function mergeSort (array) {
//     let posicaoLista1 = 0;
//     let posicaoLista2 = 0;
//     let contador = 0;
//     let lista1 = [];
//     let lista2 = [];
//     const metadeLista = Math.floor(array.length / 2);

//     while (contador < metadeLista) {
//         lista1[posicaoLista1] = array[contador];

//         posicaoLista1++;
//         contador++;
//     };

//     console.log(lista1);
    
//     while (contador < array.length) {
//         lista2[posicaoLista2] = array[contador];

//         posicaoLista2++;
//         contador++;
//     };

//     console.log(lista2);
    
// };


// mergeSort(listaLivros);





// Teste 2
// function mergeSort (array) {
//     let contador = 0;
//     let posicaoLista1 = 0;
//     let posicaoLista2 = 0;
//     let lista1 = [];
//     let lista2 = [];
//     const metade = Math.floor(array.length / 2);
//     while (contador < array.length) {
//         if (contador < metade) {
//             lista1[posicaoLista1] = array[contador];
//             posicaoLista1++;
//         } else {
//             lista2[posicaoLista2] = array[contador];
//             posicaoLista2++;
//         };

//         contador++;
//     };

//     console.log(lista1);
//     console.log(lista2);
// };

// mergeSort(listaLivros)



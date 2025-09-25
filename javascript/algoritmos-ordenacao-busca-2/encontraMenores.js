const listaLivros = require('./array-aula-3');


// A função tem a finalidade de encontrar a quantidade de objetos/elementos, A PARTIR DE UM ELEMENTO QUE SERÁ USADO COOM UM PIVOT, que são menores (em preço, como passado na função) do que o objeto passado no parâmetro da função, que será o PIVOT

// Tendo encontrado a quantidade de objetos, o objeto/elemento usado como PIVOT será TROCADO de lugar para a POSIÇÃO DA QUANTIDADE DE OBJETOS ENCONTRADOS
// Exemplo: se por exemplo existem 5 objetos menores que o objeto pivot, quer dizer que, se ordenarmos os menores *A PARTIR* do pivot, o objeto pivot seria o maior entre eles, ocupando então a "última posição" da ordenação, pois todos os outros objetos seriam menores que o pivot

function encontraMenores (array, pivot) {
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (pivot.preco > array[i].preco) {
            contador++;
        };
    };

    trocaLugar(array, array.indexOf(pivot), contador);

    return array;
};

// Função que troca o pivot escolhido com o objeto que está na posição do número de elementos menores que o pivot
function trocaLugar (array, de, para) {
    const elemento1 = array[de];
    const elemento2 = array[para];

    array[para] = elemento1;
    array[de] = elemento2;
};



function divideNoPivot (array) {
    // Determina que o pivot será o elemento na metade do array
    let pivot = array[Math.floor(array.length / 2)];
    let valoresMenores = 0;

    // Encontra a quantidade de objetos/elementos menores que o pivot, e TROCA o **PIVOT** de lugar com o elemento que possui o index da quantidade de menores
    encontraMenores(array, pivot);
   
    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];

        if (atual.preco < pivot.preco && atual !== pivot) {
            // Troca o elemento que está na posição ATUAL (analisando) com o ELEMENTO que está no valor do contador de valores menores (valoresMenores)
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        };
    };

    return array;
};


// console.log(listaLivros[2].preco);

// console.log(encontraMenores(listaLivros, listaLivros[2]));

// console.log(divideNoPivot(listaLivros));



module.exports = trocaLugar;
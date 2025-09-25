const listaLivros = require('./array-aula-3');
const trocaLugar = require('./encontraMenores');




function quickSort (array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);

        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        };

        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        };
    };
    
    return array;
};

function particiona (array, esquerda, direita) {
    let pivot = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {

        // Ambos os while irão percorrer o array até que a condição seja falsa. No caso:
        // Quando o contador da esquerda achar um objeto com preço MAIOR do que o PIVOT
        // Quando o contador da direita achar um objeto com preço MENOR do que o PIVOT
        while (array[atualEsquerda].preco < pivot.preco) {
            atualEsquerda++;
        };

        while (array[atualDireita].preco > pivot.preco) {
            atualDireita--;
        };

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        };

    };
    
    return atualEsquerda;
};



const arrayOrdenado = quickSort(listaLivros, 0, listaLivros.length - 1);

// console.log(arrayOrdenado);


module.exports = arrayOrdenado;

// OBS: Na aula 04, sobre busca binária, foi usado o mesmo array, já ordenado, porém em um arquivo externo diferente. Ao invés de procurar e baixar o arquivo do array ordenado para usar na aula seguinte, achei mais fácil (e mais legal) apenas atribuir o array ordenado aqui a uma variável e exportá-lo para ser usado no arquivo da aula seguinte.





// OBSERVAÇÕES:

// Quando os ponteiros chagarem a se cruzar, é porque a verificação para aquele pivô já foi feita
// O cruzamento é o sinal de que as duas partes do array estão agora separadas, e o while principal pode terminar. A partir desse ponto, o algoritmo Quick Sort entra na fase recursiva, chamando a si mesmo para ordenar as subseções que agora estão devidamente particionadas.

// O ponteiro da esquerda será maior quando estiver no final da iteração



// ******* IMPORTANTE: Quando a primeira partição é feita, a que gera o valor para "indiceAtual", **** AS DUAS FUNÇÕES DE RECURSÃO SÃO CHAMADAS E RECEBEM O VALOR DE ÍNDICE ATUAL EM SEUS RESPECTIVOS PARÂMETROS ****, porém, pela ordem da **STACK PILE**, a recursão do subarray da ESQUERDA é feito primeiro.
// Logo, quando toda a recursão é feita para a parte da esquerda dos subarrays e este lado está ordenado, começa então a parte da DIREITA do subarray, que começará no seu lado esquerdo com o valor recebido anteriormente de **INDICEATUAL**.


// ******* SE ATENTAR: A cada vez que uma partição é feita, sempre(?) cria-se subarrays **** PARA A ESQUERDA E PARA A DIREITA ****, da mesma forma que foi criado na primeira iteração. (não confundir, pois, não é porque na primeira iteração foram criados array para os dois lados, que nas próximas não serão criados).
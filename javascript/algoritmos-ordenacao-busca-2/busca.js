const listaLivros = require('./quickSort');
// console.log(listaLivros);
// console.log('Elemento do meio:', listaLivros[Math.floor(listaLivros.length / 2)]);
// console.log('Indice do ultimo elemento:', listaLivros.length - 1);




function busca(array, low, high, valorBuscado) {
    const meio = Math.floor((low + high) / 2);
    console.log('low:', low, ':', array[low] ,' high:', high);
    

    // Condição que criei para o caso de quando um valor buscado seja um número inexistente maior do que qualquer um da lista ou menor do que o mais barato do array, pois, no caso, sem a condição, gera um stack overflow
    // if (meio >= array.length - 1 || meio < 1) {
    //     return "Não encontrado.";
    // };


    // Condição normal imposta na aula
    if (low > high) {
        return -1;
    };

    if (valorBuscado === array[meio].preco) {
        return meio;
    };

    if (valorBuscado < array[meio].preco) {
        return busca(array, 0, meio - 1, valorBuscado);
    };

    if (valorBuscado > array[meio].preco) {
        return busca(array, meio + 1, high, valorBuscado);
    };
};


console.log(busca(listaLivros, 0, listaLivros.length - 1, 35));

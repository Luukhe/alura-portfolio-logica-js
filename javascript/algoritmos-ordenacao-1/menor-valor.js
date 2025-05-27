const livros = require('./lista-livros');



// Função destinada a retornar o **INDEX** do objeto que possui o MENOR PREÇO (como diz explicitamente no nome da mesma).
// Obtendo o index do objeto que possui o menor preço, será possível, no arquivo "selecion-sort", REORDENAR o array
function menorValor (listaProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < listaProdutos.length; atual++) {
        if (listaProdutos[atual].preco < listaProdutos[maisBarato].preco) {
            maisBarato = atual;
        };
    };

    return maisBarato;

};




// ************** FAZENDO COM QUE A FUNÇÃO SEJA ***EXPORTÁVEL*** PARA QUE SEJA USADA EM OUTRO LUGAR DO CÓDIGO 
module.exports = menorValor;



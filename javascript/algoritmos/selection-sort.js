const livros = require('./lista-livros');


// ********** Importando a função que é "EXPORTÁVEL", do arquivo "menor-valor", para que possa ser usada neste arquivo.
// OBS: Sim, a função no outro arquivo possui o mesmo nome da variável a que ela foi atribuída (abaixo).
const menorValor = require('./menor-valor');


// O "for", a cada iteração, irá usa a FUNÇÃO EXPORTADA que busca o ÍNDEX do elemento com o MENOR PREÇO.
// A cada iteração feita pelo for, um novo ÍNDEX de um elemento é buscado dentro do array.
// ***NOTA: A cada iteração, a busca será feita por um elemento diferente (O PRÓXIMO ELEMENTO), fazendo assim com que o elemento anterior que já foi ordenado não seja incluído novamente na próxima iteração
// Ao final do bloco de código do "for", o elemento atual da iteração e o elemento de menor valor são TROCADOS de posição para que sejam devidamente ordenados

// ***** LOGO: O laço irá, a cada iteração, capturar o ÍNDICE do elemento com MENOR PREÇO dentro do Array (**através da função importada**) e, então, o elemento com menor preço será TROCADO DE POSIÇÃO com o elemento ATUAL da iteração. Tendo feito isso, na próxima iteração, o loop começará do PRÓXIMO ELEMENTO, fazendo com que o elemento anterior (de menor preço que o atual a ser iterado) não "participe" da iteração, tendo sua posição garantida como menor elemento e, como foi trocado de posição com o elemento iterado, o elemento iterado ainda poderá ser ordenado. Sendo assim, a cada iteração, começando do primeiro elemento, um elemento com o menor preço entre os elementos "disponíveis" é trocado com o elemento da posição atual, fazendo assim com que obtenhamos uma ***LISTA ORDENADA***
for (let atual = 0; atual < livros.length; atual++) {
    const menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
};

console.log(livros);


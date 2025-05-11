const estudantes = require('./estudantes.json');


// Ordenando a lista de estudantes pela PROPRIEDADE (que no caso, na chamada da função, a propriedade "nome" é a utilizada)
function ordena (lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1
        };

        if (a[propriedade] > b[propriedade]) {
            return 1
        };

        return 0;
    })
};

const listaOrdenada = ordena(estudantes, 'nome');
console.log(listaOrdenada);










// Se o parâmetro funcaoDeComparacao for fornecido, o array será ordenado de acordo com o valor de retorno da funcaoDeComparacao. Considerando que a e b são dois elementos sendo comparados, então:







// Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.

// Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos. Nota: O padrão ECMAscript não garante este comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.

// Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.

// funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos a e b como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.





// ------------------------------------- Outro exemplo, tirado dos exercícios ----------------------------------------------



const animais = [
    {id: 1, nome: 'Coruja', especie: 'Ave', idade: 3},
    {id: 4, nome: 'Papagaio', especie: 'Ave', idade: 2},
    {id: 3, nome: 'Gato', especie: 'Mamífero', idade: 4},
    {id: 2, nome: 'Tartaruga', especie: 'Réptil', idade: 6},
];


function ordenarAnimais (lista, ordemComparacao) {
    return lista.sort(ordemComparacao);
};

function comparaOrdemCrescente (a, b) {
    // ********** IMPORTANTE: ***QUANDO A COMPARAÇÃO É FEITA COM ****NÚMEROS****, essa abaixo é uma forma "resumida" de fazer a ordenação que TAMBÉM FUNCIONA.
    // return a.idade - b.idade;

    // ******* IMPORTANTE: O MÉTODO SIMPLIFICADO ACIMA NÃO FUNCIONA PARA STRINGS, APENAS PARA ORDENAÇÃO DE NÚMEROS. Para ordenar **STRINGS** APENAS ESSE MÉTODO "MAIS LONGO" FUNCIONA.
    if (a.idade < b.idade) {
        return -1;
    }

    if (a.idade > b.idade) {
        return 1;
    }

    return 0;
} 

// *****NOTA: Na ordem decrescente, apenas inverti (comparado ao exemplo crescente) os retornos de "1" e "-1", podendo também ter apenas invertido a ordem de A e B
function comparaOrdemDecrescente (a, b) {
    // return b.idade - a.idade

    if (a.idade < b.idade) {
        return 1;
    }

    if (a.idade > b.idade) {
        return -1;
    }

    return 0;
}


const resultadoCrescente = ordenarAnimais(animais, comparaOrdemCrescente);
console.log(resultadoCrescente);


const resultadoDecrescente = ordenarAnimais(animais, comparaOrdemDecrescente);
console.log(resultadoDecrescente);








// RESUMO: O método sort **ITERA** sob o array em **PARES** (a, b) e faz uma comparação entre eles a partir do **VALOR UNICODE**, ou no caso de uma comparação numérica, a partir da SUBTRAÇÃO ENTRE ELES.

// *** ORDENANDO STRINGS: Com arrays **DE STRINGS** onde os elementos são acessáveis diretamente (onde no caso os elementos NÃO são objetos), usar o método sort sem nenhum parâmetro, puramente, **IRÁ ORDENAR NORMALMENTE SEM A NECESSIDADE DE PARÂMETROS**
const letras = ['escada', 'bola', 'dança', 'carro', 'animal'];
console.log(letras);
console.log(letras.sort());



// Porém, para **ORDENAR OBJETOS A PARTIR DE SUAS PROPRIEDADES STRINGS** é necessário usar esse método, pois o sort "puro" seria aplicado apenas diretamente aos objetos, que podem conter diversas propriedades. Então, fazendo deste jeito, podemos especificar **POR QUAL PROPRIEDADE QUEREMOS ORDENAR OS OBJETOS**
// ***OBS: Este método também funciona para ordenar números, ou ordenar objetos POR números (propriedades numéricas)
const objExemplo = [
    {id: 2, palavra: 'mouse'},
    {id: 3, palavra: 'teclado'},
    {id: 1, palavra: 'botão'},
    {id: 4, palavra: 'amplificador'}
];

objExemplo.sort((a, b) => {
    if (a.palavra < b.palavra) {
        return -1;
    }

    if (a.palavra > b.palavra) {
        return 1;
    }

    return 0;
});

console.log(objExemplo);






// Para ORDENAR ***VALORES NUMÉRICOS, esta é uma forma muito mais simplificada.
// OBS: O método do exemplo acima TAMBÉM FUNCIONA para ordenação numérica
objExemplo.sort((a, b) => a.id - b.id);
console.log(objExemplo);
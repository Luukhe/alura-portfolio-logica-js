const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];


const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);


// ---------------------- OBSERVAÇÕES -----------------------




// O método filter irá FILTRAR elementos OU NÃO, BASEADO EM VERDADEIRO OU FALSO. Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no novo array, e quando ela retorna falso, ou false, o elemento é descartado.

// ******* O RETORNO do filter será ****UM ARRAY COM QUALQUER ELEMENTO DENTRO DO ARRAY QUE SATISFAÇA A CONDIÇÃO DADA**** 

// O filter também é um método callback

// O filter, assim COMO OUTROS (na minha opinião até agora) é um método que fará uma AVALIAÇÃO de TRUE OU FALSE com a informação/expressão passada, que é quando queremos obter algum valor baseado em uma COMPARAÇÃO.
// *** ATÉ O PRESENTE MOMENTO, NA MINHA OPINIÃO, TRABALHA SIMILAR A MÉTODOS COMO ****FIND E FINDINDEX****, ONDE PRECISAMOS COMPARAR ELEMENTOS PARA QUE ENTÃO O MÉTODO AVALIE SE A CONDIÇÃO É VERDADEIRA E POSSA RETORNAR UM ELEMENTO QUE SATISFAÇA ÀQUELA CONDIÇÃO.


// ****** ÍNDICES DOS ELEMENTOS EM FUNÇÕES CALLBACK: *****
// ***** IMPORTANTE: Tanto o filter, map, forEach e OUTROS MÉTODOS, ALÉM do primeiro parâmetro do CALLBACK, que é referente ao VALOR do elemento do array,   ********* UM SEGUNDO PARÂMETRO PODE SER PASSADO, QUE FARÁ REFERÊNCIA AO ***INDICE*** DO ELEMENTO. E é assim que podemos usar os ÍNDICES DOS ELEMENTOS EM FUNÇÕES CALLBACK


// ****** IMPORTANTE: Caso precisemos apenas do valor de UM PARÂMETRO EM ESPECÍFICO, que por exemplo, seja DEPOIS DO PRIMEIRO PARÂMETRO, podemos **PULAR** UM PARÂMETRO EM UMA DETERMINADA FUNÇÃO para que possamos almejar apenas o valor do parâmetro que queremos.
// ******* PARA ISSO, UMA BOA PRÁTICA PARA INDICAR QUE UM PARÂMETRO ESTÁ SENDO PULADO, É USAR UM ****UNDERLINE**** NO LUGAR DO PARÂMETRO A SER PULADO
// *** EXEMPLO: funçao (_, indice). (Onde underline será o parâmetro pulado e índice o parâmetro utilizado)












// --------------------- TESTES ----------------------------


// Testes entre FIND e FILTER

// const achado = medias.filter((n) => n < 8);
// console.log(achado);
// const achado2 = medias.find((n) => n < 8);
// console.log(achado2);


// testes que não tem a ver com filter

// const nota = medias.find((n) => n < 7);
// const indice = medias.findIndex((n) => n === 4.5);
// console.log(nota);
// console.log(indice);
// medias[1] = 7;
// console.log(medias);

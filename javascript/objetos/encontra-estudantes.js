// *********** NOTA MUITO IMPORTANTE: JSONs TAMBÉM PODEM SER UM GRANDE ARRAY DE INFORMAÇÕES E NÃO NECESSARIAMENTE APENAS UM OBJETO!! LOGO, PODEMOS USAR MÉTODOS DE ARRAY PARA ENCONTRAR DETERMINADOS OBJETOS DENTRO DE UM JSON, ENTRE ELES, O FIND, VIDE EXEMPLO ABAIXO (CASO O MESMO SEJA UM ARRAY). IMPORTANTE SEMPRE NOTAR SE CASO O JSON COMEÇA SENDO UM OBJETO (ABRINDO COM CHAVES), OU SE COMEÇA SENDO UM ARRAY (ABRINDO COM COLCHETES).

const estudantes = require('./estudantes.json');

// Função que procura um objeto inteiro dentro do ARRAY do JSON (já transformado para objeto JS)
function buscaInformacao (lista, chave, valor) {
    return lista.find((item) => item[chave] === valor);
}


// Procurando/acessando o objeto que possui propriedade "nome" com o valor "Blakeley" e, o objeto encontrado é retornado à variável
const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Blakeley');
console.log(estudanteEncontrado);


// *** ERRO:
// **NO CASO DA PROPRIEDADE TER UM ARRAY COMO VALOR: Tentando acessar/procurar uma propriedade "telefone" deste jeito fará com que o retorno seja *UNDEFINED*, pois a propriedade **"TELEFONE" É UM ARRAY** e não uma STRING "diretamente", precisando então acessar esse array para então recuperar o objeto com o valor estipulado
const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '19918820860');
console.log(telefoneEncontrado);



// ************************** OUTRA FORMA FEITA PARA CONTORNAR O "PROBLEMA" COM O ARRAY, QUE FUNCIONA TANTO PARA STRING QUANTO PARA ARRAYS (no caso de uma propriedade ter uma string como valor, e outra propriedade ter um ARRAY como valor)


// ****** "Refatorando" a função do exemplo acima para uma que utiliza o método ****INCLUDES****, pois o método funciona tanto para STRINGS/NUMBERS, quanto para ARRAYS. Sendo assim, qualquer propriedade de um objeto que tenha uma STRING como valor, tanto como um ARRAY como valor, funcionará para AMBOS.
// Dessa forma, o JavaScript irá procurar pela presença da sequência de caracteres que estamos buscando na string, ou irá buscar o valor dentro do array.
// ***** NOTA: O método includes normalmente retorna um booleano (true ou false) mas, nesse caso, RETORNA O OBJETO
function buscaInformacao2 (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const estudanteEncontrado2 = buscaInformacao2(estudantes, 'nome', 'Blakeley');
console.log(estudanteEncontrado2);

const telefoneEncontrado2 = buscaInformacao2(estudantes, 'telefone', '19918820860');
console.log(telefoneEncontrado2);


// Então, em ambos os console.log, a função poderá retornar (claro, em variáveis diferentes, vide exemplo acima) tanto a busca feita pelo nome, quanto a busca que foi feita pelo telefone (que é um Array, buscando um elemento dentro do mesmo)
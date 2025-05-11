const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312414132',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['2903213112291', '1289312893129'],
}


estudante.endereco = { // Criando e adicionando um objeto pra dentro de um objeto
    rua: 'Abcdefg',
    numero: '56', // Nota: usando na verdade string para representar números residenciais, pois números residenciais também podem conter letras juntamente com números
    complemento: 'apto 302',
    pais: 'Brasil',
}


console.log(estudante); // Mostrando o objeto após a adição de um outro objeto dentro dele
console.log(estudante.endereco); // Acessando o objeto dentro do objeto
console.log(estudante.endereco.rua); // Acessando propriedade do objeto "endereco" adicionado ao objeto "estudante"













// *** USA-SE ARRAY: Quando precisamos juntar dados DO MESMO TIPO, usamos arrays.


// *** USA0SE OBJETO: Quando precisamos dados DIFERENTES, MAS QUE PERTECEM AO MESMO CONTEXTO


// A escolha do tipo de dado em um objeto depende da natureza dos dados que você está representando. Utilizar o tipo adequado facilita o entendimento do código e a manipulação dos dados de maneira eficaz. A escolha entre número, string, boolean, array, object etc., deve ser guiada pelas necessidades específicas do contexto em que o objeto está sendo utilizado.
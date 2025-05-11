const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43',
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null,
    }]
};




// *** Object.keys()

const chavesObjeto = Object.keys(estudante); // Itera em um objeto e Retorna um *** ARRAY *** das *** CHAVES DO OBJETO *** com os *** ELEMENTOS EM STRING ***

console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) { // Já em posse do ARRAY de STRINGS das CHAVES do objeto, é possível fazer a VERIFICAÇÃO da existência de uma determinada PROPRIEDADE
  console.error('Endereço não encontrado');
} else {
  console.error('Possui endereço cadastrado');
}
// OBS: .error é um outro método do OBJETO CONSOLE, que mostra um erro de uma forma diferente quando executado no NAVEGADOR. Não difere muito quando executado no ambiente do node





// *** Object.values()

const valoresObjeto = Object.values(estudante); // Itera e Retorna um *** ARRAY CONTENDO OS VALORES DAS PROPRIEDADES DO OBJETO *** (Os elementos retornados para o array são do mesmo tipo que os próprios valores, DIFERENTE DO MÉTODO KEYS, que retorna as chaves em STRING).

console.log(valoresObjeto);






// *** Object.entries()

const paresObjeto = Object.entries(estudante); // Itera e Retorna um *** ARRAY COM ELEMENTOS ARRAYS DE PARES **** de *** CHAVE E VALOR ***. O método Object.entries() retorna uma array dos próprios pares [key, value]

console.log(paresObjeto);








// *** Object.assign()

const objetoOriginal = {
  a: 1,
  b: 2,
};

const objetoParaCopiar = {
  b: 3,
  c: 4,
};

const objetoFusao = Object.assign(objetoOriginal, objetoParaCopiar); // Usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto. O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.

console.log(objetoFusao);










// --------------------------------- Anotações ---------------------------------


// ************************** ATÉ ONDE ENTENDI, ESSES MÉTODOS SÃO MÉTODOS ITERADORES!!!!!! ****************************




// ******** OBJECT.KEYS() *********


// No caso de um OBJETO GIGANTE, com MUITAS PROPRIEDADES, caso quiséssemos **PESQUISAR UMA PROPRIEDADE ESPECÍFICA** para descobrir se essa propriedade existe ou não, descobrir o valor dessa propriedade, usamos o ***** MÉTODO DE OBJETO: OBJECT.KEYS() ******, que é um MÉTODO DE OBJETO.





// ******* OBJECT.KEYS() e OBJECT.VALUES() *****

// Object.keys() e Object.values(): são usados para extrair informações específicas de um objeto. Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.
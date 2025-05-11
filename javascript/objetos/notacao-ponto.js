const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '1231234534',
    turma: 'JavaScript',
};

console.log(estudante); // O log mostrará o OBJETO INTEIRO, no caso, TODAS as informações do objeto


console.log(estudante.nome); // Para acessar uma informação específica, usa-se a chamada **** NOTAÇÃO DE PONTO **** para ACESSAR UM OBJETO e então REFERENCIAR a PROPRIEDADE DESEJADA dentro do objeto, através de sua **CHAVE** (identificardor "nome", no exemplo).


console.log(`O nome de estudante é ${estudante.nome}`); // Acessando uma propriedade e colocando em contexto de template string


console.log(`Os três primeiros números do CPF são: ${estudante.cpf.substring(0, 3)}`); // No caso, o valor da propriedade é uma string e, então, um exemplo de que dependendo do VALOR DA PROPRIEDADE, podemos utilizar OS MÉTODOS PERTENCENTES àquele tipo de dado

// No caso, o MÉTODO DE STRING utilizado (substring) retornará **UMA PARTE DAQUELA STRING** (no caso, o primeiro índice é onde começa, e o último, onde termina. Lembrando que o último índice NÃO ENTRA no corte, ou seja, cortará do índice 0 da string ao índice 2).






// ---------------- Anotações -----------------

// ************* Objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado


// ***** AS INFORMAÇÕES DENTRO DE UM OBJETO SÃO CHAMADAS DE ****** PROPRIEDADES *******.

// ******* UM OBJETO É COMPOSTO POR PROPRIEDADES, QUE SÃO CONJUNTOS DE  *****CHAVE (identificador, nome dado a ser representado, exemplo: IDADE, CPF) E VALOR******.

// Logo, pode-se dizer que a estrutura de um objeto é composta por:


// ***********          PROPRIEDADES, que são uma DUPLA DE: CHAVE E VALOR.



// ***************** ACESSA-SE UM VALOR DE UMA PROPRIEDADE ATRAVÉS DAS CHAVES (nome, cpf, idade etc).
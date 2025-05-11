const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '1231234534',
    turma: 'JavaScript',
};


delete estudante.turma; // ************ Removendo uma propriedade do objeto

delete estudante['cpf'] // ********* Removendo uma propriedade do objeto usando NOTAÇÃO DE COLCHETE 

console.log(estudante); // Mostrando objeto após remoção das propriedades





const deletaIdade = delete estudante.idade; // Deletando uma propriedade e retornando o valor à uma variável (O RETORNO É BOOLEANO: TRUE)

console.log(deletaIdade); // Mostrando o retorno da remoção de uma propriedade (RETORNO TRUE)

console.log(estudante); // Mostrando objeto após remoção









// ---------------------------- Anotações ---------------------------------


// **** Se quisermos, por exemplo, REMOVER UMA PROPRIEDADE, podemos utilizar o operador ******** DELETE ********

// Importante! Ressaltar que o delete remove do objeto o VALOR E A PROPRIEDADE assinalada do objeto.

// ******** PODE-SE TAMBÉM ATRIBUIR O VALOR DELETADO A UMA VARIÁVEL. O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto
// NOTA: provavelmente há um uso para o booleano retornado a partir do DELETE de uma propriedade
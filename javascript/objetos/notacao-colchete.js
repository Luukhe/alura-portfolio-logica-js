const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '1231234534',
    turma: 'JavaScript',
};

estudante.nome // Notação de ponto para recuperar a propriedade nome



function exibeInfoEstudante (objetoEstudante, infoEstudante) { // Função que exibe informações de um OBJETO ESTUDANTE usando *** NOTAÇÃO DE COLCHETE ***
    return objetoEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));


console.log(estudante['nome']); // Exibindo propriedade de objeto estudante usando notação de colchetes (a CHAVE, que no caso é nome, precisa ser passada em formato de STRING).
console.log(estudante['cpf']);







// ------------------------------- Anotações --------------------------------


// ********* PARA USAR A NOTAÇÃO DE COLCHETES, SUBSTITUI-SE O PONTO PELOS COLCHETES E, PARA ACESSAR DETERMINADA PROPRIEDADE, USA-SE O NOME DA PROPRIEDADE *****COMO STRING *****, DENTRO DOS COLCHETES (Vide exemplos acima).


// ******************** A notação com COLCHETES é útil quando as informações como NOME DAS CHAVES de uma propriedade NÃO ESTÃO DISPONÍVES ou quando não sabemos de ANTEMÃO quais utilizar. Porém podemos tentar "achar" certa chave usando palavras que possam descrever o que procuramos, *** PASSADAS COMO STRING NOS COLCHETES ***


// **** A PARTICULARIDADE DA NOTAÇÃO DE COLCHETE É QUE, ATRAVÉS DELA, PODEMOS PASSAR UMA PROPRIEDADE COMO ** DADO VARIÁVEL ** (No caso, o parâmetro da função de exemplo utilizada acima, poderia ser QUALQUER DADO, ou chave, que quiséssemos passar QUANDO FORMOS EXECUTAR A FUNÇÃO).


// Por isso tudo, a notação de colchetes pode ser preferível a ser utilizada com funções, pois temos mais liberdade para achar determinada informação do que se usássemos notação com ponto, pois a notação com ponto NÃO ACEITARIA STRINGS, fazendo com que tivéssemos que escrever as chaves de uma propriedade como se fosse uma variável, QUE É EXATAMENTE COMO O JAVASCRIPT INTERPRETARIA, perdendo assim uma flexibilidade para uma procura.


// *********************** OBSERVAÇÃO IMPORTANTE: No JavaScript, se tentarmos acessar uma propriedade QUE NÃO EXISTE, ******** O RETORNO SERÁ "UNDEFINED"!!!!!!!! ******** (não dá erro, retorna UNDEFINED).
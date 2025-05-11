const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '1231234534',
    turma: 'JavaScript',
};




console.log(estudante.telefone); // Tentando mostrar uma propriedade ainda inexistente, que **RETORNA UNDEFINED POR NÃO EXISTIR**

estudante.telefone = '12377788882233'; // Sintaxe para ADICIONAR propriedades ao objeto

console.log(estudante.telefone); // Mostrando a propriedade adicionada com sucesso ao objeto

estudante.pet = ['gato']; // Testando adicionar propriedade usando NOTAÇÃO DE COLCHETE (funcionando)

console.log(estudante); // Mostrando as propriedades adicionadas junto às outras na lista de propriedades do objeto



estudante.nome = 'José Souza'; // ** Alterando/REATRIBUINDO PROPRIEDADE de um objeto

estudante['idade'] = 38; // *** Alterando usando NOTAÇÃO DE COLCHETE (teste, funciona)

console.log(estudante); // Mostrando objeto com propriedade NOME ATUALIZADA



const estudante2 = {}; // Criação de um objeto vazio é permitido assim como Arrays, para podermos adicionar propriedades conforme a necessidade

estudante2.nome = 'Ana Maria'; // Atribuindo nova propriedade ao novo objeto

console.log(estudante2); // Mostrando novo objeto com nova propriedade atribuida







// --------------------- ANOTAÇÕES ------------------


// Ao contrário de Arrays, os objetos ** NÃO SÃO ORDENADOS **. Objetos PODEM parecer ter uma ordenação pois muitas das vezes as informações aparecerão numa mesma sequência, PORÉM NÃO É GARANTIDO!

// ATENTAR-SE sempre para, enquanto trabalhando, não reatribuir uma propriedade por engano, pois a forma de reatribuição é bem simples! O mesmo vale para criar novas propriedades por engano (Exemplo: telefone, telefoneS)

// ******** Como visto, assim como Arrays, podemos criar objetos com CONST e ALTERAR SUAS PROPRIEDADES, o que não podemos é REATRIBUIR OUTRO VALOR que não seja a alteração desse objeto


// *** PODE-SE TAMBÉM, ASSIM COMO ARRAYS, criar OBJETOS VAZIOS e irmos atribuindo propriedades ao objeto conforme a necessidade
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

console.log(estudante.enderecos[0].rua); // Acessando uma propriedade dentro do objeto que também é um elemento da propriedade "ENDERECOS", que é um array 

for (let chave in estudante) {
    console.log(chave); // NOTA: Iterando sobre ***AS CHAVES (não valores)*** do objeto
}

for (let chave in estudante) {
    console.log(estudante[chave]); // ITERANDO SOBRE OS *******VALORES******** DAS PROPRIEDADES DO OBJETO (Adiciona-se o OBJETO às CHAVES)
}

for (let chave in estudante) {
    const texto = `A chave é: ${chave}, e seu valor é: ${estudante[chave]}`;
    console.log(texto); // *** Mostrando de maneira mais prática como iterar sobre CHAVES e VALORES!!!
}





// Contornando o retorno "OBJECT OBJECT (explicado nas anotações abaixo)", para que NÃO seja impresso no log

for (let chave in estudante) {
    const tipo = typeof estudante[chave]; // Capturando o tipo do valor de cada propriedade a cada iteração

    if (tipo !== 'object' && tipo !== 'function') { // Condição para não imprimir VALORES que sejam FUNCTION ou OBJECT (Arrays também são considerados), pelo resultado da impressão ser "OBJECT OBCJET" (imprmirá apenas VALORES PRIMITIVOS)
        
       const texto = `A chave é: ${chave}, e seu valor é: ${estudante[chave]}`;
       console.log(texto);
    }
}






// ------------------------------- Anotações -------------------------

// Como visto, o laço de repetição usado para ITERAR OBJETOS, ou seja, percorrer pelas propriedades de um objeto, é o *** FOR IN ***.
// O for in irá iterar objetos a partir de sua ******** CHAVE *********, que será a LET "VARIÁVEL ITERADORA" do laço e, depois, fornecemos o OBJETO a ser ITERADO. ficando assim:

// for (let CHAVE in OBJETO)



// Sabendo disso, caso quiséssemos apenas mostrar um console.log passando apenas a variável iteradora (a LET CHAVE), seriam mostradas **** APENAS AS CHAVES DO OBJETO***, EXEMPLO: log(chave)

// E, para então ACESSAR OS VALORES contido nas chaves da propriedade, usa-se a *********MESMA SINTAXE USADA PARA ACESSAR O VALOR DE UMA PROPRIEDADE*******. Então, já que a variável iteradora passa pelas CHAVES DA PROPRIEDADE, passando: ***** OBJETO[CHAVE] ***** PODEMOS ENTÃO ACESSAR SEU VALOR NA ITERAÇÃO!!!!!!!





// ********************* SOBRE TEMPLATE STRING E **"OBJECT OBJECT"** QUE É RETORNADO NO LUGAR DE ARRAYS E OBJETOS *******************************


// Quando recebemos esse tipo de informação vindo do log, este é o resultado do JavaScript ** TENTANDO CONVERTER UM OBJETO PARA STRING **, que é o que é pedido para a linguagem fazer quando colocamos as propriedades **DENTRO DE UM TEMPLATE STRING**

// ******* O TEMPLATE STRING CONVERTE OS VALORES COLOCADOS DENTRO DELE PARA STIRNG!!!!!!!!!!!!!

// Porém, como OBJETOS e ARRAYS são ***** ESTRUTURAS DE DADOS MAIS COMPLEXAS ***** em comparação a números, string, boolean etc, o JavaScript NÃO CONSEGUE convertê-los em string quando usamos template strings. Sendo assim, recebemos "OBJECT OBJECT".

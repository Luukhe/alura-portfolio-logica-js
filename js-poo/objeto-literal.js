const user = {
    nome: 'Juliana',
    email: 'exemplo@gmail.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfo: function () {
        console.log(this.nome, this.email)
        // return this.nome
    }
};

// Executando o método contido no objeto
user.exibirInfo();


// Essa é uma maneira de passar a informação de uma função a uma outra variável. Sem os parenteses, pois caso colocado, a função seria imediatamente executada, devendo então os parenteses serem colocados posteriormente pela própria variável atribuída, na hora de sua execução (mais exemplos sobre o funcionamento disso estão abaixo nas observações). 
// Em funções normais/puras, tais coisas funcionariam. Porém, como está sendo apresentado abaixo, não funcionará
// No caso, retornará undefined pois a variável "exibir" PERDEU O CONTEXTO, pois o método exibirInfo "perdeu conexão" (depois da REMOÇÃO DOS PARENTESES e, no caso, como o método exibe um console.log, a colocação dos parenteses resultaria na execução imediata do método)(mesmo se o método usasse um return)

// ******EXPLICAÇÃO:
// TANTO COM O RETURN QUANTO COM CONSOLE.LOG, CASO O MÉTODO DE UM OBJETO UTILIZE "THIS" E FOR PASSADO A INSTRUÇÃO DO MÉTODO A UMA OUTRA VARIÁVEL (ATRIBUIÇÃO SEM PARENTESES A UMA VARIÁVEL PARA QUE A VARIÁVEL SEJA POSTERIORMENTE EXECUTADA QUANDO NECESSÁRIO), O THIS PERDERÁ CONTEXTO AO SER PASSADO À VARIÁVEL, E O VALOR ATRELADO AO THIS RESULTARÁ EM UNDEFINED (tendo, então, que utilizar os métodos bind, call ou apply, vide exemplos abaixo)
const exibir1 = user.exibirInfo;
exibir1(); // Resulta em UNDEFINED





// O método BIND é um método que é usado justamente para "PRENDER" ou "LIGAR" duas coisas. Bind também liga o valor de "THIS" ao contexto do objeto referido.
// No caso, bind está LIGANDO o objeto "user" à função "exibir2", que utiliza THIS para referenciar algo em seu próprio contexto/objeto que agora, no caso, EXISTE um contexto para ela, pois está sendo ligada ao objeto "user"
// ***** NOTA: No bind, necessita-se atribuir a uma NOVA VARIÁVEL, para ser posteriormente INVOCADA para o uso QUANDO NECESSÁRIO.
const exibir2 = function() {
    console.log(this.nome);
};

// Também funciona com uma função "normal" (function declaration)
// function exibir2() {
//     console.log(this.nome)
// };


// Pelo meu entendimento, basicamente, é como se criássemos um método/função FORA do contexto do objeto e depois atribuíssemos o contexto do objeto à função criada pois não estamos utilizando o método de dentro do objeto, e sim uma função criada por fora
const exibirNome = exibir2.bind(user);
console.log(exibirNome)
exibirNome()




//**************************************/ NÃO ESQUECER: MÉTODOS PARECIDOS: .CALL() E .APPLY() (checar favoritos no navegador)









// Resumindo, meu entendimento: o método BIND dá contexto ao THIS usado na função. Isso nos dá a liberdade de criar funções e/ou fora do objetos e posteriormente ligá-los às funções criadas. Dá, também, a possibilidade de a mesma função ser utilizada novamente posteriormente com OUTRO OBJETO 


// PS: NÃO SE UTILIZA ARROW FUNCTION NA CRIAÇÃO DE MÉTODOS, POIS ELAS TÊM O CONTEXTO APENAS ONDE SÃO EXECUTADAS. NÃO CONSEGUE-SE PRENDER UMA ARROW FUNCTION A UM CONTEXTO EM ESPECÍFICO USANDO BIND. ARROW FUNCTION NÃO É EXATAMENTE A MESMA COISA QUE UMA DECLARAÇÃO DE FUNÇÃO.

// For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

// -------------------------------------------------------------------------------




// Com parenteses, o normal: passando um retorno a uma variável, que irá conter o valor de return
// PS: No caso de ser um console.log no lugar do return, onde a variável não estará recebendo nenhum tipo de dado, a variável será UNDEFINED justamente por não estar recebendo nenhum dado da função. Nesse caso e usando o caso do exemplo abaixo, a variável "teste" será undefined e a função "hello" ainda SERÁ EXECUTADA, mostrando o conteúdo de console.log
// function hello() {
//     //console.log('oi')
//     return 'oi'
// }

// const teste = hello();
// console.log(teste)


// VS

// Sem parenteses: Passando a INSTRUÇÃO da função para a variável, onde a mesma meio que "se tornará uma função" e será ela que, posteriormente, executará (a si mesma) com parenteses
// function hello() {
//     return 'oi'
// }

// const teste = hello;
// console.log(teste())





const objTeste = {
    nome: 'Lucas',
    greetComThis: function() {
        return `Hello, ${this.nome} (com THIS)`
    },
    greetSemThis: function() {
        return 'Hello (sem THIS)'
    },
    greetConsole: function () {
        console.log(this.nome)
    }
};

function mostraNome() {
    return this.nome
};

const variavel = objTeste.greetComThis();
console.log(variavel, 'var1');

const variavel2 = objTeste.greetSemThis();
console.log(variavel2, 'var2');

const variavel3 = objTeste.greetConsole;
variavel3()
//console.log(variavel3, 'var3');


console.log(mostraNome.call(objTeste), 'metodo call');

const variavel4 = mostraNome.bind(objTeste);
console.log(variavel4(), 'var4, metodo bind');

const variavel5 = objTeste.greetComThis;
console.log(variavel5(), 'var5')
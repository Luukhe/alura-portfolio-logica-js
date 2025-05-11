// Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como for … in e métodos como Object.keys(). Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.

const meuObjeto = {
    nome: "ChatGPT",
    linguagem: "JavaScript",
    versao: "3.5",
};
  
for (let chave in meuObjeto) {
    console.log(chave); // Saída: nome, linguagem, versao
};








// Propriedades não enumeráveis

// São propriedades que NÃO SÃO CONSIDERADAS durante um processo de iteração. Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns.


const meuObjeto2 = {}; // Criando um objeto vazio


// Aqui, criando uma propriedade (ao invés de usar o jeito normal, onde apenas atribuímos a propriedade a um objeto) dessa forma, podemos definir não apenas o valor da propriedade, mas também definir/CONFIGURAR se a propriedade SERÁ ou NÃO ENUMERADA, como visto em ****"enumerable: false"****, o que visivelmente torna a enumerabilidade da propriedade como FALSA (LOGO, NÃO SERÁ CONSIDERADA EM UM PROCESSO DE ITERAÇÃO)
Object.defineProperty(meuObjeto2, 'propriedadeNaoEnumerada', {
    value: 50,
    enumerable: false,
});


console.log(Object.keys(meuObjeto2)); // No momento, o retorno será vazio (a única propriedade é NÃO ENUMERADA)
console.log(meuObjeto2.propriedadeNaoEnumerada); // *** NOTA: Mesmo a propriedade sendo não enumerável, AINDA PODE SER ACESSADA!!!




// Já aqui, a propriedade foi criada e CONFIGURADA para ser ENUMERADA (ou seja, será CONSIDERADA pelos métodos de iteração)
// Neste exemplo, a propriedade propriedadeEnumerada é configurada com enumerable: true, o que significa que a propriedade será listada quando utilizamos Object.keys()
Object.defineProperty(meuObjeto2, 'propriedadeEnumerada', {
    value: 40,
    enumerable: true,
});


console.log(Object.keys(meuObjeto2)); // Exibindo propriedade criada e configurada para ser enumerada


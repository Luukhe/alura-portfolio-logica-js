const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;


// notas.forEach(function (nota) {  //     Um jeito de fazer o foreach, que é **CRIANDO** uma função DENTRO do PARÂMETRO DO FOREACH
//     somaDasNotas += nota
// })


notas.forEach(somaMedia);      //    Outro jeito de fazer o foreach, que é PASSANDO já como parâmetro do foreach 

function somaMedia (nota) {
    somaDasNotas += nota
}


const media = somaDasNotas / notas.length;

console.log(`A média é ${media}.`);


// O forEach EXECUTA UMA FUNÇÃO PARA CADA ELEMENTO DENTRO DE UM ARRAY

// O forEach é um ***** MÉTODO *****, ou seja, uma função, que irá pedir FUNÇÃO COMO PARÂMETRO, **** O QUE É CHAMADO DE MÉTODO CALLBACK ****


// O forEach poderá ser usado TANTO COM FUNÇÕES CRIADAS DENTRO DE SEU PRÓPRIO PARÂMETRO, quanto de FUNÇÕES CRIADAS EXTERNAMENTES E SENDO REFERENCIADAS EM SEU PARÂMETRO.
// *** NOTA IMPORTANTE: Quando usado com funções que foram criadas externamente e que tenha parâmetro, na hora de referenciar a função no forEach é possível referenciar apenas a função SEM OS PARÊNTESIS OU PARÂMETRO, pois o forEach já faz internamente esse trabalho, onde acessa o elemento do array e automaticamente passa ao parâmetro da função criada
// *****Exemplo: notas.forEach(somaMedia), SENDO "somaMedia" ***UMA FUNÇÃO***.



// **** O FOREACH IRÁ ACESSAR O PARÂMETRO DA FUNÇÃO QUE FOI CRIADA DENTRO DE SEU PARÂMETRO (OU SENDO REFERENCIADA, CRIADA EXTERNAMENTE), CAPTURANDO E COLOCANDO CADA UM DOS ELEMENTOS DO ARRAY UM POR VEZ (semelhante ao for of).



// O forEach percorrerá um array inteiro, desde o primeiro elemento até o último



// O forEach RETORNA UNDEFINED
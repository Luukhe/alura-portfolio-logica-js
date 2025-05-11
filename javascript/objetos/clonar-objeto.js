// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
// };

// const objPersonagem2 = objPersonagem; // Da mesma forma que Arrays, se tentarmos criar uma "cópia" de um objeto simplesmente criando uma nova variável e atribuindo o objeto à nova variável, NÃO FUNCIONARÁ, POIS ESTAREMOS APENAS FAZENDO **REFERÊNCIA** ao objeto antigo, onde se alterarmos alguma propriedade em qualquer um dos dois, será alterado em AMBOS.

// A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol).


const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
    
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Saruman"
 
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Saruman


// O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.
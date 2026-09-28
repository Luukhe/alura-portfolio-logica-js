// O operador NEW serve para criar INSÂNCIAS DE UM OBJETO A PARTIR DE UMA FUNÇÃO CONSTRUTORA
// Antes de existir a sintaxe de classes, as funções construtoras faziam o papel das Classes quando trabalhamos em orientação a objeto
// São um "modelo" para criação de objetos

// Função CONSTRUTORA (nota-se que a primeira letra do nome da função é maiúscula, e há um sublinhado na letra maiúscula indicando que a função pode ser convertida para uma CLASSE)
function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfo = function() {
        return `${this.nome}, ${this.email}`
    };
};

// "novoUser" agora é um OBJETO, criado a partir da FUNÇÃO CONSTRUTORA 
const novoUser = new User('Juliana', 'j@j.com');
console.log(novoUser);
console.log(novoUser.exibirInfo());


novoUser.greet = function() {
    return 'Hello'
};

console.log(novoUser)
console.log(novoUser.greet())









// Usando funções para criar objetos (chamadas de factory functions)
// function criaUser(nome, email) {
//  return {
//    nome,
//    email,
//    exibeInfos() {
//      return `${nome}, ${email}`
//    }
//  }
// }

// teste = criaUser('Lsakl', 'abcd')

// console.log(teste)
// console.log(teste.exibeInfos())
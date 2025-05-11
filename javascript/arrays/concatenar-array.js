const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

const salaJunta = salaJS.concat(salaPython);

console.log(salaJunta);







// O método concat irá literalmente fazer o que o nome sugere = CONCATENAR ARRAYS. Pode-se concatenar mais de um array.

// Pode-se também concatenar apenas um elemento de um outro Array, indicando o seu índice.

// Pode-se também concatenar uma string a um Array (isso fará com que a string seja adicionada ao Array, literalmente).

// ******* concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
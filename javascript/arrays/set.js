const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes); // Transformando um Array em um Set para remover elementos repetidos

const listaNomesAtualizados = [...nomesAtualizados]; // Transformando um Set em um Array novamente, usando SPREAD OPERATOR com colchetes

const listaNomesAtualizados2 = [...new Set(nomes)]; // Forma mais simplificada usando "tudo junto". Transformando o Array "nomes" em um Set, e ao mesmo tempo usando Spread Operator com os colchetes para transformar novamente em um Array.


console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
console.log(listaNomesAtualizados2);



// Pesquisado
const abcd = Array.from(nomesAtualizados); // Outro método para *** TRANSFORMAR UM SET EM ARRAY ***
const xyz = Array.from(new Set(nomes)); // Outro método com "tudo junto" para transformar um ***ARRAY EM SET***, e AO MESMO TEMPO UM ***SET EM UM ARRAY***

console.log(abcd);
console.log(xyz);








// --------------------- ANOTAÇÕES ---------------------


// Para tirarmos ITENS REPETIDOS de um Array, transformamos em um SET!

// O set é um ***CONJUNTO***. Conjuntos são tipos de dados que armazenam **** VALORES ÚNICOS ****, ou seja, valores que NÃO SÃO REPETIDOS, ao contrário de Arrays que PODEM HAVER ELEMENTOS REPETIDOS.

// Diz-se que um Set é um tipo de dado que é um **** "ARRAY-LIKE" ****, que como já diz, é TIPO um array, porém ele ** NÃO É UM ARRAY **. Ou seja, se por exemplos tentarmos usar MÉTODOS DE ARRAY em um SET, NÃO FUNCIONARÁ.
let nomeEstudante;
const professora = 'Ana';

console.log(nomeEstudante);
console.log(typeof nomeEstudante);
console.log(typeof professora);

let telefoneEstudante = null;

console.log(typeof telefoneEstudante);
console.log(telefoneEstudante + 3);
console.log(telefoneEstudante * 3); // No caso de uma operação matemática, o nulo se comportará como 0.
console.log(nomeEstudante + 3);

console.log(Number(professora));

// Sobre NULL e UNDEFINED: Null normalmente representa a ausência intencional de algum valor, já o undefined será mostrado quando uma variável não está associada a algum valor (pelo menos naquele momento do código), ou quando alguma operação não ocorreu como deveria, ou é o resultado de uma função sem return





// Ex 1

// const frase = 'Um dois três';
// console.log(frase.length);
// console.log(frase.toUpperCase());


// Ex 2

// let indefinida;
// const nulo = null;
// console.log(indefinida);
// console.log(nulo);



// Ex 3

const palavra = 'abcde';
const numero = 12345;
const verdadeirofalso = true;
const juncao = `A palavra é ${palavra}, o número é ${numero} e o bool é ${verdadeirofalso}`;

console.log(juncao);



// Ex 4

const numeroStr = '1234';
const numeroNum = 5678;

const conversaoDeStr = Number(numeroStr);
const conversaoDeNum = String(numeroNum);

console.log(conversaoDeStr, typeof conversaoDeStr);
console.log(conversaoDeNum, typeof conversaoDeNum);



// Ex 5

const frase = 'Olá, mundo!';

console.log(frase.slice(1, 9));
console.log(frase.split(' '));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

const maiusculas = frase.toUpperCase();
const minusculas = frase.toLowerCase();
const separarString = frase.slice(1, 9);

console.log(maiusculas);
console.log(minusculas);
console.log(separarString);

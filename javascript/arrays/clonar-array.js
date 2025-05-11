// Exemplo de tentativa de "clonagem", seguido de reatribuição de um dado primitivo (funciona normalmente)

let nota = 9.75;
let novaNota = nota;
console.log(novaNota);
novaNota = 10;

console.log(nota);
console.log(novaNota);

// -------------------------------


// Exemplo de tentativa de "clonagem" de Array (NÃO FUNCIONA DO JEITO NORMAL).

// const notas = [7, 7, 8, 9];
// const novaListaNotas = notas;

// novaListaNotas.push(10);

// console.log(notas);
// console.log(novaListaNotas);



// ---------------------------------



// **** USANDO SPREAD OPERATOR (reticências, ...) PARA "CLONAR" UM ARRAY PARA UMA NOVA VARIÁVEL, PARA QUE A NOVA VARIÁVEL NÃO FAÇA MAIS REFERÊNCIA À ANTIGA

const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10]; // Sintaxe: têm-se a criação de um Array (colchetes) e, então temos o SPREAD OPERATOR, que irá ESPALHAR os elementos do Array antigo na variável array nova (o SPREAD OPERATOR irá espalhar, REFERENCIAR COM AS RETICÊNCIAS E COLOCAR OS ELEMENTOS DENTRO DO ARRAY NOVO), seguido da ADIÇÃO do NOVO ELEMENTO (10), separado por vírgula, exatamente como a sintaxe de um ARRAY.

// novaListaNotas.push(10); // Não mais necessário, pois pode-se atribuir junto ao SPREAD OPERATOR, como feito acima

console.log(notas);
console.log(novaListaNotas);





//      ------------------------------------ ANOTAÇÕES ------------------------------------

// ** (VIDE EXEMPLO ACIMA)

// Como visto no primeiro exemplo, quando estamos falando de **DADOS PRIMITIVOS**, podemos "clonar" um dado, por exemplo, uma variável que possui um simples número como valor, pode-se simlesmente criar-se uma outra variável e atribuí-la a essa nova variável, assim então tendo duas variáveis com o mesmo valor.
// Posteriormente, caso uma variável tipo LET seja usada para que possa ser feita uma reatribuição, a variável que anteriormente havia recebido o valor de outra variável, pode ser REATRIBUIDA COM UM NOVO VALOR *** NORMALMENTE ***.
// ***** Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de atribuição por valor.


// *** SOBRE ARRAYS: *** ARRAYS SE COMPORTAM DE UMA FORMA DIFERENTE DE DADOS PRIMITIVOS. 
// Com os arrays, a REATRIBUIÇÃO ACIMA NÃO FUNCIONA DA MESMA FORMA. Caso tentemos apenas atribuir o valor de um Array para uma outra variável para que ela tenha os mesmos valores do array anterior e, em seguida, atribuirmos um novo elemento à nova array, AO INVÉS DE O ELEMENTO SER ADICIONADO APENAS NO NOVO ARRAY DA NOVA VARIÁVEL, ELE TAMBÉM SERÁ ADICIONADO AO ARRAY ANTIGO!!! POIS A NOVA VARIÁVEL ESTARÁ NA VERDADE FAZENDO UMA ***********REFERÊNCIA********* AO ARRAY ANTIGO!
// No caso do array, tentar fazer isso será uma ****ATRIBUIÇÃO POR REFERÊNCIA!!!!!!!!!!!!!!****
// Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda o novo array como uma referência ao anterior.
// Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.
// O mesmo comportamento ocorre quando arrays são passados como parâmetro de funções.


// O que acontece é que a nova variável não será um "objeto a parte, com os mesmos dados da variável antiga", *** MAS SIM UMA ********REFERÊNCIA******* À VARIÁVEL ANTIGA!!!!!!! 






// EXEMPLO:

// const arrayOriginal = [7, 7, 8, 9];

// function alteraArray(array) {
//   array.push(10);

//   console.log(`array do parâmetro é ${array}`);
//   console.log(`arrayOriginal é ${arrayOriginal}`);
// }

// alteraArray(arrayOriginal);



// De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código:
// alteraArray(arrayOriginal) por alteraArray([...arrayOriginal]). Assim, a saída será alterada para uma nova cópia com um novo elemento adicionado


const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);
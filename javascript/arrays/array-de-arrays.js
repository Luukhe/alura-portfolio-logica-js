const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];


//               []  ,    []          Dois arrays dentro de um array
const lista = [alunos, medias];

console.log(lista); // O log irá literalmente mostrar um array de arrays. Mostrará um array e os arrays dentro dele mesmo

console.log(lista[0]); // Acessando um array dentro de um array de arrays (acessa-se pelo índice, como qualquer elemento dentro de um array)

console.log(lista[0][3]); // *** Acessando um elemento em específico dentro do Array "alunos", que está detro do Array "lista"

console.log(lista[0][1], lista[1][1]); // Acessando um elemento específico em cada array (no caso, o intuito é acessar o nome "Juliana" e sua nota, "8")

console.log(
    `A aluna da posição 1 da lista é: ${lista[0][1]}.
    E sua nota é ${lista[1][1]}`
);





// OBS: A sequência de colchetes indica, primeiramente, o index (a posição) de um Array (que nada mais é do que um elemento dentro de outro Array) e, o segundo colchete indicará a posição do elemento dentro deste array indicado.

// Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].
const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo'); // Retira dois elementos a partir (e incluindo) da posição de index 1 e adiciona 'Rodrigo'
listaEstudantes.splice(1, 0, 'Well'); // Adiciona um elemento na posição 1 sem retirar nenhum outro elemento
listaEstudantes.splice(0, 1, 'Tarzan'); // Literalmente troca o elemento da posição ZERO para o elemento 'Tarzan', pois começará na posição 0 e foi especificado que só irá retirar 1 elemento

console.log(listaEstudantes);







// O método SPLICE irá ALTERAR o conteúdo de um Array adicionando NOVOS ELEMENTOS ENQUANTO REMOVE ELEMENTOS ANTIGOS.

// Parâmetros: 1. posição em que se deve iniciar a remoção, 2. a partir da posição, a quantidade de elementos removidos, 3. elementoS a serEM adicionadoS.
// *** NOTA: A partir do terceiro parâmetro, que é o parâmetro para adicionar um elemento ao Array, ***PODE-SE CONTINUAR ADICIONANDO MAIS ELEMENTO.

// ***** EXEMPLO DE SINTAXE: splice(posição inicial, quantidade a serem removidos, elemento a ser adicionado)

// Por exemplo, no exemplo utilizado acima, a remoção começará a partir do elemento de índice 1 (o elemento da posição escolhida para iniciar também é retirado), serão removidos DOIS elementos A PARTIR do elemento de índice 1, e o elemento "Rodrigo" será adicionado.

// ********* Também pode-se adicionar um elemento em uma determinada posição passando um *** NÚMERO ZERO *** como parâmetro de quantidade de elementos retirados.
// Exemplo: splice(posição onde queremos colocar, 0, elemento a ser adicionado)

// ******* Pode-se também TROCAR um elemento. Usa-se o número do index do elemento a ser trocado e, a quantidade "1", pois assim o splice iniciará na posição do elemento escolhido e como a quantidade a ser retirada é apenas 1, irá retirar apenas o elemento da posição que foi passado. Então, como terceiro parâmetro, adiciona-se o valor desejado para que assim aconteça uma TROCA.



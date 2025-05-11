const notas = [10, 6, 8];

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);





// OBS: O método push irá adicionar um elemento ao array e, o elemento será adicionado à ULTIMA posição do array.
// O push é um **MÉTODO DE ARRAY**. O método é uma FUNÇÃO do JavaScript que está **RELACIONADA**, que está LIGADA a arrays.
// Ou seja, o push só funcionará se estiver ASSOCIADO a um array.


// MÉTODOS NADA MAIS SÃO DO QUE FUNÇÕES QUE SÃO RELACIONADAS/ASSOCIADAS A UM TIPO DE DADO ESPECÍFICO (novamente, assim como o push com um array).
// Um método é uma função chamada (executada) no contexto de um objeto (array, number, string, etc).
// Métodos realizam tarefas pré-definidas usando o valor que está no contexto (por exemplo, um array) e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.



// NOTA IMPORTANTE SOBRE CONSTS: A princípio, temos a definição de que uma const não pode ser alterada e, quando necessitamos alterar uma variável, usamos LET ao invés de CONST, porém um ARRAY atribuído a uma const PODE TER ÍNDICES ALTERADOS (ou no caso do exemplo utilizado no arquivo, adicionados).
// No caso, o que NÃO daria para fazer é REATRIBUIR a const para um outro valor.



// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
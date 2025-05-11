const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const primeiraLista = listaEstudantes.slice(0, listaEstudantes.length / 2); // Que é o mesmo que (0, 10)

console.log(primeiraLista);
console.log(primeiraLista.length);

const segundaLista = listaEstudantes.slice(listaEstudantes.length / 2); // Que é o mesmo que (10, até o fim que no caso é 20)

console.log(segundaLista);
console.log(segundaLista.length);





console.log(listaEstudantes.slice(undefined, 2));

// O método slice é usado para FATIAR, DIVIDIR, CORTAR arrays da forma que quisermos e, para isso, usa-se DOIS PARÂMETROS: o primeiro parâmetro será o índice inicial de onde queremos começar a divisão e o segundo parâmetro usa-se o índice indicando ONDE SERÁ O FINAL da divisão/fatiamento do Array.

// ***** NOTA: Usando slice, o parâmetro de índice de FIM do corte **NÃO É INCLUSO**, ***MAS O INÍCIO SIM***.
// Exemplo: em um corte de um array usando índices de 0 a 10, o índice de número 10 não é incluso, o último elemento incluso é o elemento de ÍNDICE 9.

// O slice irá retornar um novo array da maneira especificada

// ****** SE APENAS UM PARÂMETRO FOR PASSADO, ESTE SERÁ O PARÂMETRO QUE INDICARÁ O COMEÇO. LOGO, O ARRAY SERÁ FATIADO DO COMEÇO INDICADO ATÉ O FIM DO ARRAY.

// Se o início for omitido, slice inicia a partir do índice 0. Para o início ser omitido, acredito que o valor do parâmetro precise ser "UNDEFINED".
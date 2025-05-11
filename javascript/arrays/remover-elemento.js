const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));





// O método POP para arrays removerá o ULTIMO ELEMENTO do array em que for usado.



// Assim como pop e push são MÉTODOS ESPECÍFICOS PARA ARRAYS, também temos métodos para NÚMEROS, como foi usado na variável "media" (que é um número, e foi passado o toFixed).
alert('Boas vindas ao jogo do número secreto!');
let multiplicador = 1000;
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log(numeroSecreto);
let chute;
console.log('Valor do chute: ', chute); /*Isso aqui para imprimir uma string e uma variável no console log, usando a vírgula, não funciona no alert. Mas as formas de concatenação usadas no alert, de template strings e usando o "+", funcionam aqui no console log*/ 

// console.log('O usuário digitou o número: ' + chute + '. O número secreto era: ' + numeroSecreto + '.');
// console.log(`O usuário digitou o número: ${chute}. O número secreto era: ${numeroSecreto}.`);
// console.log('Resultado da comparação:', chute == numeroSecreto);

let tentativas = 0;
// while (chute != numeroSecreto) {
//     chute = prompt('Digite um número de 1 a 10');
//     // tentativas = tentativas + 1;
//     tentativas++; //*****Esse método tem o mesmo efeito do método acima, porém com menos escrita e mais organização
//     console.log(tentativas);
//     if (numeroSecreto == chute) {
//         alert(`Você acertou! O número secreto era ${numeroSecreto}. Total de tentativas: ${tentativas}.`);
//     } else if (chute > numeroSecreto) {
//         alert(`Você errou! O número secreto é um número menor que ${chute}.`);
//     } else {
//         alert('Você errou! O número secreto é um número maior que ' + chute + '.');
//     }
// }

while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 0 e ' + multiplicador);
    tentativas++
    if (chute == numeroSecreto) {
        // if (tentativas == 1) {
        //     alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
        // } else {
        //     alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
        // }
        break
    } else {
        if (chute < numeroSecreto) {
            alert('Você errou! Tente um número maior que ' + chute + '.');
        } else {
            alert('Você errou! Tente um número menor que ' + chute + '.');
        }
    }
}

// if (tentativas == 1) {
//     alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`)
// } else {
//     alert('Parabéns! Você acertou o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativas!')
// }



// O jeito a seguir tem a mesma função que o código de condicionais if/else acima (de escrever condição para os dois resultados diferentes), porém, melhor legível



let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
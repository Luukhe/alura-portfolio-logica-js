// function comprar () {
//     let tipoIngresso = document.getElementById('tipo-ingresso').value;
//     let quantidadeCompraIngresso = document.getElementById('qtd').value;
//     let qtdPista = document.getElementById('qtd-pista');
//     qtdPista = parseInt(qtdPista.innerHTML);
//     let qtdSuperior = document.getElementById('qtd-superior');
//     qtdSuperior = parseInt(qtdSuperior.innerHTML);
//     let qtdInferior = document.getElementById('qtd-inferior');
//     qtdInferior = parseInt(qtdInferior.innerHTML);

//     if (tipoIngresso == 'pista') {
//         qtdPista = qtdPista - quantidadeCompraIngresso;

//         if (qtdPista < 0) {
//             alert('Não há ingressos disponíveis para essa quantidade!');
//             return;
//         }

//         document.getElementById('qtd-pista').innerHTML = qtdPista;
//     } else if (tipoIngresso == 'superior') {
//         qtdSuperior = qtdSuperior - quantidadeCompraIngresso;
        
//         if (qtdSuperior < 0) {
//             alert('Não há ingressos disponíveis para essa quantidade!');
//             return;
//         }

//         document.getElementById('qtd-superior').innerHTML = qtdSuperior;
//     } else if (tipoIngresso == 'inferior') {
//         qtdInferior = qtdInferior - quantidadeCompraIngresso;
        
//         if (qtdInferior < 0) {
//             alert('Não há ingressos disponíveis para essa quantidade!');
//             return;
//         }

//         document.getElementById('qtd-inferior').innerHTML = qtdInferior;
//     }
// }




// ------------------------------------------------------------ Acima a minha resolução do projeto ------------------------------------------





// **NOTA, ATENTAR-SE: Sempre que recuperamos um elemento na página eles **SEMPRE VOLTAM COMO STRING**, o que pode ocorrer algum bug/erro quando o valor for usado para alguma operação matemática, tendo então que transformarmos para número.

// function comprar () {
//     let tipoIngresso = document.getElementById('tipo-ingresso').value;
//     let qtd = parseInt(document.getElementById('qtd').value);

//     if (tipoIngresso == 'pista') {
//         comprarPista (qtd);

//     } else if (tipoIngresso == 'superior') {
//         comprarSuperior (qtd);

//     } else {
//         comprarInferior (qtd);
//     }

// }

// function comprarPista(qtd) {
//     let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

//     if (qtd > qtdPista) {
//         alert('Insira uma quantidade válida');
//     } else {
//         qtdPista = qtdPista - qtd;
//         document.getElementById('qtd-pista').textContent = qtdPista;
//         alert('Compra realizada com sucesso!');
//     }
// }

// function comprarSuperior(qtd) {
//     let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

//     if (qtd > qtdSuperior) {
//         alert('Insira uma quantidade válida');
//     } else {
//         qtdSuperior = qtdSuperior - qtd;
//         document.getElementById('qtd-superior').textContent = qtdSuperior;
//         alert('Compra realizada com sucesso!');
//     }
// }

// function comprarInferior(qtd) {
//     let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

//     if (qtd > qtdInferior) {
//         alert('Insira uma quantidade válida');
//     } else {
//         qtdInferior = qtdInferior - qtd;
//         document.getElementById('qtd-inferior').textContent = qtdInferior;
//         alert('Compra realizada com sucesso!');
//     }
// }





// ----------------------------------------- ABAIXO, FAZENDO O PROJETO DE UMA FORMA COM A FUNÇÃO REFATORADA -----------------------------------------------





function comprar () {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida');
        document.getElementById('qtd').value = '';
        return;
    }

    if (tipoIngresso == 'pista') {
        comprarIngresso (qtd, tipoIngresso);
    } else if (tipoIngresso == 'superior') {
        comprarIngresso (qtd, tipoIngresso);
    }
    else {
        comprarIngresso (qtd, tipoIngresso);
    }
}

function comprarIngresso(qtd, setor) {
    let qtdSetor = parseInt(document.getElementById(`qtd-${setor}`).textContent);

    if (qtd > qtdSetor) {
        alert('Insira uma quantidade válida');
    } else {
        qtdSetor = qtdSetor - qtd;
        document.getElementById(`qtd-${setor}`).textContent = qtdSetor;
        alert('Compra realizada com sucesso!');
    }
}



// EXERCICIOS DO PROJETO


// function numero (a) {
//     return parseInt(a);
// }

// let numeroStr = numero('3');
// console.log(numeroStr);
// console.log(typeof numeroStr);


// function parOuImpar (n) {
//     if (n % 2 == 0) {
//         return `O número ${n} é um número par.`
//     } else {
//         return `O número ${n} é um número impar.`
//     }
// }
// let res = parOuImpar(10);
// console.log(res);



// function adicao(a, b) {
//     return a + b;
// }

// function subtracao(a, b) {
//     return a - b;
// }

// function multiplicacao(a, b) {
//     return a * b;
// }

// function divisao(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return "Erro: divisão por zero.";
//     }
// }

// function calculadora(operacao, a, b) {
//     switch (operacao) {
//         case 'soma':
//             return adicao(a, b);
//         case 'subtracao':
//             return subtracao(a, b);
//         case 'multiplicacao':
//             return multiplicacao(a, b);
//         case 'divisao':
//             return divisao(a, b);
//         default:
//             return "Operação inválida.";
//     }
// }

// // Exemplo de uso
// let resultado = calculadora('soma', 5, 3);
// console.log(resultado);  // Saída esperada: 8




// function converterTemperatura(valor, escala) {
//     if (escala.toLowerCase() === 'celsius') {
//         return (valor * 9/5) + 32;  // Celsius para Fahrenheit
//     } else if (escala.toLowerCase() === 'fahrenheit') {
//         return (valor - 32) * 5/9;  // Fahrenheit para Celsius
//     } else {
//         return "Escala inválida";
//     }
// }

// // Exemplo de uso
// let temperaturaCelsius = 25;
// let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
// console.log(temperaturaFahrenheit);  // Saída esperada: 77






// function conversorTemperatura (graus, escala) {
//     if (escala.toLowerCase() == 'celsius') {
//         let fahrenheit = graus * 1.8 + 32;
//         return `A temperatura de ${graus}°C será de ${fahrenheit.toFixed(1)}°F`;
//     } else if (escala.toLowerCase() == 'fahrenheit') {
//         let celcius = 5 / 9 * (graus - 32);
//         return `A temperatura de ${graus}°F será de ${celcius.toFixed(1)}°C`;
//     } else {
//         return 'Escala inválida'
//     }
// }
// let temp = conversorTemperatura(110, 'fahrenheit');
// console.log(temp);
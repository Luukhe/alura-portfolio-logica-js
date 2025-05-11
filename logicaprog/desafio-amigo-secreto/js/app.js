
let listaSorteados = [];

function adicionar () {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (amigo.value == '') {
        alert('Por favor, insira um nome válido.');
        amigo.value = '';
        return;
    } else if (listaSorteados.includes(amigo.value)) {
        alert('Por favor, insira um nome diferente.');
        amigo.value = '';
        return;
    }
    
    listaSorteados.push(amigo.value);
    console.log(listaSorteados);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = `${listaAmigos.textContent}, ${amigo.value}`;
    }

    amigo.value = '';
}




// *************** OBSERVAÇÃO IMPORTANTÍSSIMA SOBRE PERCORRER ARRAY: Abaixo, está um algorítmo feito para SORTEAR NOMES PARA UM AMIGO OCULTO e, foi utilizada uma "técnica" que, acredito eu, que seja de ******** PERCORRER ARRAY *********. Consiste em, basicamente, usar um FOR como estrutura de repetição, USAR O TAMANHO DO ARRAY (.lenght) para que o ARRAY INTEIRO SEJA PERCORRIDO e para determinar a quantidade de loops (que seja igual à quantidade de elementos do array), e ****PARA QUE CADA ELEMENTO DO ARRAY SEJA PERCORRIDO, USA-SE A ****VARIÁVEL DO CONTADOR**** COMO INDEX DO ARRAY, ---- Exemplo: array[i] -----, para assim podermos manusear CADA UM DOS ELEMENTOS DO ARRAY!!


// SOBRE A LÓGICA USADA NO ALGORITMO: A lógica consiste em mostrar na tela duas vezes a mesma lista, sendo concatenadas pela string de SETA entre elas, dando a perceber que são duas listas distintas (MAS NA VERDADE É A MESMA LISTA, SÓ QUE CONCATENADA E MOSTRADA DUAS VEZES, ALGO QUE EU NÃO TINHA ENTENDIDO NO COMEÇO).

// Para ***CADA VEZ*** mostrar um item do Array e depois um outro **DIFERENTE**, na "primeira lista" usa-se **A VARIÁVEL DO CONTADOR NO ****INDEX**** DO ARRAY, fazendo assim com que o valor do contador "percorra" e, mostre CADA ITEM DO ARRAY (* listaSorteados[i] *) para cada vez que o FOR executar e, para a segunda lista, usa-se a mesma lógica mas com +1 somado ao INDEX (listaSorteados[i + 1]), para que cada vez que o for executar, a "segunda lista" mostrar SEMPRE O NÚMERO SEGUINTE AO ANTERIOR, fazendo com que NUNCA HAJA UMA REPETIÇÃO no caso de um sorteio de amigo oculto

// A estrutura condicional do if foi criada para que o último item/elemento do Array, "tire/selecione" o primeiro item/elemento do Array, que nunca era escolhido, pois o Array sempre começava por ele e ia-se somando +1.

// NOTA: Um <br> **CONCATENADO** com o ARRAY (usando innerHTML) faz os itens do ARRAY PULAREM LINHAS!!!!!!!! *******

function sortear () {
    if (listaSorteados.length < 4) {
        alert('Por favor, insira uma quantidade adequada de nomes para um sorteio');
        amigo.value = '';
        return;
    }

    embaralha(listaSorteados);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaSorteados.length; i++) {
        if (i == listaSorteados.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteados[i] + ' --> ' + listaSorteados[0];
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteados[i] + ' --> ' + listaSorteados[i + 1] + '<br>';
        }
    }
}




function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar () {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaSorteados = [];
}








// ----------------------------------------------- EXERCICIOS PROPOSTOS ---------------------------------------------



// Exercicio 2
// let primeiraLista = [1, 2, 3];
// let segundaLista = [4, 5, 6];
// let terceiraLista = ['a', 'b', 'c'];
// let listaFinal = primeiraLista.concat(segundaLista); <---- Concatenando dois Arrays e retornando em um novo Array
// let listaFinal = primeiraLista.concat(segundaLista[2]); <---- Para pegar apenas o elemento de índice 2 e concatenar ao primeiro Array
// let listaFinal = primeiraLista.concat(segundaLista, terceiraLista); <---- Concatenando mais de dois Array
// let listaFinal = primeiraLista.concat('String concatenada'); <---- O método concat também aceita STRING como parâmetro, concatenando-a e retornando um novo Array com a string sendo adicionada ao final do Array
// console.log(listaFinal);



// Exercicio 3
// let primeiraLista = [1, 2, 3];
// let segundaLista = [4, 5, 6];
// let listaFinal = primeiraLista.concat(segundaLista);
// listaFinal.pop(); // Nota: o método POP remove o último elemento de um Array e **RETORNA O ELEMENTO RETIRADO**. O que quer dizer que se for atribuído a alguma variável, a variável receberá o elemento retirado.
// console.log(listaFinal);



// Exercício 4
// let primeiraLista = [1, 2, 3];
// let segundaLista = [4, 5, 6];
// let listaFinal = primeiraLista.concat(segundaLista);
// embaralha(listaFinal);
// console.log(listaFinal);




// Exercício 5

// ***** NOTA: O exercício propõe que eliminemos *ITENS REPETIDOS* de um Array.

// ***** SET: A forma estudada aqui para resolver foi a criação de um SET, que, como o nome já diz, é um CONJUNTO. A criação de um Array comum, quando TRANSFORMADO em um SET garante que os elementos sejam apenas elementos ÚNICOS, e que *NÃO HAJA NENHUM ITEM/ELEMENTO DUPLICADO*.

// ***** SET PARA ARRAY DE VOLTA: Às vezes a forma com que um SET é mostrado no console pode não agradar por ser um pouco diferente de como é mostrado um Array. Para isso, depois de tratado e ter removido itens duplicados transformando um Array em um SET, pode-se **TRANSFORMAR UM SET EM UM ARRAY NOVAMENTE**, da forma feita abaixo.

// let listaComDuplicada = [1, 2, 3, 4, 5, 2, 1, 3];
// function removerDuplicatas (lista) {
//     lista = new Set(lista); // Transformando um Array normal em um Set para retirar itens duplicados
//     lista = Array.from(lista); // Transformando um Set em um Array normal novamente (para que seja um Array normal, e que seja mostrado como Array no console)
//     return lista;
// }
// let resultadoLista = removerDuplicatas(listaComDuplicada);
// console.log(resultadoLista);





// Função criada para fazer com que a palavra recebida pela função seja mostrada com A PRIMEIRA LETRA SENDO MAIÚSCULA. Criei essa função pois em um dos últimos exercícios do projeto, foi levantada a hipótese de que os nomes adicionados na lista do amigo secreto terão uma validação diferente caso um mesmo nome fosse escrito com diferentes capitalizações (maiúsculo ou minúsculo), o que não era pra ser aceito, já que a proposta do projeto é não haver o mesmo nome mais de uma vez. A solução proposta no exercício foi que os valores (nomes) colocados pelo usuário fossem todos transformados para maiúsculas, antes de adicionados ao Array, para que não haja distinção na capitalização. Porém, com isso, os nomes também ficarão em maiúsculas quando mostrados na lista de sorteados. Pensando nisso, criei essa função para aplicar (em algum lugar) quando os elementos do Array forem passados para a lista de sorteados, para que apenas a primeira letra de seus nomes seja maiúscula. *NOTA: a função não tá aplicada no código, só criada.
// let palavraExemplo = 'brasil';
// function primeiraMaiuscula (n) {
//     let palavra = '';
//     for (let i = 0; n.length > i; i++) {
//         if (i == 0) {
//            palavra = n[0].toUpperCase();
//         } else {
//             palavra = palavra + n[i].toLowerCase();
//         }
//     }
//     return palavra;
// }
// palavraExemplo = primeiraMaiuscula(palavraExemplo);
// console.log(palavraExemplo);



// --------------------------------------------------------- EXERCICIOS PROPOSTOS -----------------------------------------------------------


// Exercício 1
// function validacaoNumero (n) {
//     if (n > 0) {
//         console.log(`O número ${n} é um número positivo.`)
//     } else if (n == 0) {
//         console.log('O numero digitado é 0.')
//     } else {
//         console.log(`O número ${n} é um número negativo.`)
//     }
// };
// validacaoNumero(-2);




// Exercício 2
// function validacaoIdade (n) {
//     if (n >= 18) {
//         console.log('Você é maior de idade.');
//     } else {
//         console.log('Você é menor de idade');
//     }
// }
// validacaoIdade(26);




// Exercício 3
// function validacaoString (n) {
//     if (n == '') {
//         console.log('É uma string vazia.')
//     } else {
//         console.log(`A palavra ${n} é uma string normal.`);
//     }
// }
// validacaoString('');




// Exercício 4
// function validacaoAnoBissexto (n) {
//     if (n % 4 == 0) {
//         console.log(`O ano ${n} é um ano bissexto.`);
//     } else {
//         console.log(`O ano ${n} não é um ano bissexto.`);
//     }
// };
// validacaoAnoBissexto(2025);




// Exercício 5
// function calcularMedia (n1, n2) {
//     if (isNaN(n1) || isNaN(n2)) {
//         console.log('Por favor, insira um número válido.');
//         return;
//     }
//     let media = (n1 + n2) / 2;
//     console.log(`A média entre ${n1} e ${n2} é: ${media}`);
// }
// calcularMedia(10, 7)




// Exercicio 6
// let minhaLista = [1, 2, 3, 4, 5];
// function tamanhoLista (n) {
//     // return n.length;
//     console.log(n.length);
// }
// tamanhoLista(minhaLista);




// Exercício 7
// let minhaLista = [1, 2, 3, 4, 5];
// console.log(minhaLista.includes(5));




// Exercício 8
// let minhaLista = [1, 2, 3, 4, 5];
// function checarElemento (lista, elemento) {
//     console.log(lista.includes(elemento));
// };
// checarElemento(minhaLista, 5);




// Exercício 9
// let minhaLista = ['a', 'b', 'c', 'd', 'e'];
// console.log(minhaLista.includes('a'));




// Exercício 10

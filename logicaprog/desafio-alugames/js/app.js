// OBSERVAÇÕES: Pelo que eu entendi, o grande pulo do gato nesse desafio, é conseguir usar a mesma função para todos os elementos passando apenas um parâmetro **********NA CHAMADA DA FUNÇÃO, DO HTML********, para que através disso, de alguma forma a função se referencie ao elemento pai(?) e que, passando aqui no JavaScript o parâmetro, ele irá capturar o número do parâmetro do HTML, passar o parâmetro no JS como variável para referenciar o ID do elemento pai (game-1, game-2) e assim (talvez) evitar uma possível duplicação de código de várias declarações, talvez.
// ****** NO MOMENTO DA *CHAMADA* (Para de fato RODAR a função) DA FUNÇÃO AQUI NO JAVASCRIPT, NECESSITA-SE PASSAR O NÚMERO CORRESPONDENTE AO ELEMENTO PAI COMO **PARÂMETRO**!!!!!!!!!!! 

// OBS 2: Como usado no exemplo aqui do desafio, a minha dúvida era que, como os elementos que eu deveria pegar não possuíam ID, a dúvida era COMO eu iria conseguir pegar esses elementos através do elemento PAI que possui um ID. Parte do problema está descrito acima, quando a função se referencia com o próprio elemento pai, para assim capturar-se o elemento pai que possui o ID. ****ENTÃO, já com o elemento pai referenciado, para pegar um elemento filho usa-se a variável que foi guardado a captação do elemento pai, e faz-se ***UMA NOVA CHAMADA DE SELEÇÃO USANDO O QUERY SELECTOR***.

// RESUMINDO: Já tendo selecionado o elemento pai que possui o ID, usa-se a variável que foi guardado o elemento pai para usar um QUERY SELECTOR e selecionar os filhos. (A PARTIR DO PAI, CAPTURA-SE O FILHO).

// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);

//     let jogoImagem = gameClicado.querySelector('.dashboard__item__img');

//     let btnClicado = gameClicado.querySelector('.dashboard__item__button');

//     if (jogoImagem.classList.contains('dashboard__item__img--rented')) {
//         jogoImagem.classList.remove('dashboard__item__img--rented');
//         btnClicado.classList.remove('dashboard__item__button--return');
//         btnClicado.innerHTML = 'Alugar';
//     } else {
//         jogoImagem.classList.add('dashboard__item__img--rented');
//         btnClicado.classList.add('dashboard__item__button--return');
//         btnClicado.innerHTML = 'Devolver';
//     }
// }

let jogosAlugados = 1;
function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let confirmacao;

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        confirmacao = window.confirm('Por favor, confirme a devolução do jogo.');

        if (confirmacao == true) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
            // console.log(jogosAlugados); 
        } else {
            return
        };

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
        // console.log(jogosAlugados);
    }

    contarEExibirJogosAlugados();
}


//*** Jeito para contar quantos jogos estão sendo alugados abaixo, proposto pela resolução dos exercícios. O meu jeito foram com os console logs comentados acima no if e else, que também são um "quebra galho paleativo", mas na minha opinião, não muito rentável, pois eu preciso colocar manualmente a quantidade inicial (que no caso do desafio, já começa com 1) de jogos alugados (o que talvez não seja muito bom, já que é feito manualmente e não um programa contando).

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
//Este exemplo adiciona um evento DOMContentLoaded que é acionado quando a página é carregada. Nesse momento, ele conta a quantidade inicial de jogos alugados. Certifique-se de ajustar o código conforme necessário para se adequar ao seu projeto.




function verificarPalindromo () {
    let palavra = 'rever';
    let palavraCortada = palavra.split('');
    console.log(palavraCortada);
    let palavraInvertida = palavraCortada.reverse();
    palavraInvertida = palavraInvertida.join('');
    console.log(palavraInvertida);
    
    if (palavra == palavraInvertida) {
        console.log('A palavra é um palíndromo.');
    } else {
        console.log('A palavra não é um palíndromo.')
    }
}

verificarPalindromo();


function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenarNumeros(8, 3, 9);
// OBS: Pelo que foi dito na aula, o **VALUE** RETORNA UMA ***STRING***, e por isso se atentar a colocar os valores RETORNADOS pelo VALUE, para NÚMEROS (como está sendo feito nas variáveis "QUANTIDADE, DE, E ATE" usando o parseInt), pois sem isso, a função do cálculo NÃO ESTAVA DANDO CERTO, pois o valor retornado era uma string e os valores do cálculo estavam BUGANDO.

document.getElementById('btn-reiniciar').setAttribute('disabled', true);

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let listaSorteados = [];

    if (de >= ate) {
        alert('Por favor, insira um número menor para que um intervalo seja criado');
        return;

        // Veja que utilizamos dentro do bloco if o comando return. Esse comando, usado dentro desse bloco e sem de fato retornar nada, serve para que a função sortear() seja interrompida nesse ponto, sem seguir para as linhas de baixo. Isso é muito útil quando você não quer que o código adicional seja executado dada alguma circunstância específica.
    };

    if (quantidade > (ate - de + 1)) {
        alert('Por favor, insira uma quantidade de números com um intervalo possível.');
        return;

        // Aqui, novamente um "return" sem nada para retornar para *IMPEDIR QUE A FUNÇÃO EXECUTE AS LINHAS SEGUINTES (ABAIXO, NO CAS0), agindo como um BREAK*

    };

    // let diferenca = (ate - de) + 1; **Essa variável faz parte da minha solução citada abaixo (dentro do for) sobre a proteção

    for (let i = 0; i < quantidade; i++) {
        let numeros = gerarNumeroAleatorio(de, ate);
        
        // if (de > ate || quantidade > diferenca) {
        //     alert('Por favor, insira uma quantidade de números com um intervalo possível.');
        //     break
        // }
        // Acima, está a MINHA solução para os problemas (posteriorente citada como proteção) ainda não resolvidos do projeto, mas que posteriormente foram citados como desafios e resolvidos (colocados acima, fora do "for", entre o "for" e a ). 

        while(listaSorteados.includes(numeros)) {
            numeros = gerarNumeroAleatorio(de, ate);
        };

        listaSorteados.push(numeros);
        console.log(listaSorteados);

    }

    let numerosSorteados = document.getElementById('resultado');
    numerosSorteados.innerHTML = `<label class="texto__paragrafo" id="numeros__sorteados">Números sorteados: ${listaSorteados}</label>`;
    //*** Esse acima é um jeito de pegar/editar/tratar a *TAG QUE NÃO TINHA ID* (obviamente, era só colocar um ID na tag que no caso é a label para editá-la), onde você pega a tag PAI (que tinha ID), literalmente copia e passa como valor a tag filha inteira (já que o innerHTML edita LITERALMENTE o que há dentro da tag que foi mencionada, como as próprias tags dentro) e edita como quiser a parte a ser incluída (no caso, editando a parte onde entra o array). 

    document.getElementById('btn-sortear').setAttribute('disabled', true);
    alterarStatusBotaoReiniciar();

}


function gerarNumeroAleatorio (min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function mudarTexto (id, texto) {
    document.getElementById(id).innerHTML = texto;
}

function alterarStatusBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.removeAttribute('disabled');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
        botao.setAttribute('disabled', true);
    }


    // botao.classList.remove('container__botao-desabilitado')
    // botao.classList.add('container__botao')

    // botao.classList.replace('container__botao-desabilitado', 'container__botao');

    // ******* Esses métodos acima também FUNCIONAM IGUAL *************
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    mudarTexto('numeros__sorteados', 'Números sorteados: nenhum até agora');
}

function reiniciar() {
    limparCampo();
    alterarStatusBotaoReiniciar();
    document.getElementById('btn-sortear').removeAttribute('disabled');
    // let botao = document.getElementById('btn-reiniciar');
    // botao.classList.add('container__botao-desabilitado');
    // botao.classList.remove('container__botao');
}





// mudarTexto('numeros__sorteados', `Numeros sorteados: ${listaSorteados}`);

    //  let contador = 0;    
    // while (contador < quantidade) {
    //     let numeros = gerarNumeroAleatorio(de, ate);

    //     listaSorteados.push(numeros);
    //     console.log(listaSorteados);

    //     mudarTexto('numeros__sorteados', `Numeros sorteados: ${listaSorteados}`);

    //     // if (listaSorteados.length > 10) {
    //     //     listaSorteados = [];
    //     //     alert('Número limite de números sorteados excedido. Por favor, recomece.');
    //     //     limparCampo()
    //     //     document.getElementById('btn-sortear').setAttribute('disabled', true);
    //     //     break
    //     // }

    //     contador++;
    // }
    // document.getElementById('btn-sortear').setAttribute('disabled', true);
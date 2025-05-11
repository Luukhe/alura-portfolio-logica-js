// // if nomeproduto value == fone de ouvido

// // OBS IMPORTANTE******: Para pegar o valor de uma LISTA SELECT que está sendo selecionado *NA HORA*, usa-se o *****VALUE NO ELEMENTO PAI (claro, depois de ter pego ele com getelementbyid) PARA PEGAR O VALOR DOS OPTIONS DENTRO DO SELECT, CUJO CASO É O PRÓPRIO SELECT, ***AO INVÉS DE PEGAR O OPTION (que era o que eu achava e estava fazendo), pois pegando o option, conseguimos apenas recuperar o valor em que estamos tratando, e não o valor ESCOLHIDO PELO USUÁRIO***.

// let total = 0;
// let subtotal = 0;
// let valorFone = 100;
// let valorCelular = 1400;
// let valorOculus = 5000;
// let listaProdutosCarrinho = [];
// let produtoEscolhido = '';

// document.addEventListener('DOMContentLoaded', function () {
//     let listaProdutos = document.getElementById('lista-produtos');
//     listaProdutos = listaProdutos.querySelector('.carrinho__produtos__produto');
//     listaProdutosCarrinho.push(listaProdutos.innerHTML = '<span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span> </br>');
//     listaProdutos.innerHTML = listaProdutosCarrinho.join('');
//     total = 1400;
// })

// function adicionar () {
//     let nomeProduto = document.getElementById('produto');
//     let quantidade = parseInt(document.getElementById('quantidade').value);
//     let valorTotal = document.getElementById('valor-total');
//     let listaProdutos = document.getElementById('lista-produtos');
//     listaProdutos = listaProdutos.querySelector('.carrinho__produtos__produto');

//     if (Number.isNaN(quantidade)) { // Aqui nessa condição, fazendo - String.(quantidade == '') - também deu certo!
//         alert('Por favor, preencha o campo quantidade.');
//         return;
//     }

//     if (nomeProduto.value == 'Fone de ouvido - R$100') {
//         subtotal = valorFone * quantidade;
//         produtoEscolhido = 'Fone de ouvido';

//     } else if (nomeProduto.value == 'Celular - R$1400') {
//         subtotal = valorCelular * quantidade;
//         produtoEscolhido = 'Celular';

//     } else if (nomeProduto.value == 'Oculus VR - R$5000') {
//         subtotal = valorOculus * quantidade;
//         produtoEscolhido = 'Oculus VR';
//     };

//     total = total + subtotal;
//     valorTotal.innerHTML = `R$${total}`;

//     listaProdutosCarrinho.push(listaProdutos.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoEscolhido} <span class="texto-azul">R$${subtotal}</span> </br>`); // Minha ideia depois de pesquisar foi, para pular as linhas dos elementos do Array, adicionar esse ***</br>*** no próprio innerHTML
//     listaProdutos.innerHTML = listaProdutosCarrinho.join(''); // E aqui, ele retira as vírgulas que separam os elementos do Array.
// }


// function limpar () {
//     total = 0;
//     let valorTotal = document.getElementById('valor-total');
//     let quantidade = document.getElementById('quantidade');
//     let listaProdutos = document.getElementById('lista-produtos');
//     listaProdutos = listaProdutos.querySelector('.carrinho__produtos__produto');
//     listaProdutos.innerHTML = '';
//     listaProdutosCarrinho = [];
//     quantidade.value = '';
//     valorTotal.innerHTML = `R$${total}`;
// }


// Acima, foi a minha própria maneira de resolver o desafio




// -------------------------------------------------------------------------------------------------------




// Abaixo, a resolução proposta pelos instrutores




// **********OBSERVAÇÃO SUPER IMPORTANTE: **MÉTODO SPLIT**: O split é um método que TRANSFORMA UMA STRING EM ARRAY.

// SPLIT *SEM* PARÂMETRO: Usar o split sem parâmetro irá transformar a string INTEIRA em um ÚNICO elemento DE UM ARRAY (Ou seja, a string inteira vai ser o primeiro elemento, de index 0, de um Array)

// SPLIT COM PARÂMETRO ASPAS *SOZINHO: Usar o split com aspas sozinho irá retornar um Array com CADA LETRA DA STRING sendo separada e TRANSFORMADA EM UM ELEMENTO dentro do Array

// SPLIT COM PARAMETRO ****SEPARADOR***: Consiste em usar o parâmetro com aspas e, DENTRO das aspas, qualquer caractére que seja inserido, será considerado um SEPARADOR, fazendo com que o mesmo seja REMOVIDO do Array e retornando tudo que estiver **ANTES E DEPOIS (tudo que o separador separar para OS LADOS)** do separador como ELEMENTOS DO ARRAY. (O tamanho do Array irá depender de quantas vezes aparece o caractére escolhido)
// EXEMPLO 1: Palavra/string "Favor": Se usado a letra "V" como SEPARADOR, o array será retornado como: ****[Fa], [or]****
// EXEMPLO 2: Palavra/string "Bem-vindo": Se usado o hífen "-" como SEPARADOR, o array será retornado como: ****[Bem], [vindo]****
// EXEMPLO 3: Palavra/string "Exaltado": Se usada a letra "A" como SEPARADOR, o array será retornado como: ****[Ex], [lt], [do]****

// PARA ***GUARDAR*** UM ELEMENTO QUE FOI SEPARADO POR UM SEPARADOR, BASTA AO FINAL DE TER FEITO A SEPARAÇÃO, ***INDICAR O INDEX QUE SERÁ ATRIBUÍDO AO ELEMENTO DESEJADO
// EXEMPLO: Palavra/string "Bem-vindo", separada por "-", retornará [Bem], [vindo] e: ****split("-")[0] RETORNARÁ [Bem]

let totalGeral = 0;
limpar();

function adicionar () {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0]; 
    let valorUnitario = parseFloat(produto.split('R$')[1]);

    if (isNaN(quantidade) || quantidade <= 0) {
      alert('Por favor, insira uma quantidade válida.');
      document.getElementById('quantidade').value = '';
      return
    };

    let preco = quantidade * valorUnitario;

    //**** Logo aqui abaixo, foi feito algo "interessante" para manipular o **innerHTML** de um elemento que **NÃO TINHA ID** que eu não havia pensado antes.
    // Primeiramente, anteriormente a maneira que foi vista para pegar um objeto que não possuía um ID, mas era FILHO de um elemento que possuía um ID, era refenciando o elemento do ID (pegando o elemento pelo getElementById), depois, dele, usando **querySelector para finalmente captar o elemento que não possuía ID, seja por uma classe ou um atributo. O método usado abaixo foi algo mais simples, foi feito puramente pegando o elemento que possuía ID e **LITERALMENTE COLANDO TODO O HTML DENTRO DELE, NO INNERHTML, e assim editando só o que precisava ser editado!
    // Em segundo lugar, para **REPETIR O INNERHTML QUE JÁ FOI COLOCADO ANTERIORMENTE**, como se fosse o efeito de colocar elementos em um Array e exibí-los (como eu fiz na MINHA resolução do desafio acima), bastava **REDECLARAR** a variável.innerHTML, ****CONCATENANDO COM O RESTO DO CONTEÚDO COLOCADO NO INNERHTML**** fazendo assim com que o primeiro conteúdo quando o botão fosse clicado, fosse colocado na variável, fosse mostrado e, quando clicado novamente, fosse mostrado o elemento anterior E O NOVO CONTEÚDO ESCOLHIDO PELO USUÁRIO.
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    ;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';    
}

function limpar () {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}



// ------------------------ EXERCÍCIOS DO DESAFIO ------------------------



const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');
console.log(frasesSeparadas);



const numerosSeparados = "10,20,30,40,50";
const arrayNumeros = numerosSeparados.split(',');
console.log(arrayNumeros);
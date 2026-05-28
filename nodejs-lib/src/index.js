// ************** PROCESS.ARGV (ARGV = Argument Vectors, ou vetores de argumento. NOTA: Um vetor é um array) *************

// O método "process.argv" irá retornar um array e os elementos desse array serão os parâmetros passados na **ORDEM ESCRITA NA LINHA DE COMANDO DO TERMINAL**
// **** Ao executar com node, mostrando com console.log, receberemos um array com o **PATH** dos arquivos na ordem em que foram passados na linha de comando do terminal
// *** QUALQUER informação passada posterior à linha de execução do programa (node index.js) será TAMBÉM INCLUÍDA no Array, seja um arquivo, seja uma simples string

// ******** EXEMPLO: node index.js(arquivo a ser executado) teste(instrução EXTRA)
// O retorno será: ['path do NODE', 'path do index.js', 'teste']

// Logo, se o comando for atribuido a uma VARIÁVEL, posteriormente pode-se acessar determinado PATH passado na linha de comando através da variável e posição do arquivo no Array, podendo assim executar o arquivo via linha de código no terminal (desde que a ordem dos caminhos passados no terminal esteja de acordo com as variáveis atribuídas), ao invés de mudar manualmente o link no código toda vez que for preciso usar um arquivo diferente. O process.argv nos permite passar instruções para o terminal e essas instruções vão para um array e, já que está dentro de um array, conseguimos utilizar no código, facilitando a passagem do caminho do arquivo que queremos utilizar

// *** NOTA: Normalmente, o arquivo que queremos utilizar/processar no programa geralmente será o elemento de INDEX 2 do Array retornado pelo "process.argv", pois os dois primeiros (index 0 e 1) são destinados, respectivamente, ao PATH do node e do arquivo JS a ser executado, por causa da "ordem natural" para executar um arquivo no terminal com o node (EX: node index.js)

// *** NOTA 2: o "REQUIRE" serve para importar MÓDULOS (arquivos JS ou equivalentes), não arquivos




const caminhoArquivo = process.argv;
console.log(caminhoArquivo);

const link1 = caminhoArquivo[2];

console.log(link1);

// OU 

const link2 = process.argv[2];
console.log(link2);




// Alternadamente, pode-se passar o caminho diretamente em string à variável

// Exemplo de link/path com CAMINHO ABSOLUTO
const link3 = 'C:/Users/luuka/Documents/Estudos/alura-portfolios-logica-js/nodejs-lib/arquivos/texto-kanban.txt';
//console.log(link3);


// Levando em consideração o PWD, usando seu CAMINHO RELATIVO
const link4 = './arquivos/texto-kanban.txt';
//console.log(link4);





// Para "importarmos"/recebermos o arquivo, que é um arquivo ****DE TEXTO, DE EXTENSÃO .TXT****, em primeira instância, pode-se pensar em usar o método do node **REQUIRE**, porém o REQUIRE NÃO FUNCIONARÁ (mostrará o erro "MODULE_NOT_FOUND"), pois ele é um método que tentará pegar o conteúdo do arquivo e, de alguma forma, LER/EXECUTAR, porém o arquivo é simplesmente um arquivo DE TEXTO, .TXT

// * O REQUIRE funciona apenas com ***ARQUIVOS DE MÓDULO***, ou seja, arquivos JAVASCRIPT ou "EQUIVALENTES", como por exemplo um arquivo JSON.














// ************************************************************ RESUMINDO *****************************************************************
// No caso, o que foi feito acima com process.argv, foi um método simplificado para obter o PATH (caminho) de um arquivo via linha de código do terminal, para só ENTÃO o arquivo poder ser LIDO utilizando o ***MÓDULO FS*** abaixo, uma vez com seu PATH (link/caminho) "em mãos".














// **************************************************** BIBLIOTECA NODE "FS" *****************************************************************


// ********** O módulo "fs" (FileSystem) é um módulo nativo e essencial do NodeJS que permite a INTERAÇÃO DIRETA COM ARQUIVOS E DIRETÓRIOS, podendo, através de uma vasta gama operações, MANIPULAR arquivos de várias formas. Ele permite que aplicações JavaScript realizem operações de I/O (Input/Output - Entrada/Saída), manipulando arquivos e diretórios de forma eficiente.

// Dentre as opções, estão:

// * Leitura de arquivos
// * Escrita de arquivos: Criar novos arquivos ou sobrescrever o conteúdo de arquivos existentes
// * Adição de conteúdo: Anexar dados ao final de um arquivo
// * Manipulação de diretórios: Criar, ler remover diretórios
// * Exclusão: Remover arquivos
// * Renomeação: Mudar o nome de arquivos ou diretórios
// * Streams: Criar fluxo de leitura e escrita para lidar com arquivos grandes de forma performática











// O import também funciona para utilizar o módulo FS
// import fs from 'fs'



const fs = require('fs');


// Variável criada para meramente não precisar subir o arquivo todo para procurar de onde vem a variável link, caso precise. Mas, no caso, poderia-se apenas atribuir diretamente a variável "link (1, 2, 3 ou 4)" ao método readFile
const arquivo = link2;



// *************** Para então conseguirmos LER um arquivo (no caso atual, um arquivo de TEXTO) usa-se o método ***"READFILE"***, onde o método pede alguns parâmetros, que são eles:
// Parâmetro 1: Caminho/PATH do arquivo, representado pela variável "arquivo"
// Parâmetro 2 (ATENTAR): ENCODING (SE TRATANDO DE TEXTO), pois como se trata de um **TEXTO** (STRING), é importante sinalizar para o readFile saber DE QUE FORMA deve-se encodar a string com relação a caractéres
// Parâmetro 3: *Função Callback*, onde o primeiro parâmetro da CALLBACK se refere ao ERRO, onde caso ocorra, será sinalizado. O segundo parâmetro refere-se ao ARQUIVO/TEXTO propriamente dito, que é recebido pela variável "ARQUIVO", do primeiro parâmetro de readFile, onde então é mostrado via "console.log" dentro da instrução da função callback.



// ************ NOTA: Caso tentar retornar (DESSE JEITO) o código a uma variável, o retorno será **** UNDEFINED ****
fs.readFile(arquivo, 'utf-8', (erro, texto) => {
    separaEmParagrafos(texto);
});



// ********** NOTA: Lembrando da utilização do forEach, que executará o que estiver dentro do CALLBACK (assim como um loop), sem RETORNAR NADA.
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(" ");
    let resultado = {};

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            palavra = limpaPalavras(palavra);
            // Mesma coisa que usar condições "if" (como usado nos exemplos recriados abaixo), creio que por conta do "|| (OU)"
            resultado[palavra] = (resultado[palavra] || 0) + 1;
        };
    });

    return resultado;
};

function limpaPalavras (palavra) {

    
    // o *** REPLACE *** é um MÉTODO DE STRING onde funciona de forma PARECIDA com o método SPLICE, que é um MÉTODO DE ARRAY (o qual usei para a mesma lógica de retirar qualquer caractére especial: usando split para transformar uma palavra em um array de letras e então, dentro de um loop for, com uma condição para verificar se o caractére é um caractére especial, utilizando então o splice para removê-los e então juntar o array de letras usando join para que seja uma palavra novamente. Porém, o método DE STRING *REPLACE* faz a mesma lógica em uma string normal, sem precisar fazer todo o caminho com o splice, e também sem precisar colocar na condição de análise de "letras" a condição que verifica para TODOS os caractéres separadamente, tornando-o MUITO mais PRÁTICO para remover algum elemento de uma STRING).
    // O primeiro parâmetro, que está em REGEX (regular expression) é o (ou, no caso, os) caractére(s) a ser(em) removido(s) da substring
    // O segundo parâmetro é por qual o primeiro parâmetro será substituído
    // a combinação de caractéres usado no método é um REGEX
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
};


function separaEmParagrafos(texto) {
    let listaParagrafos = texto.toLowerCase().split("\n");

    // Explicação da lógica do uso do flatMap (fusão de FLAT com MAP, que também são métodos separados): substitui-se strings vazias por ARRAYS VAZIOS (caso o parágrafo iterado seja uma string vazia) e, como o método flatMap transforma arrays aninhados em um array só, restará apenas o array principal (NOVAMENTE: o strings vazias serão trocadas por arrays vazios e, por sua vez, os arrays vazios dentro do array principal serão removidos pelo flatMap).
    const contagem = listaParagrafos.flatMap(paragrafo => {

        if (!paragrafo) {
            return [];
        };

        return verificaPalavrasDuplicadas(paragrafo);
    });
    
    // ********** Modo bem LEGAL e AJEITADO de se ANINHAR MÉTODOS
    // const contagem = listaParagrafos
    //     .filter(paragrafo => {
    //         // NOTA: Neste array possuem STRINGS VAZIAS e, o papel do filter é eliminá-las filtrando apenas os elementos que possuem conteúdo
    //         // Sendo assim, STRINGS VAZIAS são consideradas um valor **FALSY** e, por isso, não entrarão no filter, fazendo com que os itens filtrados sejam apenas itens com conteúdo, por isso a instrução de retorno é simples (retornará apenas valores truthy, ou seja, que possuem conteúdo)
    //         return paragrafo;
    //     })
    //     .map(paragrafo => {
    //         return verificaPalavrasDuplicadas(paragrafo);
    // });


   

    // return contagem;
    console.log(contagem);
};



















// ********** TESTES PARA ESTUDO:

// Renomeando diretório aleatório na área de trabalho
// NOTA: A callback **PRECISA** existir e, mesmo que não seja colocado nenhum parâmetro ou não tenha nenhuma instrução dentro da callback, o método funcionará, mas a callback ainda assim PRECISA ser criada
// Exemplo:

// fs.rename('C:/Users/luuka/Desktop/pasta-teste', 'C:/Users/luuka/Desktop/pasta teste', () => {}); **AINDA FUNCIONARÁ
// fs.rename('C:/Users/luuka/Desktop/pasta teste', 'C:/Users/luuka/Desktop/pasta teste2', (err) => {
//     if (err) throw err;
//     console.log('Sucesso!');
// });

// * OBS: Caso for usar o código para teste de exemplo, lembrar de alterar os caminhos das pastas de exemplo, pois senão ocorrerá um erro.








// function verificaPalavrasDuplicadas(texto) {
//     const listaPalavras = texto.split(" ");
//     const resultado = {};

//     listaPalavras.forEach(element => {
//         if (!resultado[element]) {
//             resultado[element] = 1;
//         } else {
//             resultado[element]++;
//         }
//     });

//     console.log(resultado);
//     console.log(resultado.do, resultado.uma, resultado.web)
// };




// function verificaPalavrasDuplicadas(texto) {
//     const listaPalavras = texto.split(" ");
//     const resultado = {};

//     for (const element of listaPalavras) {
//         if (!resultado[element]) {
//             resultado[element] = 1;
//         } else {
//             resultado[element]++;
//         };
//     };

//     console.log(resultado);
//     console.log(resultado.do, resultado.uma, resultado.web);
// };









// *********** OBSERVAÇÕES***********


// * CAMINHO ABSOLUTO: Chamamos de caminho absoluto quando a localização de um arquivo ou pasta é especificado a partir do diretório-raiz do sistema operacional. Ou seja, quando o caminho COMPLETO é referenciado.
// Exemplo: C:\Users\usuario\Documents\Estudos\etc\etc


// * CAMINHO RELATIVO: Um caminho relativo para um diretório ou arquivo é definido a partir de sua relação com o pwd, ou seja, o present working directory (diretório de trabalho atual). Na linha de comando, pwd também é o comando print working directory (imprimir o diretório de trabalho), que usamos justamente para saber onde na estrutura do sistema operacional se encontra o diretório em que estamos.
// Exemplo: Considerando o PWD como "nodejs-lib", então, o caminho relativo do arquivo "texto-web.txt", seria ./arquivos/texto-web.txt


// Na estrutura de diretórios, o "." representa “aqui”. Quando queremos sair do diretório atual e “voltar” um nível, utiliza-se ".."






// ******** SOBRE O BLOCO TRY: O bloco 'try' delimita a seção de código que será monitorada quanto a possíveis erros durante a execução

// ******** SOBRE O BLOCO CATCH: É um objeto que contém informações sobre a exceção, como sua mensagem e tipo. O parâmetro do catch recebe o objeto de exceção lançado, permitindo acessar propriedades como 'message' e 'name'.

// ******** SOBRE O THROW: A palavra-chave throw interrompe o fluxo normal e transfere o controle para o catch mais próximo, passando o valor especificado.

// ******** SOBRE O BLOCO FINALLY: O bloco finally **SEMPRE IRÁ** executar, independente de haver erro ou não. O bloco finally sempre executa ***ANTES*** de a função retornar o valor do bloco try ou catch.




// A principal diferença entre throw 'Erro' e throw new Error('Erro'), em JavaScript, é que 'new Error' cria um objeto com propriedades úteis como a stack trace (rastreamento de pilha). Instanciar a classe Error fornece metadados sobre onde o erro ocorreu, enquanto lançar uma string envia apenas o texto.


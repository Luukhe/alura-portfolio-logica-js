// CLI Significa: * COMMAND LINE INTERFACE *, ou INTERFACE DE LINHA DE COMANDO (provavelmente, pelo meu entendimento, onde vão as funções principais)

// *** TER EM MENTE: "O PADRÃO DO JAVASCRIPT É TRABALHARMOS COM VÁRIOS ARQUIVOS ESPECIALIZADOS, com poucas linhas e funções dentro deles e IMPORTAR e EXPORTAR as funções entre si". O objetivo de organização dos projetos sempre terá como um dos princípios MODULARIZAR (separar em arquivos diferentes as funções que tratam de diferentes "assuntos", como funções de erro para arquivos próprios de erro, etc) o código, a fim de melhorar o entendimento e manutenção

// ************ MEGA IMPORTANTE SOBRE IMPORTAÇÃO/EXPORTAÇÃO DE MÓDULOS (IMPORT E REQUIRE): O método mais moderno e amplamente aceito hoje em dia é o **IMPORT** (conhecido como ES Modules ou ESM). Introduzido oficialmente no JavaScript em 2015 (ES6), ele se tornou o padrão oficial da linguagem.
// OU SEJA: NÃO USA-SE MAIS O MÉTODO "REQUIRE", USE AGORA APENAS IMPORT!!!!!!!!!!

// npm ini -y para instalar o package.json. Abrir o package.json e, embaixo da propriedae "main", adicionar: "type": module, para poder utilizar import/export


const caminhoArquivos = process.argv;

const link = caminhoArquivos[2];
// OU
// const link = process.argv[2];

// Para consultar os caminhos:
// console.log(caminhoArquivos);
// console.log(link);

const endereco = caminhoArquivos[3];

import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { separaEmParagrafos } from './index2.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';

// Biblioteca de linha de comando (instalada através de npm: npm install commander, e importada no import acima)
// O Commander.js (ou apenas Commander) é a biblioteca mais popular no ecossistema Node.js para CRIAR FERRAMENTAS DE LINHAS DE COMANDO (CLIs)
// É uma biblioteca muito útil para quem cria bibliotecas, pois dá ao desenvolvedor uma forma simples de criar flags (curtas e longas) na aplicação, validar se o usuário digitou os parâmetros certos (ou obrigatórios). O Commander serve especificamente para criar ferramentas CLI (Command Line Interface).
// O uso da biblioteca Commander para quem cria ou quer criar uma ferramenta de linha de comando (CLI) serve para facilitar a entrada de dados pelo usuário por meio de flags e argumentos customizados, além de gerar automaticamente uma interface de ajuda interativa e amigável quando houver dúvidas sobre como usá-la. Dessa forma, usam-se as flags para identificar o argumento que está sendo passado e, também, a ordem passada não fará diferença, desde que seja assinalado a flag correta correspondente, pois estarão sendo identificados pela flag.
const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho do local onde salvar o arquivo de resultados')
    // 'options' será um objeto com as chaves correspondentes às flags passadas via terminal que foram configuradas em option, juntamente com o valor passado na linha de comando junto com as flags. exemplo: node .\src\cli.js -t abcd, o objeto será: {texto: 'abcd'}
    .action(options => {
        const { texto, destino } = options;
        // const {texto} = options;
        // const texto = options;
        // const {destino} = options;
        // const destino = options;
        // console.log(texto)
        // console.log(texto.texto)
        // console.log(destino)
        // console.log(options)
        
        // Valida se ambas as opções de input (caminho e destino) foram corretamente inseridas pelo usuário
        if (!texto || !destino) {
            // PS: Chalk é uma biblioteca usada para literalmente PINTAR as mensagens no terminal como quisermos. Insta-alse via NPM
            console.error(chalk.redBright('Erro: favor inserir caminho de origem e destino'))

            // O help cria/mostra uma interface no terminal que ajuda/mostra as opções disponíveis para o uso da biblioteca. No caso aqui (com a condição imposta), caso dê um erro (de alguma forma o usuário não preencha de forma correta a linha de comando) mostrará as OPTIONS citadas acima, ou seja, as flags (curtas e longas), e a descrição para que serve a flag. Alternadamente, também pode-se usar a flag curta "-h" ou a flag longa "--help" para acessar as mesmas informações.
            // Resumo: Usar a string direta de options funciona na maioria dos casos simples, mas usar path.resolve() evita bugs sutis de caminhos errados, previne erros entre Windows e Linux e garante que o seu script CLI funcione com segurança em qualquer pasta do terminal.
            program.help();
            return;
        };

        // A principal diferença entre usar path.resolve() e usar o caminho diretamente vindo do objeto "options" é que o caminho que vem do options é apenas uma string bruta (ex: "./meu-arquivo.txt"), enquanto o path.resolve() transforma essa string em um caminho absoluto e seguro para o sistema operacional. Se você repassar essa string bruta para outras partes do código ou funções assíncronas que mudam de diretório, o Node pode tentar procurar esse arquivo no lugar errado. Ao aplicar o path.resolve(), o Node converte essa string no caminho absoluto completo, considerando a pasta atual onde o comando foi executado.
        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        // const caminhoTexto = texto;
        // const caminhoDestino = destino;

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            // PS: Chalk é uma biblioteca usada para literalmente PINTAR as mensagens no terminal como quisermos. Insta-alse via NPM
            console.log(chalk.greenBright('Texto processado com sucesso.'));
        } catch(erro) {
            console.log(erro);
        }
    })
;


function processaArquivo(texto, destino) {
    // 1. Lê o arquivo para posteriormente ser criado
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;
            //console.log(separaEmParagrafos(texto));
            const resultado = separaEmParagrafos(texto);
    
            // Chamada da função que cria o arquivo
            criaESalvaArquivo(resultado, destino);
        } catch(erro) {
            // if (erro.code === 'ENOENT') console.log('Arquivo não encontrado');
            // else console.log('Outro erro.');
    
            // Código acima foi transportado para uma função separada em um arquivo destinado a tratamento de erros
            trataErros(erro);
        };
    });
}


// 2. Criação do arquivo
async function criaESalvaArquivo(resultado, endereco) {
    // Arquivo a ser criado (passar o caminho e a extensão do arquivo). O caminho está sendo passado como TERCEIRO PARÂMETRO NA LINHA DE COMANDO (terminal), entrando no process.argv. Pode-se alternadamente passar o caminho inteiro no terminal (pois aqui a parte "resultado.txt" já está escrita), podendo pular a parte da criação da variável e passando diretamente o parâmetro da função "criaESalvaArquivo" para a função do "writeFile".
    const enderecoArquivo = `${endereco}/resultado.txt`;
    // Como está sendo criado um documento de TEXTO (.txt), o conteúdo (que é um ARRAY de objetos JavaScript) precisa ser CONVERTIDO em string/texto comum para que seja lido/entendido pelo arquivo txt. **ACHISMO: Logo, muito provavelmente, posteriormente trabalhando com outros tipos de arquivos e extensões que sejam criados com o "writeFile", precisaria-se de bibliotecas externas para fazer a conversão do conteúdo
    // const resultadoParaStr = JSON.stringify(resultado);

    // Posteriormente na aula, essa função substituiu o método JSON.stringify usado anteriormente, pois essa função, que é o retorno definitivo do programa, já é retornado uma STRING
    const resultadoParaStr = montaSaidaArquivo(resultado);

    try {
        // writeFile não retorna nada, ele simplesmente escreve um arquivo.
        // O await só sabe "esperar" por algo se esse algo for uma Promise. O problema é que a função de escrita padrão do módulo fs não retorna uma Promise. Sem a declaração da promise, o await não faria o efeito desejado. A função fs.writeFile tradicional retorna undefined quase instantaneamente enquanto faz o trabalho em segundo plano. Sem receber uma Promise de volta, o await não tem nada para esperar, e o seu código passaria direto para o console.log('Arquivo criado.') antes mesmo do arquivo terminar de ser salvo.
        await fs.promises.writeFile(enderecoArquivo, resultadoParaStr);
        
        console.log('Arquivo criado.');
    } catch(e) {
        throw e;
    };
};


// O .parse() é quem realmente lê o que o usuário digitou no terminal, processa essas informações e executa a ação correspondente. O parse recebe o ARRAY DE ARGUMENTOS (process.argv).
// Separa o joio do trigo (Parsing): Analisa a lista de textos recebidos e identifica o que é o caminho do Node, o nome do arquivo, os subcomandos, as flags/opções (-n, --nome) e os argumentos posicionais.
// Valida a entrada: Verifica se todas as opções obrigatórias foram preenchidas e se os tipos informados estão corretos.
// Executa atalhos embutidos: Se o usuário passou --help ou --version, o Commander intercepta, exibe a ajuda/versão no terminal e encerra o programa imediatamente.
// Dispara a ação (.action()): Encontra o comando correto e chama a função de callback associada a ele, passando as opções já organizadas como um objeto JavaScript limpo.
// O uso da biblioteca Commander para quem cria ou quer criar uma ferramenta de linha de comando (CLI) serve para facilitar a entrada de dados pelo usuário por meio de flags e argumentos customizados, além de gerar automaticamente uma interface de ajuda interativa e amigável quando houver dúvidas sobre como usá-la. Pode-se sempre usar a flag --help (ou -h) para que sejam analisadas as possibilidades.
program.parse();













// -------------------------------------------------------------------------------------










// ********OBS: O conteúdo/corpo de uma função "async" será síncrono até que esbarre em um AWAIT! Qualquer coisa após o await vira assíncrono e é mandado à Microtask Queue (a fila de Promises). Portanto, a partir do momento em que você coloca um await, todo o código restante dentro daquela função passa a se comportar de maneira assíncrona.

// ** Em uma função que tenha uma Promise (um axios, por exemplo) que esteja usando a sintaxe padrão .then() e .catch() (que no caso NÃO esteja usando ASYNC/AWAIT) APENAS A PROMISE SERÁ ASSÍNCRONA: apenas o código que está dentro das chaves { ... } do callback do .then() é que se torna assíncrono. Logo, tanto a função quanto os demais conteúdos dela (fora a Promise) serão lidos de forma SÍNCRONA. Diferentemente quando há o uso do ASYNC/AWAIT, pois quando o JavaScript encontra a palavra await, ele literalmente PAUSA o estado daquela função e a joga para escanteio, fazendo com que tudo após o await seja assíncrono.

// Você precisa do .promises para gerar a Promise, e precisa do await para esperar essa Promise ser concluída. Um não substitui o outro; eles formam uma parceria necessária para que o código assíncrono funcione de forma sequencial e legível.

// Quando usamos o .then(), nós não conseguimos simplesmente "salvar" o resultado final diretamente em uma variável fora dali da mesma forma que fazemos com o await. *Apenas pode-se atribuir o resultado a uma variável se a "execução" dos dados que queremos processar for feita DENTRO do .then()

// 2. Retornar a própria Promise
// O .then() sempre retorna uma nova Promise. Então você pode atribuir a requisição a uma variável, mas o que guardará ali não é o "dado" puramente, e sim a promessa de um dado. Para pegar o valor depois, você terá que usar .then nela de qualquer forma.

// Essencialmente, funções CALLBACK são funções que são um passo a se fazer QUANDO A FUNÇÃO PRINCIPAL TERMINAR DE EXECUTAR A TAREFA PRINCIPAL.
// Uma função callback é uma função que você passa como argumento para outra função, para que ela seja chamada quando uma tarefa for concluída. É muito útil para fazer operações ASSÍNCRONAS, como fazer requisições de rede, ler arquivos, ou qualquer coisa que leve tempo para ser concluída.
// // Callbacks são muitos importantes para, principalmente, ter-se uma LÓGICA DE FUNCIONAMENTO do sistema, algo que é disparado DEPOIS que se termina o código principal.
// Funções callback são a forma “pré-ES6” de o JavaScript manejar operações assíncronas. Internamente, o funcionamento de uma função callback envolve a chamada (ou execução) da função interna após a finalização da função mais externa, quando os dados resultantes são passados como parâmetro.

// fs.readFile('/pasta/texto.txt', (erro, texto) => {
//   if (erro) throw erro;
//   console.log(texto);
// });

// No código acima, o método fs.readFile é executado com o parâmetro '/pasta/texto.txt'. Após o término desse primeiro processamento, os dados retornados pelo método são passados via parâmetro (texto em caso de sucesso ou erro em caso de erro) para dentro da função callback anônima.

// Dessa forma, é possível afirmar que a função callback “aguarda” a finalização da função externa para somente então executar com os dados recebidos por parâmetro.







// Todo retorno de uma função async é SEMPRE uma Promise. No momento em que você coloca a palavra async antes de uma função, você está fazendo um pacto com o JavaScript: "O retorno desta função será envelopado em uma Promise". Mesmo que você retorne um texto simples, um número ou até mesmo nada (undefined), o JavaScript vai pegar esse valor e embrulhar dentro de uma Promise já resolvida.

// Apenas o retorno (sem await) vira assíncrono. Tudo dentro de uma função async roda de forma síncrona (linha por linha, imediatamente) até o momento em que o JavaScript encontra a primeira operação genuinamente assíncrona (como um fetch, uma leitura de arquivo) ou o fim da função (onde ela retorna a Promise).

// Se a última linha da sua função é um return de uma promessa, você não precisa colocar await ali. Você pode simplesmente despachar a promessa para quem chamou resolver. No final, quem chamar a função vai ter exatamente o mesmo trabalho: usar um await ou um .then() do lado de fora para pegar o retorno.

// Quem está dentro de uma função async e usa return sempre despacha uma Promise. Não importa se você deu return "Carlos", return 42 ou return await buscarNoBanco(). Para quem está do lado de fora, o resultado chega dentro de um "embrulho" (a Promise). Quem está do lado de fora sempre precisará "abrir o embrulho". E as duas únicas ferramentas que o JavaScript te dá para abrir esse embrulho e pegar o valor real são o .then() ou o await.

// Use await DENTRO da função: Quando os próximos passos daquela mesma função dependem do resultado da linha anterior.

// Use await FORA da função: Quando quem chamou a função precisa do resultado final dela para continuar o seu próprio trabalho.

// npm ini -y para instalar o package.json. Abrir o package.json e, embaixo da propriedae "main", adicionar: "type": module, para poder utilizar import/export






// Qual método utilizar?

// As promessas são a forma mais “moderna” de trabalhar com operações assíncronas em JavaScript, possibilitando a escrita de código mais limpo, legível e desacoplado.

// Callbacks ainda podem ser (e são) utilizadas, especialmente em contextos nos quais as funções devem executar tarefas mais simples, ou seja, sem tratamento complexo de erro e sem encadeamento de funções. Além disso, há muitas bibliotecas que utilizam “código legado” composto por funções callback, que ainda podem ser utilizadas.

// Já Promises, além de serem a opção mais atual e moderna, têm uma forma mais estruturada de fazer o tratamento de erros com try/catch, uma estrutura que facilita o encadeamento de funções quando necessário (com o uso do then) e também permitem código mais limpo e organizado com async/await. Assim, podem ser utilizadas de forma mais produtiva quando é necessário lidar com fluxos assíncronos mais complexos e tratamento de erros mais robusto.





// Sempre que vamos trabalhar com um projeto em Node.js do zero, uma das primeiras coisas que fazemos é criar um arquivo package.json utilizando o comando npm init; assim como para todas as instalações de libs externas utilizamos o comando npm install <nome do pacote>.

// ********************** SOBRE NPM: O npm (NODE PACKAGE MANAGER) é um REPOSITÓRIO DE CÓDIGO ESPECÍFICO DO NODE, assim como o GitHub também é um repositório de código. Porém, o npm é um repositório de PACOTES DO NODE, ou seja, podemos encontrar e hospedar tanto bibliotecas simples, como bibliotecas e frameworks mais completos. Diferentes linguagens tem seus gerenciadores/managers específicos e, no caso do Node, trabalha-se com o NPM e também com um outro chamado "yarn". O NPM é instalado por padrão juntamente com o node. Então, basicamente, quando instalamos uma biblioteca via NPM, estamos acessando o REPOSITÓRIO da biblioteca na internet, que está HOSPEDADO no NPM

// NOTA: Nota-se que quando queremos, no terminal, usar o node para executar algum arquivo/script, utilizamos a palavra node antes. Quando queremos utilizar o git, usamos a palavra git no começo para realizar determinada ação com o git. Logo, com o NPM será a mesma coisa.

// O NPM É BASICAMENTE UM GITHUB (UM REPOSITÓRIO ONLINE), SÓ QUE VOLTADO PARA BIBLIOTECAS ESPECÍFICAS DO NODE!!!

// Uma biblioteca pode precisar de OUTRAS bibliotecas para complementá-las e funcionar. É muito comum que um pacote que instalamos “puxe” um ou vários outros pacotes auxiliares que ele precisa para funcionar internamente, o que pode acabar “inflando” a pasta do node_modules. Algumas libs e frameworks mais complexas vão solicitar que a instalação seja feita globalmente para funcionar. Sempre vale a pena consultar a documentação de cada uma. Para fazer uma instalação global de pacotes, utilizamos os comandos npm install -g <nome do pacote> ou yarn add global <nome do pacote>

// ************* PASTA NODE_MODULES: A pasta node_modules é para onde vão as bibliotecas externas que instalamos remotamente VIA NPM
// A PASTA NODE MODULES SÓ INTERESSA LOCALMENTE (ONDE O PROJETO ESTÁ INSTALADO E RODANDO), POR ISSO, DEVE SEMPRE SER INCLUÍDA NO GITIGNORE, POIS DEPENDENDO DO TAMANHO/COMPLEXIDADE DO PROJETO, AS BIBLIOTECAS INSTALADAS PODEM PESAR O REPOSITÓRIO A DEPENDER DA COMPLEXIDADE DO CÓDIGO.
// AS BIBLIOTECAS EXTERNAS INSTALADAS SÃO GRAVADAS NOS ARQUIVOS DE PACKAGE-LOCK E PACKAGE.JSON, PODENDO APENAS DIGITAR "NPM INSTALL" PARA QUE TODAS SEJAM INSTALADAS EM CASO DE O PROJETO SER ABERTO EM OUTRO DISPOSITIVO



// RESOLUÇÃO DA IA SOBRE O ASSUNTO:

// 1. O NPM possui duas partes: a CLI (ferramenta de linha de comando) e o NPM Registry (repositório online).
//    - O npm já vem instalado por padrão com o Node.js.
//    - Existem outros gerenciadores alternativos que consomem o mesmo repositório, como Yarn e pnpm.
//    - O npm hospeda pacotes para todo o ecossistema JavaScript (tanto para Node.js no backend quanto para frameworks front-end como React/Vue).

// 2. Diferença entre GitHub e npm:
//    - GitHub guarda o CÓDIGO-FONTE em desenvolvimento e histórico de edições.
//    - npm Registry guarda o PACOTE PRONTO (compilado/distribuível) para ser instalado por outros projetos.

// 3. Pasta `node_modules`:
//    - Armazena o código de todas as dependências baixadas localmente.
//    - NUNCA deve ser enviada para o GitHub (deve estar no .gitignore) para não poluir nem pesar o repositório.
//    - Para rodar o projeto em outra máquina, basta clonar o repositório e executar `npm install`. Esse comando lê a lista de dependências no `package.json` e baixa tudo automaticamente de uma só vez.











// Teste do método writeFile sem promise (com callback, pois no método com a promise não existe callback)
//fs.writeFile("C:/Users/luuka/Desktop/testandooo.txt", 'teste', 'utf-8', () => {})


// Throw no try é mais pra identificar um erro específico e mandar pro catch tratar o erro. Aparentemente (até o meu entendimento de agora), se o erro já for "tratado" no try, o catch apenas repassaria (via consolelog, return etc) o erro.

// try {
//     const usuario = {}

//     if (!usuario.name) {
//         throw new Error('erro')
//         //throw e
//     }
    
// } catch (e) {
//     console.log(e);
//     // throw new Error('erro')
// }
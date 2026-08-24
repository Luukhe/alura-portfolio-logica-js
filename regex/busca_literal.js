// REGEX NO TERMINAL BASH:
// O regex é processado pelo Regex Engine, que está presente em várias linguagens de programação. A ferramenta/busca só consegue ser feita pois existe essa engine rodando por trás.

// REGEX NO TERMINAL LINUX (BASH): Pode-se também usar REGEX no TERMINAL BASH, usando "grep" (Global Regular Expression Print), que recebe dois "parâmetros":
// 1. O REGEX (padrão a ser pesquisado)
// 2. O arquivo/destino o qual pesquisar

// Exemplo: grep Anna ./database.csv

// FLAGS:
// *** IMPORTANTE: --help: para listarmos todas as flags diretamente no terminal, pode-se usar a flag --help, exemplo: grep --help

// grep -n: Retorna, juntamente com o resultado pesquisado, a LINHA em que a ocorrência se encontra
// Exemplo: grep -n Anna ./database.csv

// grep -i ou --ignore-case: Ignora a diferenciação entre maiúsculas e minúsculas, tornando a pesquisa insensível a letras maiúsculas ou minúsculas.
// grep -v ou --invert-match: Inverte a correspondência, exibindo linhas que não contêm o padrão especificado.
// grep -r ou -R ou --recursive: Realiza uma pesquisa recursiva em diretórios e seus subdiretórios. Útil para encontrar padrões em árvores inteiras de diretórios.
// grep -l ou --files-with-matches: Exibe apenas os nomes dos arquivos que contêm correspondências, em vez das próprias linhas correspondentes.
// grep -c ou --count: Exibe apenas o número de correspondências em cada arquivo, em vez das próprias linhas correspondentes.
// grep -n ou --line-number: Exibe o número da linha junto com as linhas correspondentes.
// grep -E ou --extended-regexp: Interpreta o padrão de pesquisa como uma expressão regular estendida (Regex) em vez de uma correspondência literal.
// grep -f <arquivo> ou --file=<arquivo>: Lê os padrões de pesquisa de um arquivo em vez de especificá-los diretamente na linha de comando.
// grep -h ou --no-filename: Suprime a exibição dos nomes dos arquivos ao imprimir as linhas correspondentes.
// grep -P : habilita o modo de interpretação de padrões como expressões regulares Perl (Perl-Compatible Regular Expressions ou PCRE). Isso significa que você pode usar padrões de expressões regulares mais avançados e complexos com a flag -P. As expressões regulares Perl são mais poderosas e flexíveis do que as expressões regulares básicas usadas pelo grep por padrão. No entanto, nem todas as versões do grep suportam a opção -P, pois ela depende da biblioteca PCRE (Perl-Compatible Regular Expressions). Portanto, verifique a disponibilidade dessa opção na versão específica do grep em seu sistema.
// man grep: é uma opção que apresenta toda a documentação do grep no terminal.



// Outra abordagem para a construção de padrões é com o uso de POSIX (Portable Operating System Interface for Unix, Interface de Sistema Operacional Portátil para Unix). O POSIX é uma padronização que define algumas funcionalidades suportadas por sistemas operacionais baseados em UNIX e garante a comunicação universal entre os sistemas. As expressões entre colchetes, conhecidas como "bracket expressions," são utilizadas nas expressões regulares POSIX para corresponder a categorias específicas de caracteres. Elas simplificam a criação de padrões de correspondência personalizados com base em categorias de caracteres, em vez de caracteres individuais.

// POSIX
// Bracket Expression	    Significado

// [[:digit:]]	           Qualquer dígito.
// [[:alpha:]]	           Qualquer caractere alfabético.
// [[:alnum:]]	           Qualquer caractere alfanumérico.
// [[:blank:]]	           Espaço em branco ou caractere de tabulação.
// [[:space:]]	           Qualquer caractere de espaço em branco.
// [[:lower:]]	           Qualquer letra minúscula.
// [[:upper:]]	           Qualquer letra maiúscula.
// [[:print:]]	           Qualquer caractere imprimível, incluindo espaços.
// [[:punct:]]	           Qualquer caractere de pontuação.
// [[:graph:]]	           Qualquer caractere imprimível, excluindo espaços.
// [[:xdigit:]]	           Qualquer dígito hexadecimal (0-9, a-f, A-F).
// [[:cntrl:]]	           Qualquer caractere de controle.






// REGEX NO TERMINAL WINDOWS (POWERSHELL): Já no powershell, o comando para ativar o regex engina é o "findstr", juntamente com a flag "/r"
// Exemplo: findstr /r Anna arquivo.csv

import fs from 'fs';

// Diferentemente do readFile (que é assíncrono usando callback), o readFileSync não usa callbacks e é possível obter o retorno logo em seguida e conseguir usar um console.log (diferente do readFile) pois, como diz o nome da função, esse é um método SÍNCRONO. Logo, console.log só será executado após readFileSync acabar, o que permite ser mostrado (novamente, diferente do readFile assíncrono que só será "retornado" após o código síncrono, fazendo com que não seja possível logar o resultado)
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');
const regex = /Anna/;
// Importante se atentar: match é um método de STRING. Porém, assim como outros métodos, também aceita buscas/é utilizado com as REGEX
const matchRegex = banco.match(regex);

console.log(matchRegex)



// OBS: A busca como está sendo feita neste arquivo, no caso, a regex que está na variável "regex", é considerada uma BUSCA LITERAL.
// Em JavaScript, uma busca literal (ou padrão literal) usando Expressões Regulares (RegEx) acontece quando você define a regex diretamente no código entre duas barras (/), sem usar construtores ou strings intermediárias. Se você precisar criar uma busca a partir de uma variável (algo digitado pelo usuário, por exemplo), a busca literal não funciona diretamente.
// Exemplo: const regexLiteral = /javascript/i;





// ----- * DIFERENÇA ENTRE ARQUIVO TXT E ARQUIVO CSV * -------

// A diferença fundamental é a estrutura e o propósito de cada um, embora ambos sejam arquivos de texto puro (texto simples, sem formatação de fonte, cores ou estilos).

// Arquivo .txt (Texto Comum)
// Estrutura: Não estruturado ou livre. O conteúdo é apenas uma sequência de caracteres dispostos em linhas, sem nenhuma regra obrigatória de organização.
// Uso principal: Bloco de notas, anotações rápidas, logs de sistema, e-mails simples, documentações ou leituras gerais por humanos.

// Arquivo .csv (Comma-Separated Values)
// Estrutura: Estruturado em tabela (linhas e colunas). Cada linha do arquivo representa um registro/linha de uma tabela, e cada coluna é separada por um delimitador (geralmente uma vírgula , ou ponto e vírgula ;).
// Uso principal: Transferência e armazenamento de dados tabulares entre diferentes programas (como exportar uma planilha do Excel para importar em um banco de dados ou script em Python/JavaScript).










// Metacaracteres em Regex
// Metacaractere	                Significado

//      .	                Qualquer caractere, exceto quebras de linha.
//      *	                Zero ou mais ocorrências do caractere ou grupo anterior.
//      +	                Uma ou mais ocorrências do caractere ou grupo anterior.
//      ?	                Zero ou uma ocorrência do caractere ou grupo anterior.
//      |	                Alternância, corresponde a um dos padrões à esquerda ou à direita.
//      ()	                Grupo de captura, agrupa caracteres para aplicar metacaracteres a eles.
//      []	                Classe de caracteres, corresponde a qualquer caractere dentro dos colchetes.
//      [^]	                Classe de caracteres negada, corresponde a qualquer caractere que não esteja dentro dos colchetes.
//      ^	                Âncora de início de linha, exige que o padrão comece exatamente no início da string.
//      $	                Âncora de final de linha, exige que o padrão termine exatamente no fim da string.
//      \	                Escape, permite escapar metacaracteres para correspondê-los literalmente.
//      {}	                Quantificador personalizado, especifica o número exato ou faixa de repetições.

// Esses são alguns dos metacaracteres mais comuns usados em expressões regulares para criar padrões de correspondência flexíveis e poderosos em texto.


// Shorthands são atalhos para definir classes de caracteres comuns. Vamos analisar a tabela de exemplo a seguir:

// Regex	        Descrição	                               Correspondência
// \d	    Qualquer dígito decimal	"                           0", "7", "9"
// \D	    Qualquer caractere que não seja um dígito	        "a", "B", "!"
// \w	    Qualquer caractere alfanumérico	                    "A", "b", "0"
// \W	    Qualquer caractere que não seja alfanumérico	    "!", "@", " "
// \s	    Qualquer caractere de espaço em branco	            " ", "\t", "\n"
// \S	    Qualquer caractere que não seja espaço em branco	"a", "B", "9"
















// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// console.log(paragraph.search('q'));
// console.log(paragraph);

// const str2 =
//   "My grandfather is 65 years old and My grandmother is 63 years old.";
// ;

// console.log(str2[0]);
// console.log(str2.match(/[a-z. 0-9]/gi));
// console.log(str2.match(/[a-z. 0-9]/gi).length);
// console.log(str2.length);
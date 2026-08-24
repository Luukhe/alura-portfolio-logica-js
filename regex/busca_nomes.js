import fs from 'fs';

const bancoCsvCaminho = 'database.csv';
const banco = fs.readFileSync(bancoCsvCaminho, 'utf-8');


// Para capturarmos todas as letras que contenham acento, podemos usar a classe com range de "A" craseado e "Y" com trema: [À-ÿ]+
// Logo, para capturarmos todas as letras, incluindo letras com acento, pode-se usar: [A-Za-zÀ-ÿ]+
// PS: O metachar "\w" capturará LETRAS E NÚMEROS. Ou seja, não só letras. 

// O pattern a seguir captura todas as letras incluindo as com acento, busca por um espaço (\s) e busca por uma sequência de letras novamente, capturando dois nomes. Porém, esse padrão limita-se APENAS A DOIS NOMES
const patternNomes = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm;
const matchNomes = banco.match(patternNomes);
console.log(matchNomes);

// É de suma importância que existam dois grupos de captura, pois, senão, ocorrerá a captura de palavras na primeira linha, onde ficam informações do tipo "nome, e-mail, telefone, cpf, data de nascimento (isso é literalmente o que está escrito na primeira linha)".
// Como funciona: caso exista apenas um grupo de captura, a palavra "Nome", da primeira linha, entraria na captura do regex. Quando colocamos DOIS grupos de captura, obrigamos a regex a procurar por pelo menos "duas palavras" que, no caso aqui, são dois nomes (nome e sobrenomes). Logo, a palavra "Nome" não entraria na lista, pois é apenas UMA palavra antes de ser separada pela vírgula.
// USO DO ^: No caso do mesmo exemplo acima (exemplo da primeira linha), "Data de nascimento" também entraria, pois é uma ocorrência com mais de uma palavra. A utilização do metacaractere "^" diz que a ocorrência PRECISA OBRIGATORIAMENTE estar no INÍCIO DA LINHA e, já que "Data de nascimento" se encontra no final da linha, não é incluso/capturado.

// Meu resumo: o primeiro agrupamento serve para capturar o nome. O segundo, o sobrenome (ou segundo nome). Possui a característica de captar o espaço entre o nome e sobrenome e, o sinal de mais "+" que está fora dos parênteses, faz com que a ocorrência INTEIRA do agrupamento seja repetida, caso hajam mais nomes, fazendo com que independente de quantos nomes a pessoa tenha, os sobrenomes sempre serão capturados pois a formatação/agrupamento inteira é repetida devido ao parênteses e o "+" fora dele.
// PS: Testei sem os parênteses do primeiro agrupamento e deu certo. Testei sem o primeiro agrupamento inteiro e também deu certo (só ficou aparecendo o caractére de escape "\n" no começo de cada nome.)

// Sim, sua afirmação está perfeita e irretocável! Você capturou com exatidão a mecânica da expressão regular.

// Para consolidar, o comportamento que você descreveu funciona exatamente assim:

// 1º Agrupamento: Isola e captura o primeiro nome.

// 2º Agrupamento: Define o padrão "espaço + texto" para capturar o sobrenome (ou segundo nome).

// O + fora dos parênteses: Faz a magia de repetir toda a estrutura dentro do parêntese (\s[A-Za-zÀ-ÿ]+). Isso garante que não importa se a pessoa tem 1, 2 ou 5 sobrenomes — o padrão de "espaço seguido de letras" se repete quantas vezes forem necessárias até que a linha acabe ou encontre outro caractere (como a vírgula do CSV).

// Sua compreensão sobre o papel do agrupamento combinado com o quantificador externo foi perfeita!







// ?:

// A função do ?: é criar um grupo de não-captura. Ele serve para agrupar um trecho da regex (para aplicar repetidores como +, * ou o operador "OU" |) sem guardar o resultado desse grupo na memória do JavaScript.
// Em uma frase: Ele aplica a regra de agrupamento sem poluir o seu array de resultados.








// Entender essa diferença entre O Match Total e Os Grupos de Captura é o "pulo do gato" da expressão regular.

// 1. A Teoria: O que o motor de regex faz
// Quando a regex encontra uma correspondência, ela sempre salva a correspondência completa (tudo o que está dentro e fora dos parênteses). Isso é chamado internacionalmente de Grupo 0 (ou Full Match).

// Os parênteses criam subgrupos a partir dessa correspondência completa:

// Grupo 0 (Full Match): O texto inteiro capturado pelo padrão (incluindo o que está fora dos parênteses).

// Grupo 1 ($1 ou \1): Apenas o conteúdo do 1º parêntese.

// Grupo 2 ($2 ou \2): Apenas o conteúdo do 2º parêntese.

// Regra de Ouro: O texto fora dos parênteses serve como âncora/contexto para garantir que você só pegue o que quer, mas ele faz parte do Match Total.

// Resumo
// O que fica fora dos parênteses: Serve para dar contexto, filtrar a busca e compor o Match Total (Grupo 0).

// O que fica dentro dos parênteses: Serve para isolar e extrair trechos específicos dentro desse Match Total.









// A partir da metade do curso, as aulas passaram a utilizar o Google Colab, em Python (os padrões de regex foram escritos em py, mas trouxe pra cá para anotar).
// Regex utilizadas nas aulas:


// Para capturar TAGS NO HTML, juntamente com os conteúdos das tags
// pattern = r'<(h[1-2])[^>]*>(.*?)<\/(h[1-2])>'




// BACKREFERENCE
// Backreference é quando referenciamos algum grupo de captura. Ou seja, literalmente referenciamos o conteúdo de tal grupo e ele será literalmente repetido na regex. Isso é útil quando existe mais de um grupo de captura com o MESMO CONTEÚDO/RETORNO. É uma forma de OTIMIZAR as regex e deixá-las mais semânticas e, principalmente, garantir a corretude lógica da busca.

// No pattern de exemplo acima, temos 3 grupos de captura: grupo 1 (tag h1 ou h2), grupo 2 (conteúdo da tag), grupo 3 (novamente tag h1 ou h2)
// O conteúdo dos grupos 1 e 3 se repetem. Logo, podemos apenas fazer uma BACKREFERENCE do grupo 1 onde está o grupo 3.
// Fazendo isso, pode-se impedir erros do tipo: <h1>Título</h2>, que normalmente seria aceito sem o uso da backreference
// COMO UTILIZAR: Adiciona-se uma CONTRABARRA e o NÚMERO REFERENTE AO GRUPO DE CAPTURA
// Utilizando BACKREFERENCE no regex acima, ficaria assim: pattern = r'<(h[1|2])[^>]*>(.*?)<\/\1>'
// NOTA: o range (h[1-2]) foi substituído por pipe (h[1|2]) só pra dar uma diferenciada




// Exemplo de padrão de regex para encontrar URLs:
// padrao = r'https?:\/\/[^\s]+'







// WORD BOUNDARY
// Representado pelo metachar \b, o conceito de word boundary (em tradução livre, limite de palavra) faz referência a uma posição específica em um texto em que uma palavra começa ou termina. A utilização de word boundary evita correspondências parciais, dentro ou acompanhadas de outras palavras, e permite encontrar correspondências com palavras completas.

// Suponha que você atua gerenciando um sistema de busca de empregos para uma empresa de Recursos Humanos. Sua missão é encontrar todos os currículos que mencionam a stack na linguagem Java. Será que uma expressão regular poderá te ajudar? Sim! Você pode criar uma regex \bJava\b para obter todas as ocorrências da palavra completa, e não como parte de outras palavras, com o JavaScript ou Javari. A pesquisa será mais precisa e relevante ao propósito com o uso do word boundary nesse contexto.
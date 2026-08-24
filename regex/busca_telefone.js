import fs from 'fs';

const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

// Pattern que procura por todos os números de telefone de uma forma geral:
// Dica de estudo: Como o quantificador "+" aceita qualquer quantidade de números (1 ou mais), essa regex atual aceitaria formatos inválidos como (123456) 1-2. Se quiser limitar a quantidade exata de dígitos (ex: 2 dígitos no DDD, 4 ou 5 na primeira parte e 4 na segunda), usam-se chaves {} no lugar do +
const regexTelefone = /\(\d+\)\s\d+-\d+/g;
const matchTelefone = banco.match(regexTelefone);
console.log(matchTelefone);

// Pattern que procura de forma específica por números de telefone (obtém o mesmo resultado que o pattern de pesquisa geral, porém, é mais específico)
const regexTelefoneEspecifico = /\(\d{2}\)\s\d{4,5}-\d{4}/g;
const matchTelefoneEspecifico = banco.match(regexTelefone);
console.log(matchTelefoneEspecifico);

// Pattern regex que inclui apenas números de celular
const patternDeCelular = /\(\d{2}\)\s\d{5}-\d{4}/g;
const matchCelular = banco.match(patternDeCelular);
console.log(matchCelular);




// Fora dos colchetes (Ponto não literal / Wildcard): É um caractere curinga. Ele casa com qualquer caractere (letras, números, símbolos, espaços), exceto quebras de linha. Ou seja, o PONTO NÃO LITERAL pode representar QUALQUER CARACTÉRE (até símbolo) que não seja uma quebra de linha.

// Exemplo prático: Se você testar a regex /a.c/ contra diferentes textos:
// "abc" -> Combina (o . casou com a letra b)
// "a1c" -> Combina (o . casou com o número 1)
// "a@c" -> Combina (o . casou com o símbolo @)
// "a c" -> Combina (o . casou com o espaço)
// "a\nc" -> Não combina (o . não aceita a quebra de linha \n)

// O papel dos Colchetes [.-] (Classe de Caracteres)
// Os colchetes definem uma lista de opções de um único caractere (chamada de classe de caracteres ou character class).
// O que faz: Diz ao motor de regex: "Encontre apenas um caractere aqui, contanto que seja qualquer um dos símbolos dentro destes colchetes".
// No seu caso: [.-] significa que naquele ponto do texto pode haver um ponto (.) OU um hífen (-).

// O papel da Interrogação ? (Quantificador Opcional)
// A interrogação é um quantificador que torna o elemento imediatamente anterior a ela opcional.
// O que faz: Significa "zero ou uma ocorrência" do que vem antes.
// No seu caso: Ela vem logo após os colchetes ([.-]?). Isso significa que a presença do ponto ou do hífen é opcional:
// Se houver um . ou -, a regex aceita.
// Se não houver nenhum separador ali (apenas dígitos colados), a regex também aceita.
// É por isso que ela consegue capturar tanto um CPF formatado (123.456.789-00) quanto um CPF sem pontuação (12345678900).

//Resumo prático no seu padrão: Analisando o trecho \d{3}[.-]?:\d{3} 

// \d{3} -> Exige exatamente 3 dígitos.[.-] 
// [.-] -> Aceita o caractere . ou -.?
// ? -> Torna a presença do . ou - opcional.

const patternCpf = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g;
const matchCpf = banco.match(patternCpf);
console.log(matchCpf);

// Teste exemplo de pattern de cpf no formato normal
// const patternCpf = /\d{3}\.\d{3}\.\d+-\d{2}/g;


const patternData = /\d{2}[/. ]?\d{2}[/. ]?\d{4}$/gm;
const matchData = banco.match(patternData);
console.log(matchData)



// Pattern (TESTE) que busca apenas por datas de nascimmento
// const teste1 = /\d{2}\/\d{2}\/\d{4}/g;
// Testando o mesmo regex só que com metacaracteres e padrões diferentes
// const teste2 = /[0-9]{2}\/[0-9]+\/[0-9]+/g;
// const result = banco.match(teste)
// console.log(result)

// Para importarmos um arquivo JSON para uma VARIÁVEL, utiliza-se a seguinte função abaixo (require). Seu parâmetro é uma STRING com o CAMINHO do arquivo que queremos importar. NOTA: REQUIRE É UMA FUNÇÃO NATIVA DO NODE!!!

// Feito isso, o require estará **IMPORTANDO** o arquivo/objeto JSON e **CONVERTENDO** para um formato de OBJETO JAVASCRIPT, para dentro da variável "estudante"
const estudante = require('./estudante.json');

// Mostrando o objeto agora já convertido em objeto JS
console.log(estudante);

console.log(typeof estudante);

// Utilizando métodos de objetos (recuperando as chaves do objeto em um Array) após a conversão para OBJETO JS
const chaves = Object.keys(estudante);

console.log(chaves);











// ***** IMPORTANTE: Um arquivo JSON **NÃO** É UM OBJETO JAVASCRIPT E, para utilizarmos como objeto, precisamos CONVERTÊ-LO (no caso do exemplo utilizado, usando require) para então conseruigmos usar métodos de objeto etc.

// Além da importação de módulos JavaScript, o require também é usado para carregar arquivos JSON, que são amplamente utilizados para armazenar configurações e dados estruturados. Ao importar um arquivo JSON, o Node.js automaticamente o converte para um objeto JavaScript.
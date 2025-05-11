// Importando arquivo/objeto JSON e CONVERTENDO para um OBJETO JAVASCRIPT, para a variável "estudante", para que possa ser manipulado
const estudante = require('./estudante.json');


// Transformando o objeto "estudante" para STRING, para que SEJA ENVIADA (por exemplo, numa requisição) do front para o back, ou vice versa, através do formato HTTP
const stringEstudante = JSON.stringify(estudante);
// JSON.stringify, JSON.parse e outros, fazem parte de uma biblioteca que o Node tem para facilitar esse trabalho comum de manipulação de JSON em aplicações back-end.

// Mostrando que a variável foi transformada COMPLETAMENTE em uma STRING
console.log(stringEstudante);
console.log(typeof stringEstudante);




// Da mesma forma, O PROCESSO CONTRÁRIO PARA RECONVERTER a STRING transformada para um OBJETO novamente. Então, a STRING VOLTA a ser um OBJETO
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);




// Então, a biblioteca JSON interna do Node, tem uma série de métodos que conseguimos manipular os JSON, transformando-os em string quando precisamos enviar esses arquivos e transformando novamente em objetos.





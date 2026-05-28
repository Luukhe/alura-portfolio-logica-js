// Algumas observações e anotações constam no "arquivo 1, index.js"

// *** TER EM MENTE: O objetivo de organização dos projetos sempre terá como um dos princípios MODULARIZAR (separar em arquivos diferentes as funções que tratam de diferentes "assuntos", como funções de erro para arquivos próprios de erro, etc) o código



// JEITO ANTIGO, UTILIZANDO "REQUIRE" E SEM MODULARIZAR O CÓDIGO (no caso, o código em que o readFile é usado está modularizado para o arquivo "cli.js"):

// const fs = require('fs');
// const trataErros = require('./erros/funcoesErro');

// fs.readFile(link, 'utf-8', (erro, texto) => {
//     try {
//         if (erro) throw erro;
//         console.log(separaEmParagrafos(texto));
//     } catch (erro) {
//         // if (erro.code === 'ENOENT') console.log('Arquivo não encontrado');
//         // else console.log('Outro erro.');

//         // Código acima foi transportado para uma função separada em um arquivo destinado a tratamento de erros
//         trataErros(erro);
//     };
// });



// EXPORT ("NORMAL"): Jeito mais moderno de se exportar uma função. Para que a função seja IMPORTADA no arquivo desejado, ela, por ser um EXPORT (e não um export default) necessita ser importada envolto de CHAVES (Exemplo: import {separaEmParagrafos} from index2.js), pois quando usa-se apenas o export normal, entende-se que podem ser exportadas mais de uma função, então, na importação as chaves indicam que as funções importadas chegarão como um OBJETO COM FUNÇÕES

// OU SEJA:
// 1. EXPORTAR MAIS DE UMA FUNÇÃO (ou até mesmo variáveis, classes) = export "normal" / import com chaves {} obrigatório e deve usar o nome exato do que foi exportado. (Regra: Você pode ter quantos export quiser em um único arquivo)
// 2. EXPORTAR APENAS UMA FUNÇÃO = export default, import SEM chaves {} e pode dar o nome que você quiser para o que está importando. (Regra: Você só pode ter um export default por arquivo)

export function separaEmParagrafos(texto) {
    const listaParagrafos = texto.toLowerCase().split('\n');
    const contagemDeParagrafos = listaParagrafos.flatMap(paragrafo => {
        if (!paragrafo) {
            return [];
        };

        return verificaPalavrasDuplicadas(paragrafo);
    });

    // Solução alternativa, porém menos performática do que apenas o uso do "flatMap" sozinho, pois são menos loops a serem feitos:
    // const contagemDeParagrafos = listaParagrafos.filter(n => n).map(n => {
    //     return verificaPalavrasDuplicadas(n);
    // });

    // const filtrados = filtraObjetos(contagemDeParagrafos);

    return contagemDeParagrafos;
};



function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            palavra = limpaPalavras(palavra);
            resultado[palavra] = (resultado[palavra] || 0) + 1;

            // Alternadamente à condição acima, também funciona:
            // if (!resultado[palavra]) {
            //     resultado[palavra] = 1;
            // } else {
            //     resultado[palavra]++;
            // };
        };
    });

    return resultado;
};

function limpaPalavras(texto) {
    return texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g, '');
};









//-----------------------------------------------------------------------------











// function filtraObjetos(arr) {
//     const listaFiltrada = [];
//     arr.forEach(objeto => {
//         // for (const key in objeto) {        
//         //     if (objeto[key] === 1) {
//         //         delete objeto[key]
//         //     };
//         // };

//         // Usando forEach para iterar no objeto e obter o mesmo valor acima
//         Object.keys(objeto).forEach(keys => {
//             if (objeto[keys] === 1) {
//                 delete objeto[keys];
//             };
//         });

//         if (Object.keys(objeto).length > 0) {
//             listaFiltrada.push(objeto)
//         };  
        
//     });
    
//     // Também funciona para filtrar objetos não vazios. Porém, isso faz mais um loop.
//     // const listaFiltrada = arr.filter(obj => Object.keys(obj).length > 0);
//     return listaFiltrada;
// };










// Object.keys(obj): Extrai todas as chaves (propriedades) de um objeto e as devolve em formato de array. Se o objeto for {}, o resultado será um array vazio [].

// .length > 0: Verifica o tamanho desse array de chaves. Se for maior que zero, significa que o objeto tem propriedades (não está vazio) e deve ser mantido.

// .filter(): Percorre o array original e constrói o novo array apenas com os itens que retornaram true nessa verificação.



// const abc = {a: 1, b: 2, c: 3};

// for (const key in abc) {
//     if (abc[key] === 1) {
//         delete abc[key];
//     }
// }
// console.log(abc);




// 2. Filtrar objetos vazios de um ArrayCaso você tenha um array de objetos e queira remover aqueles que estão totalmente vazios ({}), utilize o método filter avaliando o tamanho das chaves do objeto:

// const listaDeObjetos = [
//   { id: 1, nome: "Carlos" },
//   {}, 
//   { id: 2, nome: "Bruna" },
//   {}
// ];

// const listaFiltrada = listaDeObjetos.filter(obj => Object.keys(obj).length > 0);

// console.log(listaFiltrada);
// // Saída: [ { id: 1, nome: 'Carlos' }, { id: 2, nome: 'Bruna' } ]





// testes solo:



// function separaEmParagrafos(texto) {
//     const obj = {};
//     const listaParagrafos = texto.toLowerCase().split('\n').flatMap(n => {
//         if (!n) {
//             return [];
//         };

//         return n;
//     });
    
//     const analisa = listaParagrafos.forEach(n => {
//         n = n.split(' ');
//         n.forEach(k => {
//             if (k.length >= 3) {

//                 k = k.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g, '');

//                 if (!obj[k]) {
//                     obj[k] = 1;
//                 } else {
//                     obj[k]++;
//                 };
//             };
//         });
//     });

//     return obj
// };








// function separaEmParagrafos(texto) {
//     const listaParagrafos = texto.toLowerCase().split("\n").flatMap(n => {
//         if (!n) {
//             return [];
//         };

//         return analisa(n)
//     });

//     return listaParagrafos;
// };


// function analisa(paragrafo) {
//     const arr = paragrafo.split(' ')
//     const obj = {};

//     arr.forEach(palavra => {
//         if (palavra.length >= 3) {
//             palavra = palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

//             if (!obj[palavra]) {
//             obj[palavra] = 1;
//             } else {
//                 obj[palavra]++;
//             };
//         };
//     });

//     return obj;
// };
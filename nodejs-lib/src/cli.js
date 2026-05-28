// CLI Significa: * COMMAND LINE INTERFACE *, ou INTERFACE DE LINHA DE COMANDO (provavelmente, pelo meu entendimento, onde vão as funções principais)

// *** TER EM MENTE: "O PADRÃO DO JAVASCRIPT É TRABALHARMOS COM VÁRIOS ARQUIVOS ESPECIALIZADOS, com poucas linhas e funções dentro deles e IMPORTAR e EXPORTAR as funções entre si". O objetivo de organização dos projetos sempre terá como um dos princípios MODULARIZAR (separar em arquivos diferentes as funções que tratam de diferentes "assuntos", como funções de erro para arquivos próprios de erro, etc) o código, a fim de melhorar o entendimento e manutenção

// ************ MEGA IMPORTANTE SOBRE IMPORTAÇÃO/EXPORTAÇÃO DE MÓDULOS (IMPORT E REQUIRE): O método mais moderno e amplamente aceito hoje em dia é o **IMPORT** (conhecido como ES Modules ou ESM). Introduzido oficialmente no JavaScript em 2015 (ES6), ele se tornou o padrão oficial da linguagem.
// OU SEJA: NÃO USA-SE MAIS O MÉTODO "REQUIRE", USE AGORA APENAS IMPORT!!!!!!!!!!


const caminhoArquivos = process.argv;

const link = caminhoArquivos[2];
// OU
// const link = process.argv[2];

// Para consultar os caminhos
console.log(caminhoArquivos);
console.log(link);

import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import {separaEmParagrafos} from './index2.js';


fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        console.log(separaEmParagrafos(texto));
    } catch(erro) {
        // if (erro.code === 'ENOENT') console.log('Arquivo não encontrado');
        // else console.log('Outro erro.');

        // Código acima foi transportado para uma função separada em um arquivo destinado a tratamento de erros
        trataErros(erro);
    };
});










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
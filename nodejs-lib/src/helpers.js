

// Retorna um array contendo apenas as propriedades do objeto (no caso, um parágrafo) atual que tiverem seu valor maior do que 1
function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(palavra => paragrafo[palavra] > 1)
};


// Monta uma STRING a partir do array de objetos (parágrafos) recebido, iterando pelo array de parágrafos, transformando o array em uma string e concatenando à string criada as ocorrências filtradas do parágrafo/objeto iterado 
function montaSaidaArquivo(listaObjetos) {
    let textoFinal = '';

    // Itera pelo array "principal de objetos"
    listaObjetos.forEach((paragrafo, index) => {

        // Filtra as ocorrências para um array e, posteriormente, transforma o array obtido em uma string
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        
        // Adição pessoal minha que adiciona o número de vezes que a palavra foi repetida
        const contadorDeDuplicadas = contaDuplicadas(duplicadas, paragrafo);

        // Concatena a string com ela mesma a cada iteração, para criar uma só string com as ocorrencias de todos os parágrafos/objetos
        if (duplicadas.length === 0) {
            textoFinal = textoFinal + '';
        } else {
            textoFinal = textoFinal + `Palavras duplicadas no parágrafo ${index + 1}: ${contadorDeDuplicadas} \n`
        }
    });

    return textoFinal;
};


// Adição pessoal minha que adiciona o número de vezes que a palavra foi repetida
function contaDuplicadas(str, objeto) {
    const arr = str.split(', ');
    let resultado = '';

    // for (const element of arr) {
    //     resultado = resultado + `${element} (${objeto[element]} vezes), `;
    // };
    
    arr.forEach(palavra => {
        resultado = resultado + `${palavra} (${objeto[palavra]} vezes), `;
    })


    if (resultado[resultado.length - 2] === ',') {
        resultado = resultado.split('');
        resultado.splice(resultado.length - 2);
        resultado = resultado.join('');
    };

    return resultado;
};



// Outra maneira (caso hajam muitas funções a serem exportadas) de exportar funções
export { montaSaidaArquivo }
const notas = [10, 8.5, 5, 6.5, 8, 7.5];


// primeira expressão: executada apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: executada sempre ao FINAL DO BLOCO


//    1ª expressao       2ª expressao       3ª expressao
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}



// teste meu

function calculaMedia (arr) {
    let media = 0;
    for (let i = 0; i < arr.length; i++) {
        media = media + arr[i];
        if (i === arr.length - 1) {
            media = media / arr.length;
        }
    }
    return media.toFixed(2);
}

console.log(calculaMedia(notas))
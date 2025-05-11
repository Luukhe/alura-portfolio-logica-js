const notaFinal = 7;
const faltas = 2;
const advertencias = 0;

// Nota: O if só funcionará (ou "ativará") se uma ou alguma condição dentro dele for verdadeira
// Operador lógico "OU"/"OR" é representado por "||", que são chamados de PIPES (no caso, são dois pipes). Nos permite colocarmos mais de uma condição e, entrará no if se **PELO MENOS UMA condição for dada como verdadeira, ou seja, dentre todas, apenas UMA delas precisa ser verdadeira.


if (notaFinal < 7 || faltas > 4) {
    console.log('Reprovado')
} else {
    console.log('Aprovado')
}

// Operador lógico "E"/"AND", é representado por "&&", chamados de "E comercial" (no caso, são dois E comerciais). Também nos permite colocarmos mais de uma condição e, só entrara no if se **TODAS AS CONDIÇÕES IMPOSTAS FOREM VERDADEIRAS.


if (notaFinal < 7 && faltas > 4) {
    console.log('Reprovado')
} else {
    console.log('Aprovado')
}


// Operador lógico NOT


if (faltas <= 2 && !advertencias) {
    console.log('Recebeu bonus')
} else {
    console.log('Não recebeu bonus')
}
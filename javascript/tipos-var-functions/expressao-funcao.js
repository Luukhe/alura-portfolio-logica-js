console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(9, 3));

const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4 ) {
        return true;
    } else {
        return false;
    }
}

// Function expression são funções que já são atribuídas diretamente a variáveis. Elas não sofrem HOISTING (que faz com que as funções sejam IÇADAS, levadas ao topo do código) assim como as functions declarations (que são as funções declaradas de forma normal). Logo, se a declaração da function expression ocorrer DEPOIS de sua chamada, ocorrerá um ERRO.

// Logo, no exemplo acima, ocorrerá um erro ao tentar chamar a função, pois ela está sendo chamada antes de sua declaração.
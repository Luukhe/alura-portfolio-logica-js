// parâmetros/argumentos
// retorno


function exibirInfoEstudante (nome, nota) {
    console.log(`O nome do estudante é ${nome} e sua nota é ${nota}`);
    return
}

exibirInfoEstudante('Ana', 8);
exibirInfoEstudante('Caroline', 7);


// Return: a palavra chave "return" é o que garante que todo processamento/resultado feito dentro de uma função fique disponível para ser usado FORA DELA.

// O valor de retorno serve como “output” da função. Ele representa o resultado final obtido após a função executar o código dentro do bloco;

// Para que a função retorne um valor, é utilizada a palavra-chave return seguida do valor que se deseja “retornar”. Se nenhum valor for informado, a função por padrão retorna undefined;

// A linha do retorno é sempre a última linha do bloco. Qualquer código escrito abaixo dessa linha se torna unreachable (“inalcançável”) para o JavaScript;

// Nem todas as funções retornam valores; dependendo do caso, uma função pode executar diversas instruções sem a necessidade de retornar nenhum valor no final.
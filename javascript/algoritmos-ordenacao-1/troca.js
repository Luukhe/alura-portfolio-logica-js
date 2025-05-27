function trocaElementos (lista, analise) {
    let itemAtual = lista[analise];
    let itemAnterior = lista[analise - 1];

    lista[analise - 1] = itemAtual;
    lista[analise] = itemAnterior;
};

module.exports = trocaElementos;
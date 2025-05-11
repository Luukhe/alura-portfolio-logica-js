const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312414132',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['2903213112291', '1289312893129'],
    media: 7.5,

    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false;
    }

    // NOTA: Arrow functions não funcionam corretamente em MÉTODOS, pois não trabalham muito bem com o "THIS".
}


console.log(estudante.estaAprovado(7));




// ***** LEMBRANDO: Métodos são FUNÇÕES que estão dentro do contexto DE ALGUM OBJETO. No caso, a função "estaAprovado" É UM MÉTODO DO OBJETO "ESTUDANTE"!!!!

// THIS: O this se refere ao OBJETO/CONTEXTO ATUAL. Quando uma função está dentro de um objeto, precisamos referenciar para a função em QUAL CONTEXTO ELA ESTÁ TRABALHANDO. No caso, o contexto em que a função "estaAprovado" está inserida, o objeto "estudante".
// Logo, no exemplo da função/método acima, "this.media" pode ser traduzido a: **** A MÉDIA DAQUI (OBJETO ESTUDANTE), DESTE OBJETO.



// No contexto de um objeto em Node.js, this refere-se ao próprio objeto no qual a função está sendo chamada. Ela é uma referência dinâmica, o que significa que o valor de this pode mudar dependendo do contexto em que a função é chamada. No caso de métodos de objetos, o this se liga ao objeto que chamou o método.
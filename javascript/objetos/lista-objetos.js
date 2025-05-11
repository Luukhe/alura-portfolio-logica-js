const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312414132',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['2903213112291', '1289312893129'],
    endereco: [{
            rua: 'Abcdefg',
            numero: '56', 
            complemento: 'apto 302',
            pais: 'Brasil',
    }]
    
}

estudante.endereco.push({ // ***** Adicionando um segundo ELEMENTO, que é um OBJETO à propriedade "endereço" (NOTA: usa-se método de array pois a propriedade "endereço" É UM ARRAY)
    rua: 'Zefhjk',
    numero: '98',
    complemento: '',
})

console.log(estudante.endereco); // Acessando a propriedade do objeto que agora é um ARRAY, que tem *******ELEMENTOS QUE SÃO OBJETOS

console.log(estudante.endereco[0]); // Acessando o ELEMENTO de ÍNDICE 0, que É UM OBJETO, dentro da propriedade ENDEREÇO, QUE É UM ARRAY COM OBJETOS


const listaEnderecosComComplemento = estudante.endereco.filter((n) => n.complemento); 

console.log(listaEnderecosComComplemento);

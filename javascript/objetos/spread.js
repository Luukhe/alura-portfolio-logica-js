const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199735993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43',
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null,
    }]
};


// Função para simplesmente mostrar os telefones do objeto estudante, que pede dois parâmetros
function exibirTelefones (tel1, tel2) {
    console.log(`Ligar para ${tel1}`);
    console.log(`Ligar para ${tel2}`);
}

// Chamando a função e passando MANUALMENTE os telefones da propriedade "telefones" do objeto "estudante"
exibirTelefones(estudante.telefones[0], estudante.telefones[1]);


// Chamando a função utilizando SPREAD OPERATOR, que irá automaticamente passar TODOS os elementos da propriedade-array "telefones" para os parâmetros que a função pede, que, no caso, são os elementos de índice 0 e índice 1, respectivamente, como mostrado no exemplo acima, porém com uma sintaxe mais simplificada
exibirTelefones(...estudante.telefones);








// Numa suposição onde precisamos preparar os dados de um estudante para mandarmos uma correspondência, criamos então um NOVO OBJETO para serem armazenados dados de envio e, provavelmente vão existir coisas no objeto "estudante" que não precisamos utilizar para mandar uma correspondência (tais como uma propriedade CPF, bolsista etc). Podemos então utilizar dados/propriedades de OUTRO objeto, tanto referenciando cada propriedade em si MANUALMENTE (o que não é o indicado), quanto aproveitar de uma vez só TODAS as propriedades de um objeto que está em outro objeto, fazendo assim uma ****MONTAGEM**** de um novo objeto.



// Nesse exemplo, foi criado uma propriedade "endereco" dentro do objeto e atribuido outro objeto a ela (objeto esse que é um ELEMENTO de índice 0, cuja propriedade a qual ele pertence é uma propriedade-Array). Porém, esse jeito não é tão "legal" pois fica aparente um objeto dentro da propriedade
const dadosEnvio = {
    destinatario: estudante.nome,
    endereco: estudante.enderecos[0],
};

console.log(dadosEnvio);




// Já neste exemplo, as propriedades são passadas de forma muito "MANUAL" e/ou "PICOTADAS", o que também não seria muito viável
const dadosEnvio2 = {
    destinatario: estudante.nome,
    rua: estudante.enderecos[0].rua,
    numero: estudante.enderecos[0].numero,
};

console.log(dadosEnvio2);



// (IDEAL) Neste exemplo, usando SPREAD OPERATOR, torna-se uma forma muito mais resumida e "utilitária" para *** MONTAR *** um novo objeto, pois o SPREAD OPERATOR irá ESPALHAR TODAS AS PROPRIEDADES DO OBJETO EM QUESTÃO, colocando-os no novo objeto, sem a necessidade de uma outra propriedade para "abrigá-los" e evitar a "aparência de um objeto dentro de propriedade", já que deste jeito elas serão LITERALMENTE PROPRIEDADES POR SI SÓ (da mesma forma que são em sua origem)
// É a mesma coisa que as propriedades "rua, numero, complemento" (propriedades de outro objeto) estivessem escritas manualmente dentro do objeto aqui

// RESUMINDO: Sendo assim, é capaz de **MONTARMOS** novos objetos a partir de propriedades de outros objetos de forma MAIS EFICIENTE, com o spread operator ESPALHANDO o conteúdo de um objeto (suas propriedades) DENTRO de outro novo objeto 
const dadosEnvio3 = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0], // NOTA: Aqui sim selecionamos o índice pois sabemos que estamos selecionando o objeto para passar suas propriedades 
};

console.log(dadosEnvio3); // Agora então, o novo objeto vira UM OBJETO SÓ, tendo propriedades próprias e propriedades de outro objeto, um novo OBJETO MONTADO!







// Anotações


// Spread operator pode ser usado tanto para Arrays, Objetos quanto para argumentos de função e serve para basicamente "espalhar", como o próprio nome já diz, o CONTEÚDO do Array ou Objeto mencionado.

// ***** Usando spread operator, pode-se montar NOVOS objetos usando "partes/pedaços/propriedades" de OUTROS objetos, vide exemplo acima. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.

// Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave

// A não ser em casos muito específicos, é sempre bom evitar usar diretamente a POSIÇÃO de um Array. Nos exemplos acima, usando o SPREAD OPERATOR torna as coisas mais fáceis




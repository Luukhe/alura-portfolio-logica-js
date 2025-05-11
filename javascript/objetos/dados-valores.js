const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312414132',
    turma: 'JavaScript',
    bolsista: true,

    // telefone1: '2392019321',  // Refatorando dados (quando são dois ou mais) do mesmo tipo em ARRAYS.
    // telefone2: '31289031289',

    telefones: ['2903213112291', '1289312893129'], // Jeito certo de se ter dois ou mais dados do mesmo tipo/descrição em um objeto (é pra isso que servem ARRAYS)
    
    // VALE RESSALTAR QUE: Anteriormente acessando propriedades de STRING, pudemos usar os MÉTODOS DE STRING NA PROPRIEDADE QUE POSSUÍA VALORES STRING. Sendo assim, ressalta-se a importância de que, para Arrays, FUNCIONA DO MESMO JEITO (a propriedade sendo um Array, caso queiramos acessá-la, também poderemos acessar e manipulá-la com MÉTODOS DE ARRAY como quisermos).
}


console.log(estudante.telefones); // Mostrando a propriedade telefones que é um ARRAY

console.log(estudante.telefones[0]); // Acessando apenas UM elemento dentro do ARRAY da PROPRIEDADE "TELEFONES"











// -------------------- ANOTAÇÕES ---------------------------


// ************* LEMBRANDO O INTUITO DE ARRAYS: Arrays são úteis quando precisamos juntar/fazer uma lista de dados que **** SEJAM DO MESMO TIPO/DESCRIÇÃO ****, pois caso precisemos usar dados de DIFERENTES assuntos/tipos, usamos os próprios OBJETOS.


// Além de APENAS dados primitivos, obviamente também podemos usar OUTROS tipos de dados, no caso do exemplo, também ARRAYS.

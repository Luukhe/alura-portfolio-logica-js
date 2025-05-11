const estudantes = require('./estudantes.json');


// Meu jeito para a resolução antes de assistir
// function filtraPorPropriedade (lista, chave, subChave) {
//     return lista.filter((item) => item[chave][subChave] === undefined);
// }

// const achados = filtraPorPropriedade(estudantes,'endereco', 'cep');
// console.log(achados);



// O **MÉTODO DE OBJETO**, hasOwnProperty, como o nome já sugere, verifica se um objeto possui ou não a propriedade que queremos verificar.
// No caso, o método *hasOwnProperty* vai verificar se em um objeto existe ou não a propriedade passada (que no caso é "cep", sendo passada na chamada da função) e irá então "passar para o filter" todos os objetos "endereço" que NÃO POSSUEM a propriedade especificada (não possuem pois no exemplo estamos passando uma negação, com "!"), fazendo com que o filter RETORNE/filtre todos os objetos que possuem o objeto "endereço", e que dentro de endereço NÃO EXISTA a propriedade especificada ("cep").
function filtraPorPropriedade (lista, propriedade) {
    return lista.filter((item) => {
        return !item.endereco.hasOwnProperty(propriedade);
    });
};

const estudantesFiltrados = filtraPorPropriedade (estudantes, 'cep');
console.log(estudantesFiltrados);

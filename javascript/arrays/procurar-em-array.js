const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];



function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)) { // O includes funciona tanto para string quanto para um Array. No caso do array, procura um elemento dentro do array

        const index = lista[0].indexOf(aluno); // *** Literalmente como o método diz, retorna o INDEX de determinado elemento, sendo passado seu valor para que seja procurado em qual posição e qual será seu index, para que então na outra lista (médias) possa-se recuperar o valor de mesmo index, pois será referente ao elemento que foi buscado.

        const mediaAluno = lista[1][index];

        return `O aluno ${aluno} tem a média ${mediaAluno}.`;
    } else {
        return 'Aluno não encontrado na lista.';
    }
}

console.log(exibeNomeENota('Ana'));


// indexOf() : 


// Resumo: para buscar valores referentes um ao outro em matrizes (array de arrays), pode-se usar o método ***** indexOf() ***** e passar o elemento a ser buscado como parâmetro para ele. Sendo assim, será retornado o seu index e então este mesmo index poderá ser usado para recuperar o valor em um outro array dentro do array "pai", pois normalmente a posição de elementos de arrays são REFERENTES uns aos outros (POSIÇÕES SÃO CORRESPONDENTES).




// OBS: Includes usado em uma string (variável contendo string) irá procurar se aquela determinada combinação existe mesmo que não seja a palavra completa ou nome inteiro ***(se procurado por "Cai" numa variável com a string "Caio", irá retornar positivo, pois a combinação contém), enquanto num Array o método irá procurar pelo elemento, ou seja, necessita-se que o elemento buscado seja escrito corretamente (usando o mesmo exemplo dado, uma busca por "Cai" dentro de um array com o intuito de buscar "Caio", não funcionaria).









// Minha resolução de tentativa sozinho antes de assistir à aula

// function exibeNomeENota (aluno) {
//     for (let i = 0; i < alunos.length; i++) {
//         if (alunos[i] === aluno) {
//             return `A média do aluno ${aluno} é ${medias[i]}.`;
//         } else if (i === alunos.length -1) {
//             return "Aluno não encontrado";
//         }
//     }
// }

// console.log(exibeNomeENota('Ana'));
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];



function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)) {

        const [alunos, medias] = lista; // Desestruturando array. 

        const index = alunos.indexOf(aluno);
        const mediaAluno = medias[index];

        return `O aluno ${aluno} tem a média ${mediaAluno}.`;
    } else {
        return 'Aluno não encontrado na lista.';
    }
}

console.log(exibeNomeENota('Ana'));
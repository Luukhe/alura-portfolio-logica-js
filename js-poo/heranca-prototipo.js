const user = {
    nome: 'Juliana',
    email: 'exemplo@gmail.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfo: function () {
        console.log(this.nome, this.email)
        // return this.nome
    },
};

const admin = {
    nome: 'Mariana',
    email: 'exemploAdmin@gmail.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true,
    // exibirInfo: function () {
    //     console.log(this.nome, this.email)
    //     // return this.nome
    // }
    criarCurso: function() {
        console.log('Curso criado');
    },
};


// ****** HERANÇA DE PROTÓTIPO: É quando o JavaScript utiliza um OBJETO como PROTÓTIPO para que OUTRO objeto HERDE as propriedades do protótipo. Ou seja, cria-se um "OBJETO BASE" como protótipo para daí passar as propriedades dessa base para OUTROS objetos criados posteriormente. Um objeto guarda uma referência interna para outro objeto (o seu protótipo) e consulta esse protótipo caso não encontre o que precisa nele mesmo.
// No caso do exemplo utilizado a seguir, o objeto "admin" HERDARÁ as propriedades do objeto "user"
// NOTA 1: Caso um objeto HERDE de um objeto-protótipo uma propriedade/método que utilize o "THIS", o THIS irá utilizar as informações/propriedades no CONTEXTO DO OBJETO HERDADO, e não do objeto base/protótipo.
// NOTA 2: Caso um um objeto que tenha herdado propriedades de um outro objeto/protótipo tenha propriedades iguais às do protótipo, as propriedades do objeto que herdou SÃO MANTIDAS, ou seja, NÃO SERÃO SOBRESCRITAS
// NOTA 3: Entretanto, caso um objeto herde propriedades de outro e o objeto que herdou não possua uma (ou mais) propriedade(s) que exista no protótipo, ele herdará automaticamente as propriedades.

// setPrototypeOf:
// * PARÂMETRO 1: O objeto que HERDARÁ as propriedades
// * PARÂMETRO 2: O OBJETO-BASE (PROTÓTIPO) que FORNECERÁ as propriedades
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();



// Outra forma de passar um protótipo a um novo objeto
// NOTA: Usando setPrototypeOf, atribui-se um protótipo a um objeto que JÁ FOI CRIADO. Usando Object.create, CRIA-SE O OBJETO NA HORA e, segundo a IA, esse método é de ALTA PERFORMANCE, comparado à BAIXA PERFORMANCE DO SETPROTOTYPEOF
const pessoa = Object.create(user);
pessoa.exibirInfo()

// CADEIA DE PROTÓTIPO: É o processo do JavaScript de acessar um objeto e ir "subindo" na cadeia para procurar um método até achar o PROTÓTIPO ORIGINAL onde reside o método.
// IA: Caso a propriedade não exista no objeto local, a engine do JS busca na "prototype chain" até encontrá-la ou chegar ao final da cadeia (null)
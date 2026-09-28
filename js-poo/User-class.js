// As CLASS utilizam uma FUNÇÃO ESPECIAL para CONSTRUIR suas PROPRIEDADES, que se chama "CONSTRUCTOR"

// É UM PADRÃO CRIAR CLASSES COM A PRIMEIRA LETRA MAIÚSCULA

// Passa-se à função "constructor", como parâmetro dela, TODAS AS PROPRIEDADES que a class receberá DINAMICAMENTE (ou seja, propriedades cujos valores são passados na hora da declaração), podendo também propriedades serem criadas diretamente dentro do corpo da função constructor sem a necessidade de ser declarada nos parâmetros

// Pode-se atribuir o VALOR de uma PROPRIEDADE, previamente, DIRETAMENTE no parâmetro de constructor da propriedade (como está sendo feito na propriedade "ativo", por exemplo)
// MÉTODOS EM CLASSES SÃO DECLARADOS *FORA* DA FUNÇÃO CONSTRUCTOR E NÃO NECESSITAM DA PALAVRA-CHAVE "FUNCTION" PARA SEREM DECLARADAS

// Para INSTANCIAR uma CLASS, para CRIAR uma NOVA INSTÂNCIA de uma class, ou seja, para usar criar um novo objeto a partir de uma class como PROTÓTIPO, usamos a mesma sintaxe da função construtora: Cria-se uma nova variável, utilizamos o operador NEW para instanciar a class e então usa-se a class criada, passando os valores das propriedades como parâmetro, NA ORDEM ESPECIFICADA DA CRIAÇÃO NO CONSTRUCTOR, para a class criada.

// A atribuição às propriedades, nas classes, é diferente de como a atribuição é feita com objetos literais que, no caso, utiliza os dois pontos ":" para atribuir valor a uma propriedade. Nas classes, utiliza-se o igual "=" para atribuir valor às propriedades (do mesmo jeito que variáveis).

// Nem toda classe precisará da função constructor.

// ***** CLASSES NÃO SÃO HOISTED ***** Ou seja, caso a declaração da instância de uma classe seja feita antes da criação da própria classe, gerará ERRO.

// Métodos de uma classe não aparecerão em um console.log de uma instância que foi criada a partir de uma classe, pois os métodos ficam salvos no PROTÓTIPO (ou seja, na própria classe) e não na instância. Se o JavaScript criasse uma cópia do método para cada nova instância, 1.000 objetos ocupariam memória com 1.000 cópias da mesma função. Em vez disso, o método fica no prototype e é compartilhado por todas as instâncias.

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo

        // Exemplo de propriedade que não foi passada nos parâmetros, mas pode ser criada normalmente, independente de estar ou não no parâmetro. Propriedades nos parâmetros são mais voltadas a propriedades que serão FLEXÍVEIS, ou seja, que podem mudar de valor em cada instância criada
        this.greet = 'Hello'
    };
    
    // Propriedades fora do constructor (Class Fields): É totalmente válido declarar propriedades diretamente no corpo da classe, fora de qualquer método ou do constructor. Esse recurso é chamado de Class Fields (campos de classe) e é ideal para definir valores padrão ou propriedades estáticas que não dependem dos parâmetros recebidos na instanciação. A principal diferença está no acesso aos parâmetros de criação e na flexibilidade de lógica: propriedades declaradas fora do constructor são usadas para valores fixos ou padrões, enquanto as declaradas dentro servem para receber dados dinâmicos passados no momento de instanciar a classe (new). Se a propriedade depende de alguma informação que varia para cada objeto criado, declare dentro do constructor. Se for um valor padrão fixo ou uma propriedade privada, declarar fora deixa o código mais limpo e organizado.
    // NÃO SE USA "THIS" PARA CRIAR PROPRIEDADES FORA DO CONSTRUCTOR!!
    propriedadeTeste = 'teste'


    // Método privado (mesma sintaxe de propriedade, basta adicionar "#")
    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento
        })
    };

    // Execução de um método privado (pois só pode ser executado/acessado dentro da classe onde é criado). O método acessa propriedades privadas, para que haja, através desse método, possibilidade de "jogar para fora" as propriedades privadas (na ausência de um setter).
    exibirInfoTeste() {
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}`
        //return `${this.#nome}, ${this.#email}`
    };

    // Agora, os this.nome e email se referem aos GETTERS e não diretamente às propriedades privadas
    exibirInfo() {
        return `${this.nome}, ${this.email}`
    };

    // Uma forma de polimorfismo (que não a por override) que SIMULA (através de condicionais) um comportamento de linguagens que aceitam que um mesmo método/função tenha MAIS DE UM COMPORTAMENTO a DEPENDER DE SUA ASSINATURA, ou seja, que basicamente duas funções distintas tenham o mesmo nome
    // Outro exemplo: Podia-se, também, utilizar um parâmetro "role" na função e, a partir dele, montar a lógica/criar condicionais para definir o comportamento do método. A partir desses exemplos, podemos ABSTRAIR pro que o projeto necessita.
    // Essa forma de modificar o comportamento de um método se chama FUNCTION/MÉTODO OVERLOAD e, especificamente, o JavaScript não consegue implementar DA FORMA "MAIS NATURAL".
    // Esse tipo de exemplo, sendo feito desse jeito, tem seu lado negativo pois existe muita coisa "hard coded (por exemplo: estudante, docente, admin)" para ser verificada e, caso outra subclasse seja adicionada com outro tipo de role, teria-se que vir aqui manualmente para adicionar uma condição para ele. Logo, no caso do projeto daqui, seria mais sucinto o método de polimorfismo via override no método da subclasse caso o método necessite de um outro comportamento mais adequado a ela 
    exibirInfo2() {
        if (this.role === 'estudante') {
            return `Estudante: ${this.nome}`
        };

        if (this.role === 'docente') {
            return `Docente: ${this.nome}, ${this.email}`
        };

        if (this.role === 'admin') {
            return `Admin: ${this.nome}, ${this.role}`
        }
    }
    


    // GETTERS:
    // **** GET É UM MÉTODO QUE APENAS MOSTRA, NÃO MODIFICA: É QUANDO SIMPLESMENTE ACESSAMOS (PARA MOSTRAR) UMA PROPRIEDADE ****
    // ***** GET é uma palavra-chave usada para criar um TIPO ESPECIAL DE MÉTODO que será ****SOMENTE LEITURA****
    // Esse é um MÉTODO ACESSOR: Um método que DÁ ACESSO A UMA PROPRIEDADE POR FORA DELA, através da palavra-chave GET
    // Para partes de fora do código da classe, esse método será INTERPRETADO COMO UMA PROPRIEDADE "NOME" (objeto.nome), mas que, por dentro, retorna o valor de alguma propriedade privada (no caso do exemplo, apenas o valor de #nome é retornado, mas poderia muito bem haver toda uma lógica interna dentro do método, provavelmente usando valores privados para que sejam acessíveis por fora da classe).
    // É necessário ser feito um getter para cada propriedade que quisermos que possa ser usada por fora
    // Caso necessário, pode-se deixar de disponibilizar uma propriedade para que ela fique apenas na lógica interna da classe (inclusive, é um dos motivos para os getters serem separados)
    // Segurança: partes do código que acessarem uma propriedade (.nome, por exemplo) estarão acessando o GETTER ao invés de acessarem a PROPRIEDADE INTERNA da classe, o que promete uma segurança muito maior com relação à proteção e modificação dos valores e dados de uma classe internamente (são transformadas em somente leitura, pois não podem ser modificadas)
    // GETTERS NUNCA LEVAM NENHUM PARÂMETRO
    // ***** Em uma classe que possua tanto GETS quanto SETS, quando apenas acessamos o valor (visualmente) de uma propriedade estamos acessando o GET e quando usamos sintaxe de ATRIBUIÇÃO, estamos acessando o SET
    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }


    // SETTERS:
    // SET É UM MÉTODO QUE APENAS MODIFICA/ALTERA, NÃO MOSTRA NADA: É QUANDO ATRIBUÍMOS UMA PROPRIEDADE
    // Servem para que possamos ter a permissão de MODIFICAR uma determinada propriedade privada que JÁ POSSUI ALGUM VALOR DEFINIDO. Getters e setters criam propriedades, mas especificamente chamadas de PROPRIEDADES DE ACESSO (accessor properties), que se diferenciam das propriedades de dados (data properties). Serve para para “expôr” e permitir acesso e modificação de propriedades de forma controlada e restrita, através do uso das funções get para retornar dados específicos e set para definir dados específicos.
    // GET e SET podem usar o mesmo nome porque não são duas funções independentes, mas sim os dois lados de uma mesma propriedade. Ao definir um get e um set com o mesmo nome, você está configurando os comportamentos de leitura e escrita para uma única chave no objeto. O JavaScript não armazena essas operações como métodos comuns no objeto, mas sim dentro de um descritor de propriedade.
    // Usamos o constructor para definir as propriedades e, se posteriormente houver a necessidade de alterar algo, utiliza-se um SET para definir de QUE FORMA a alteração poderá ser feita. Ou seja, as funções acessoras (getters e setters) ENCAPSULAM/escondem propriedades e métodos para que elas só sejam manipuladas por fora da classe da forma que a classe queira/permita (ou não permitindo, que aí usa-se apenas propriedades/métodos privados)
    // Da mesma forma que GETS, SETS também usam "SINTAXE DE PROPRIEDADE" mesmo sendo métodos, mas sets são feitos para ATRIBUIR (objeto.nome = "exemplo")
    // Dentre os MÉTODOS ACESSORES, o set é o ÚNICO QUE RECEBERÁ *APENAS UM PARÂMETRO*, o qual será o DADO QUE QUEREMOS MODIFICAR
    // ***** Em uma classe que possua tanto GETS quanto SETS, quando apenas acessamos o valor (visualmente) de uma propriedade estamos acessando o GET e quando usamos sintaxe de ATRIBUIÇÃO, estamos acessando o SET
    // PROVAVELMENTE, o parâmetro de set será o valor da atribuição no momento em que a propriedade é atribuída (que é quando set é utilizado)
    // Um setter não apenas modifica uma propriedade, mas também pode encadear ações necessárias quando uma informação é alterada, pode verificar se essa informação é alterada, pode fazer validação
    // *** Uma das vantagens de utilizar SETTERS é poder CONTROLAR/IMPÔR CONDIÇÕES a forma que uma atribuição é feita à propriedade em questão através de LÓGICAS dentro do escopo do método do set, tais como, por exemplo, VALIDAÇÕES (pode-se verificar se o valor atribuído é um valor válido, como por exemplo verificar se caso o valor atribuído for uma string vazia, lançar um erro, ou se o usuário tem as credenciais/role necessárias para estar acessando a propriedade), autenticações.
    set nome(novoNome) {
        // Exemplo de validação no caso de uma atribuição indesejada
        if (novoNome === '') {
            throw new Error('Formato de nome não é válido')
        };

        this.#nome = novoNome;
    }


    // PROPRIEDADE ESTÁTICA (explicação sobre "static" no arquivo index-encap-poli-static)
    static propriedadeEstaticaTeste = 'Exemplo de propriedade estática';

    // MÉTODO ESTÁTICO
    // O método não utiliza o "THIS" pois não estará trabalhando com contextos diferentes (contextos de instâncias diferentes) para atrelar contextos
    static exibirInfo(nome, email) {
        return `${nome}, ${email}`
    };
};

// Tentando criar sem o construtor "new": TypeError: Class constructor User cannot be invoked without 'new'
const novoUser = new User('Juliana', 'j@j.com', '1/1/2000');
console.log(novoUser);
console.log(novoUser.exibirInfo());


// Embora não apareça no autocomplete da mesma forma que aparece usando "Object.prototype", o método "isPrototypeOf" ainda funcionará
// Como o nome já diz, serve para checar se um objeto tem/qual classe é seu protótipo
// Também funciona para o TypeScript
console.log(User.prototype.isPrototypeOf(novoUser));
console.log(Object.prototype.isPrototypeOf(User));



// OBS: Esses console.log, se não comentados, seguirão os outros arquivos quando forem executados por conta do import






// CLASSE VS PROTOTYPE: existe uma pequena e importante diferença técnica: a classe em si atua como a função construtora, enquanto o protótipo da instância é um objeto específico contido nela chamado prototype (Classe.prototype). Portanto, a classe serve como a fábrica/modelo, mas o verdadeiro protótipo ao qual a instância se conecta para herdar métodos é o objeto Pessoa.prototype (no caso, foi usado uma classe Pessoa como exemplo dado pela IA).

// A Classe (Pessoa): É a estrutura/função responsável por fabricar os objetos. Ela guarda propriedades da própria função e métodos estáticos (static).

// O Objeto Protótipo (Pessoa.prototype): É um objeto auxiliar que o JavaScript cria automaticamente ao definir a classe. É neste objeto que os métodos comuns da classe (como falar()) ficam salvos.

// A Instância (pessoa1): Ao fazer new Pessoa(), a instância recebe um elo interno ([[Prototype]] ou __proto__) apontando diretamente para Pessoa.prototype, e não para a função Pessoa em si.

// 1. O protótipo da instância É o objeto Pessoa.prototype:
// console.log(Object.getPrototypeOf(pessoa1) === Pessoa.prototype); // true

// 2. O protótipo da instância NÃO é a classe Pessoa em si:
// console.log(Object.getPrototypeOf(pessoa1) === Pessoa); // false
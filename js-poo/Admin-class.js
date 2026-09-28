// **********HERANÇA DE CLASSES************

import User from "./User-class.js";

// ** A herança de classes, além de reaproveitamento de código, serve também para criar uma lógica entre os usuários (no caso do exemplo aqui) e organização

// A herança de Classes é feita através da palavra-chave "EXTENDS", onde entende-se que uma classe terá outra como protótipo.

// Quando trabalhamos com orientação a objetos, alguns tipos de nomenclaturas são frequentemente utilizados: PARENT e CHILDREN/CHILD, ou ***SUPER CLASSE*** e ***SUB CLASSE***.

// Entende-se que SUPER CLASSE é como uma CLASSE BASE/PAI/PROTÓTIPO para outras classes que, no caso, serão consideradas SUB CLASSES referente à super classe, pois herdarão propriedades da super classe (protótipo/base/pai).

// Função SUPER: É necessário passar aos parâmetros da função super as propriedades da super classe que a sub classe herdará. A função super vem da SUPER CLASSE e referencia as propriedades da SUPER CLASSE na SUB CLASSE. A função super indica que o comportamento das propriedades passadas aos parâmetros da própria função super, está definido NA SUPER CLASSE. Super é usada dentro de uma classe filha (subclasse) para referenciar e chamar membros do construtor ou métodos da classe pai (superclasse). A função super() executa o miolo (o corpo do código) da função constructor da classe pai.

// A função super traz TODA ESTRUTURA DAS PROPRIEDADES da super classe, incluindo estruturas com "this"

// A herança via extends é total, não seletiva. A subclasse herda automaticamente todos os métodos e propriedades do protótipo da superclasse.

// Os parâmetros da função super que também estarão no constructor da subclasse servem para instâncias na hora da inicialização (new User)

// Obviamente, propriedades dentro da função super não precisarão da sintaxe do "this", pois já está sendo feito na super classe.

// ******* Métodos são automaticamente herdados sem precisar serem referenciados na função super (?) ******

// EXTENDS: A palavra-chave extends é a responsável por criar a ligação de herança entre duas classes no JavaScript, conectando a cadeia de protótipos (prototype chain)

// Quando você não escreve um constructor na subclasse, o JavaScript cria um constructor (junto com um super, dentro) PADRÃO AUTOMATICAMENTE por baixo dos panos. Como o construtor implícito chama super(...args) repassando todos os parâmetros recebidos, a inicialização da superclasse (na sub) ocorre normalmente, podendo inclusive passar argumentos na hora de instanciar uma subclasse, mesmo que a sub não possua constructor e/ou super (pois, como dito, o JS as inclui por debaixo dos panos).

// Se a classe pai não tiver um constructor definido explicitamente, o JavaScript cria automaticamente um construtor padrão (vazio) em segundo plano: constructor() {}. O super() executará esse construtor padrão e o seu código funcionará sem erros. Chamar super() continua sendo obrigatório: Se a classe filha tiver um constructor, você ainda precisa chamar super(), independente de a classe pai ter ou não um construtor explícito.

// Em JavaScript, uma classe filha sempre dependerá do super() para criar qualquer propriedade dentro do constructor — mesmo que essa propriedade seja 100% exclusiva da classe filha e não tenha nada a ver com o pai. o motor do JavaScript atribui à classe pai a responsabilidade de alocar a memória e criar a instância do objeto this. Portanto, o this não existe dentro do construtor da subclasse até que a linha do super() seja executada.

// Você só precisa declarar o constructor e a função super() na subclasse quando quiser adicionar propriedades exclusivas, modificar como os parâmetros são passados ou executar lógicas adicionais na hora de instanciar o objeto. Omiti-los é útil apenas quando a subclasse não precisa de nenhuma inicialização diferente da superclasse.

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    };
    

    criarCurso(nomeCurso, vagas) {
        return `Curso de ${nomeCurso} criado com ${vagas} vagas.`
    }

    // Método que sofre POLIMORFISMO (por override), pois seu comportamento está sendo sobrescrito nessa classe (herda o método da superclasse User) para se comportar de uma maneira mais adequada à subclasse
    // Dessa forma, o método é sobrescrito em Admin (subclasse de User) e MODIFICA O RETORNO de uma maneira que possa ser mais condizente à classe
    // Agora, o método exibirInfo(), herdado da superclasse User, tem um COMPORTAMENTO PRÓPRIO que é diferente do comportamento de exibirInfo() da superclasse User, que é de onde o método é herdado.
    exibirInfo() {
        // Executa diretamente o método da superclasse através da função super, trazendo as informações base. Agora, o método tem seu retorno modificado (em relação ao método "cru" da superclasse) e retorna informações específicas a partir da classe Admin
        const infos = super.exibirInfo()
        return `Admin: ${infos} (polimorfismo)`
        // return `Admin: ${this.nome}, ${this.email}`
    }
};

const novoAdmin = new Admin('Rodrigo', 'j@j.com', '01/01/1900');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfo());
console.log(novoAdmin.criarCurso('JavaScript', 20));



console.log(novoAdmin.nome);







// A regra prática é: para modelos com muitas instâncias construídas sob demanda, a sintaxe de class traz clareza e estrutura. Para composição flexível, herança de configurações ou pontes diretas entre dois objetos únicos, a delegação direta por protótipo é superior e mais simples.
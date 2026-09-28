import User from "./User-class.js";


// EXTENDS: A palavra-chave extends é a responsável por criar a ligação de herança entre duas classes no JavaScript, conectando a cadeia de protótipos (prototype chain)

// Quando você não escreve um constructor na subclasse, o JavaScript cria um constructor (junto com um super, dentro) PADRÃO AUTOMATICAMENTE por baixo dos panos. Como o construtor implícito chama super(...args) repassando todos os parâmetros recebidos, a inicialização da superclasse (na sub) ocorre normalmente, podendo inclusive passar argumentos na hora de instanciar uma subclasse, mesmo que a sub não possua constructor e/ou super (pois, como dito, o JS as inclui por debaixo dos panos).

// Se a classe pai não tiver um constructor definido explicitamente, o JavaScript cria automaticamente um construtor padrão (vazio) em segundo plano: constructor() {}. O super() executará esse construtor padrão e o seu código funcionará sem erros. Chamar super() continua sendo obrigatório: Se a classe filha tiver um constructor, você ainda precisa chamar super(), independente de a classe pai ter ou não um construtor explícito.

// Em JavaScript, uma classe filha sempre dependerá do super() para criar qualquer propriedade dentro do constructor — mesmo que essa propriedade seja 100% exclusiva da classe filha e não tenha nada a ver com o pai. o motor do JavaScript atribui à classe pai a responsabilidade de alocar a memória e criar a instância do objeto this. Portanto, o this não existe dentro do construtor da subclasse até que a linha do super() seja executada.

// Você só precisa declarar o constructor e a função super() na subclasse quando quiser adicionar propriedades exclusivas, modificar como os parâmetros são passados ou executar lógicas adicionais na hora de instanciar o objeto. Omiti-los é útil apenas quando a subclasse não precisa de nenhuma inicialização diferente da superclasse.

// Super é usada dentro de uma classe filha (subclasse) para referenciar e chamar membros do construtor ou métodos da classe pai (superclasse). A função super() executa o miolo (o corpo do código) da função constructor da classe pai.

// *** SE ATENTAR: Executar, em uma SUBCLASSE (classe filha) métodos herdados de uma superclasse, que usa propriedades privadas na construção de seu método funcionará normalmente pois a estrutura do método foi feito NA superclasse, que por sua vez TERÁ NORMALMENTE o acesso às proprias propriedades privadas

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    };

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} foi aprovado(a) no curso ${curso} pelo responsável ${this.nome}`
    };

    // Exemplo de um método que retornaria UNDEFINED (CASO NÃO HOUVESSE OS GETTERS NA SUPERCLASSE), pois as propriedades da super classe agora são PROPRIEDADES PRIVADAS, ou seja, as propriedades "nome" e "email" agora são "#nome" e "#email", o que as torna DIFERENTES. Logo, as propriedades nome e email não existem NA SUPER CLASSE, fazendo com que a lógica da função super() e seus parâmetros não tenham efeitoe, consequentemente, retornarão undefined.
    exibeInfoDocente() {
        return `Info docente: ${this.nome}, ${this.email}`
    }
};


const novoDocente = new Docente('Ana', 'a@a.com', '1/1/2050');
console.log('Class docente:', novoDocente);
console.log(novoDocente.exibirInfo());
console.log(novoDocente.aprovarEstudante('Clara', 'JavaScript'));

// RETORNARIA UNDEFINED (CASO NÃO HOUVESSEM OS GETTERS NA SUPERCLASSE)
console.log(novoDocente.exibeInfoDocente())

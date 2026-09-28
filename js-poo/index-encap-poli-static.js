import User from "./User-class.js";
import Admin from "./Admin-class.js";
import Docente from "./Docente-class.js";


// ENCAPSULAMENTO: É uma forma de "proteger" um dado, uma propriedade, por exemplo, para que não seja tanto intencionalmente quanto não intencionalmente alterada posteriormente (por exemplo, evita bugs que podem ocorrer devido à reatribuição não intencional de uma propriedade).

// Em JavaScript, normalmente o ENCAPSULAMENTO pode ser feito através de duas ferramentas: ATRIBUTOS PRIVADOS ou MÉTODOS ASSESSORES/PRIVADOS.

// **** ATRIBUTOS PRIVADOS: Para sinalizarmos que uma propriedade será um ATRIBUTO PRIVADO, precisamos, NA CRIAÇÃO DA PROPRIEDADE, NO CONSTRUCTOR DA CLASSE, adicionar um identificador "#" entre o "this" e o nome da propriedade (exemplo: this.#nome) e SINALIZAR, TAMBÉM, de preferência no topo, acima da declaração da função constructor, que as propriedades estarão VIRANDO propriedades privadas, simplesmente escrevendo o sinalizador e o nome da propriedade (exemplo: #nome) (vide exemplo no arquivo User.class)

// **** MÉTODOS PRIVADOS: Para criar-se MÉTODOS PRIVADOS, também usa-se a mesma lógica (porém, pelo visto, não é necessário a declaração no topo, apenas o hashtag no início). Porém, normalmente ainda não se poderá usar o método por fora da classe de onde foi criado, mesmo que uma instância o tenha herdado.

// **** EXEMPLO DA SINTAXE (que, inclusive, está escrita na classe User):

//     #nome
//     #email
//     #nascimento
//     #role
//     #ativo
//     constructor(nome, email, nascimento, role, ativo = true) {
//         this.#nome = nome
//         this.#email = email
//         this.#nascimento = nascimento
//         this.#role = role || 'estudante'
//         this.#ativo = ativo

//         this.greet = 'Hello'
//     }

// Para criar-se MÉTODOS PRIVADOS, também usa-se a mesma lógica (porém, pelo visto, não é necessário a declaração no topo, apenas o hashtag no início)
//     #montaObjUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento
    //     })
    // }


// ******** NOTA: propriedade "nome" e propriedade com atributo privado "#nome" SERÃO COISAS DIFERENTES, DISTINTAS. Caso atribuíssemos um atributo privado a uma propriedade através do identificador "#" e posteriormente tentassemos reatribuir a propriedade (por exemplo: usuario.nome = 'abc') da "forma normal, simples", estaríamos apenas criando uma OUTRA propriedade "nome", pois a propriedade "nome" NÃO IRÁ SE REFERIR a "#nome", sendo DIFERENTE de "#nome". Logo, atentar-se quando o código utiliza propriedades priavadas

// **** NOTA 2: Lembrar de, também, se caso alguma propriedade esteja sendo referenciada dentro de algum método da própria classe (usando a sintaxe do this), referenciar corretamente a propriedade, que agora passará a ter o sinalizador "#" antes do nome da propriedade (this.#nome) pois, como dito anteriormente: this.nome é DIFERENTE de this.#nome, SÃO PROPRIEDADES DIFERENTES. Logo, atentar-se quando o código utiliza propriedades priavadas.

// NOTA 3: Uma propriedade privada não pode ser nem reatribuida e NEM ACESSADA (Property '#nome' is not accessible outside class 'User' because it has a private identifier).

const novoUser = new User('Juliana', 'j@j.com', '1/1/2026');
console.log(novoUser.exibirInfo());


// Exemplo de tentativa de atribuição a um ATRIBUTO PRIVADO, que gera erro (Property '#nome' is not accessible outside class 'User' because it has a private identifier).
//novoUser.#nome = 'Abcd'


// Exemplo de atribuição INVÁLIDA, a qual gerará um erro de acordo com a lógica dentro do SET nome
//novoUser.nome = '';

// Exemplo de atribuição bem sucedida a uma propriedade (privada) via SET (que é um método, porém, usa sintaxe normal de atribuição)
novoUser.nome = 'Joao'
// GET
console.log(novoUser.nome)



// ************ POLIMORFISMO (por sobrescrita de método: Overriding)

// Ocorre quando uma subclasse estende uma classe pai e substitui a implementação de um método herdado para definir um comportamento próprio, um NOVO comportamento.
// É quando um método é SOBRESCRITO (redeclarando na subclasse) em uma subclasse (método esse herdado de uma superclasse) para que o mesmo, se necessário, SE COMPORTE DE FORMA DIFERENTE.
// Um método só se comporta de maneira diferente em instâncias provenientes de uma subclasse na qual o método foi sobrescrito. Fora isso, outras subclasses executam o método normalmente da maneira em que herdaram da superclasse.
// * Pode-se ABSTRAIR qualquer lógica para implementação de um método (para "polimorfisar") herdado de uma superclasse, de acordo com a necessidade da subclasse/projeto. Nada impede de refazermos a lógica, de "polimorfisar" um método para modificar seu retorno e se adequar à classe.
// * LEMBRAR: Um método sobrescrito NÃO IRÁ interferir no mesmo método herdado em outras subclasses
// No caso, o "objetivo" seria ter um MÉTODO BASE e, QUANDO FOR NECESSÁRIO que uma subclasse estabeleça um comportamento diferente, pode ser feito SOBRESCREVENDO (override) o método original (o método original ainda funcionará normalmente, funcionará de forma diferente apenas na subclasse onde foi reescrito).
// * ATENTAR-SE AO TERMO "COMPORTAMENTOS/SOBRESCRITA DE MÉTODOS", que pode ser bastante usado em POO
// ** BASICAMENTE: Polimorfismo é quando a lógica interna de um mesmo método (herdado de uma superclasse) é modificado a DEPENDER DO CONTEXTO onde é executado, ou seja, quando o contexto das diferentes SUBCLASSES de onde o método pode vir a ser executado varia, podendo ter COMPORTAMENTOS DIFERENTES do mesmo método a depender da subclasse
// CRIA-SE UM "MÉTODO BASE" EM UMA SUPERCLASSE QUE PODE, POSTERIORMENTE NAS SUBCLASSES, SER SOBRESCRITO E TER SEU COMPORTAMENTO ALTERADO A DEPENDER DO CONTEXTO DA PRÓPRIA SUBCLASSE


const novoAdmin = new Admin('Rodrigo', 'r@r.com', '01-01-1900');

// O método, a partir de Admin, tem um COMPORTAMENTO diferente do que o "método base" proveniente da superclasse User
console.log(novoAdmin.exibirInfo())







// EXEMPLOS
class Animal {
  falar() {
    return "O animal faz um som.";
  }
}

class Cachorro extends Animal {
  // Sobrescreve o método falar() da classe pai
  falar() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  // Sobrescreve o método falar() da classe pai
  falar() {
    return "Miau!";
  }
}

// Função polimórfica: aceita qualquer objeto que possua o método .falar()
// Neste exemplo, a função emitirSom não precisa saber se o parâmetro é um Cachorro ou um Gato. Ela apenas chama .falar(), e o JavaScript executa a versão correspondente ao objeto correto.
function emitirSom(animal) {
  console.log(animal.falar());
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();

emitirSom(meuCachorro); // "Au Au!"
emitirSom(meuGato);     // "Miau!"












// **** POLIMORFISMO POR ASSINATURA DE FUNÇÃO 

// É uma das formas mais usuais de se implementar polimorfismo. A ASSINATURA de uma função é um conjunto de informações que pode ser composta pelo nome da função, pelo conjunto de parâmetros que ela recebe, pelo tipo de dado que o parâmetro recebe e, pode também, incluir o tipo do retorno

// A assinatura permite que em algumas linguagens de programação (Java, por exemplo) UMA MESMA FUNÇÃO possa ser definida com parâmetros diferentes e possa ter, internamente, comportamentos diferentes de acordo com os parâmetros que a função recebe, ou seja, assinaturas diferentes. Logo, na prática, pode-se ter DUAS FUNÇÕES COM O MESMO NOME (algo que no JavaScript NÃO É POSSÍVEL), DOIS MÉTODOS COM O MESMO NOME que RECEBAM PARÂMETROS DIFERENTES (ou seja, novamente, assinaturas diferentes) e possuírem lógicas distintas internamente. É uma forma de modificarmos COMPORTAMENTOS de um método: modificando a entrada e, consequentemente, modifica-se também a lógica interna.

// JavaScript não consegue trabalhar com essa forma de assinatura de função pois o JS (ao contrário do Java) é uma linguagem dinamicamente tipada, fracamente tipada e não é compilada (atenção a termos: tipagem forte, fraca ou dinâmica)

// Especialmente com relação ao polimorfismo, tem algumas coisas que o TypeScript pode solucionar e trazer mais funcionalidades para ajudar o JS, pois o próprio JS tem suas limitações que são ligadas à forma como a linguagem foi pensada (TypeScript é um conjunto de funcionalidades que é adicionado ao JS). Essas funcionalidades extras estão mais alinhadas à forma como outras linguagens usualmente trabalham com POO. O TypeScript é o que chamamos de superset, ou seja, um pacote de funcionalidades extras que é “adicionado” ao JavaScript e que permite a adição de diversas funcionalidades ao código. As mais importantes são relacionadas à tipagem, mas também foram adicionadas diversas ferramentas que fazem muita diferença na implementação de um projeto orientado a objetos, como interfaces, modificadores de acesso, classes abstratas, entre outros.

const novaDocente = new Docente('Ana', 'a@a.com', '01-01-1900');
console.log(novaDocente.exibirInfo2());











// MÉTODOS/PROPRIEDADES ESTÁTICOS (exemplo na class User)

// Métodos estáticos são métodos que *PERTECEM À PRÓPRIA CLASSE E PERMANECEM NA MESMA* AO INVÉS DE PERTENCEREM/SEREM PASSADAS ÀS INSTÂNCIAS/OBJETOS CRIADOS A PARTIR DAQUELA CLASSE
// Métodos estáticos também podem ser chamados de MÉTODOS DE CLASSE, justamente por não pertencerem a uma instância específica, mas sim à própria classe
// O método é invocado a partir DA PRÓPRIA CLASSE ONDE FOI CRIADO (exemplo: User.metodoEstatico)
// Normalmente, classes não executam/acessam, de forma direta, métodos/propriedades que foram criados nela, normalmente tais elementos são acessados a partir das instâncias criadas a partir da classe. Já métodos e propriedades estáticas são acessados DIRETAMENTE ATRAVÉS DA CLASSE
// O MESMO TAMBÉM SERVE PARA PROPRIEDADES
// Basta adicionar a palavra reservada "STATIC" antes de um método ou propriedade
// *** MÉTODOS E PROPRIEDADES ESTÁTICOS PERTENCEM À CLASSE AO INVÉS DOS OBJETOS CRIADOS A PARTIR DELA, OU SEJA, MÉTODOS E PROPRIEDADES ESTÁTICOS NÃO PODERÃO SER USADOS A PARTIR DE INSTÂNCIAS CRIADAS A PARTIR DA CLASSE, APENAS A PARTIR DA PRÓPRIA CLASSE EM SI.
// NOTA: É por isso que quando instalamos bibliotecas externas, não precisamos (creio que na maioria dos casos) instanciar novos objetos apenas para utilizar seus métodos e propriedades, pois os mesmos são ESTÁTICOS e usados a partir da classe
// *** Utilidade: com métodos estáticos não há a necessidade de criarmos/instanciarmos um objeto apenas para usar/acessar o método ou propriedade de uma classe, pois os mesmos, caso estáticos, podem ser ACESSADOS DIRETAMENTE ATRAVÉS DA CLASSE.
// ** MÉTODOS ESTÁTICOS E MÉTODOS NORMAIS PODEM COMPARTILHAR DO MESMO NOME

const dadosFicticiosMetodoEstatico = User.exibirInfo('nome', 'email');
console.log(dadosFicticiosMetodoEstatico);








// EXEMPLOS:

class UsuarioExemplo {
  // Métodos e propriedades estáticas NÃO SÃO passados às instâncias e NÃO SÃO CONSIDERADOS quando ocorre a criação de uma instância, permanecendo APENAS NA CLASSE onde foram criadas.
  // A lógica com esse contador (que conta a quantidade de instâncias criadas a partir da classe) usando uma propriedade estática funciona, pois, no momento da criação de uma instância, o contador SERÁ IGNORADO, pois um método estático pertence APENAS À CLASSE e, portanto, toda vez que uma instância for criada, a atribuição "count = 0" será ignorada pois não fará parte da criação da instância, sendo apenas atualizada (dentro do constructor, que fará parte da criação da nova instância) no momento da criação de cada nova instância, diferentemente do que seria se caso o contador fosse apenas uma propriedade comum, pois sendo uma propriedade comum, ela passaria a entrar na criação de cada nova instância e, nesse momento, a atribuição "count = 0" sempre estaria sendo reatribuida a 0.
 static count = 0
  constructor(nome, role) {
    this.nome = nome
    this.role = role
    UsuarioExemplo.count++
  };

  get count() {
    if (this.role === 'a') {
      return UsuarioExemplo.count
    }
    return 'Não permitido'
  }
}

const usuario1 = new UsuarioExemplo('abc', 'a');
const usuario2 = new UsuarioExemplo('bcd', 'a');
const usuario3 = new UsuarioExemplo('bfcd');
console.log(usuario1.count);
console.log(usuario2.count);
console.log(usuario3.count);

// ---------------------------------- Aula 1 -----------------------------

const { log } = require("node:console");




// Ex 1


// const livro = {
//     titulo: 'Titulo do Livro',
//     autor: 'Autor do Livro',
//     anoPublicacao: 2002,
//     genero: 'Ficção',
// };

// console.log(`Titulo: ${livro.titulo}`);
// console.log(`Autor: ${livro.autor}`);
// console.log(`Ano de publicação: ${livro.anoPublicacao}`);
// console.log(`Gênero: ${livro.genero}`);




// Ex 2




// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Titulo do Livro',
//     autor: 'Autor do Livro',
//     anoPublicacao: 2002,
//     genero: 'Ficção',
// };

// livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// livro.mostrarDetalhes = `Detalhes do livro
//     Título do livro: ${livro.titulo}
//     Nome do autor: ${livro.autor}
//     Ano de publicação: ${livro.anoPublicacao}
//     Gênero do livro: ${livro.genero}
//     Idade da publicação: ${livro.idadePublicacao}`
// ;

// console.log(livro.mostrarDetalhes);
// console.log(livro);






// Ex 3

// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Titulo do Livro',
//     autor: 'Autor do Livro',
//     anoPublicacao: 2002,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2002,
// };


// console.log(`Título do livro: ${livro['titulo']}`);
// console.log(`Autor: ${livro['autor']}`);
// console.log(`Ano de publicação: ${livro['anoPublicacao']}`);
// console.log('Gênero: ' + livro['genero']);
// console.log('Idade de publicação: ' + livro['idadePublicacao']);







// Ex 4



// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Titulo do Livro',
//     autor: 'Autor do Livro',
//     anoPublicacao: 2002,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2002,
//     avaliacao: null,
// };

// const novaAvaliacao = {
//     nota: 4.5,
//     comentario: 'Ótima leitura!',
// }


// if (livro.avaliacao === null) {
//     livro.avaliacao = novaAvaliacao
// } else {
//     console.log('Este livro já possui uma avaliação.');
// }


// console.log(`Titulo do livro: ${livro.titulo}`);
// console.log(`Autor do livro: ${livro['autor']}`);
// console.log('Ano publicado: ' + livro.anoPublicacao);
// console.log('Gênero: ' + livro['genero']);
// console.log(`Tempo publicado: ${livro['idadePublicacao']} anos`);
// console.log(livro.avaliacao === null ? 'Não possui uma avaliação.' : `Nota: ${livro.avaliacao.nota} \nComentário: ${livro.avaliacao.comentario}`);









// Ex 5



// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Titulo do Livro',
//     autor: 'Autor do Livro',
//     anoPublicacao: 2002,
//     genero: 'Ficção',
// };


// livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// livro.genero = 'Aventura';

// console.log(livro);






// Ex 6


// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Titulo do Livro',
//     autor: 'Autor do Livro',
//     anoPublicacao: 2002,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2002,
//     avaliacao: null,
// };


// delete livro.avaliacao;

// console.log(livro);












// -------------------------------------- Aula 2 -------------------------------------




// Ex 1

// const pessoa = {
//     nome: 'Clara',
//     idade: 22,
//     solteiro: true,
//     hobbies: ["Leitura", "Caminhada", "Fotografia"],
// };

// function mostrarInfoPessoa (obj) {
//     console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
//     console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
//     console.log(`Estado civil: ${pessoa['solteiro']} (Tipo: ${typeof pessoa['solteiro']})`);
//     console.log(`Hobbies: ${pessoa.hobbies.join(', ')} (Tipo: ${typeof pessoa['hobbies']})`);
// }

// console.log(mostrarInfoPessoa(pessoa));








// Ex 2


// const pessoa = {
//     nome: 'Clara',
//     idade: 22,
//     solteiro: true,
//     hobbies: ["Leitura", "Caminhada", "Fotografia"],
// };


// pessoa.endereco = {
//     rua: 'ABCDEF',
//     cidade: 'ZDFEGH',
//     estado: 'Rio de Janeiro',
// }

// function mostrarInfoPessoa (obj) {
//     console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
//     console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
//     console.log(`Estado civil: ${pessoa['solteiro']} (Tipo: ${typeof pessoa['solteiro']})`);
//     console.log(`Hobbies: ${pessoa.hobbies.join(', ')} (Tipo: ${typeof pessoa['hobbies']}) \n`);

//     console.log('Endereço: \n');
    
//     console.log(`Rua: ${pessoa.endereco.rua} (Tipo: ${typeof pessoa.endereco.rua})`);
//     console.log(`Cidade: ${pessoa['endereco']['cidade']} (Tipo: ${typeof pessoa['endereco']['cidade']})`);
//     console.log(`Estado: ${pessoa.endereco.estado} (Tipo: ${typeof pessoa.endereco.estado})`);
// }

// console.log(mostrarInfoPessoa(pessoa));









// Ex 3


// const pessoas = [
//     {nome: 'Clara', idade: 20, estado: 'RJ'},
//     {nome: 'Ana', idade: 30, estado: 'SP'},
//     {nome: 'Camila', idade: 35, estado: 'GO'},
// ];


// function mostrarListaPessoas (listaPessoas) {
//     listaPessoas.forEach((n) => {
//         console.log(`Nome: ${n.nome}, Idade: ${n.idade}, Estado: ${n['estado']}`);
//     });
//     console.log('\n'); // Log com \n apenas para separar o primeiro do segundo log!
// };

// mostrarListaPessoas(pessoas);

// pessoas.push({
//     nome: 'Laura',
//     idade: 26,
//     estado: 'SP'
// });

// mostrarListaPessoas(pessoas);



// function filtrarPorCidade (listaPessoas, cidade) {
//     // const filtro = listaPessoas.filter((n) => n.estado === cidade);
//     // return filtro;

//     // OU

//     return listaPessoas.filter((n) => n.estado === cidade)
// };


// console.log(filtrarPorCidade(pessoas, 'RJ'));










// Ex 4



// const calculadora = {
//     soma: function (n1, n2) {
//         return `A soma entre ${n1} + ${n2} é ${n1 + n2}.`;
//     },

//     subtracao: function (n1, n2) {
//         return `A subtração entre ${n1} e ${n2} é ${n1 - n2}.`;
//     },

//     divisao: function (n1, n2) {
//         if (n1 === 0 || n2 === 0) {
//             return 'A divisão é 0.';
//         } else {
//             return `A divisão entre ${n1} e ${n2} é ${n1 / n2}.`;
//         };
//     },

//     multiplicacao: function (n1, n2) {
//         return `A multiplicação entre ${n1} e ${n2} é ${n1 * n2}.`;
//     },
// }

// console.log(calculadora.soma(15, 3));
// console.log(calculadora.subtracao(15, 3));
// console.log(calculadora.divisao(15, 3));
// console.log(calculadora.multiplicacao(15, 3));

// const listaNumeros = [15, 22, 33, 41, 61];

// calculadora.calcularMedia = function (arr) {
//     const soma = arr.reduce((accumu, n) => accumu + n, 0);
//     return `A média dos números ${arr.join(', ')} é: ${(soma / arr.length).toFixed(2)}`;
// }


// console.log(calculadora.calcularMedia(listaNumeros));











// Ex 5



// const contaBancaria = {
//     titular: 'Clara',
//     saldo: 5000,

//     depositar: function (n) {
//         if (n < 0) {
//             return 'Operação inválida.';
//         } else {
//             this.saldo = this.saldo + n;
//             // return `Saldo de R$${n.toFixed(2)} foi adicionado à sua conta. Seu saldo atual agora é R$${this.saldo.toFixed(2)}.`;
//         }
//     },

//     sacar: function (n) {
//         if (n > this.saldo) {
//             return 'Não há saldo suficiente para realizar o saque.';
//         } else {
//             this.saldo = this.saldo - n;
//             // return `Saque de R$${n.toFixed(2)} foi realizado. Seu saldo atual agora é ${this.saldo.toFixed(2)}.`;
//         }
//     },
// };


// const cliente = {
//     nome: 'Clara',
//     conta: contaBancaria, // **** IMPORTÂNCIA DAS REFERÊNCIAS: Essa é uma REFERÊNCIA à conta bancária associada a esse cliente (objeto criado anteriormente).
// };


// function mostrarSaldo (objCliente) {
//     console.log(`Nome do cliente: ${objCliente.nome}`);
//     console.log(`Saldo: R$${objCliente.conta.saldo}`);
// };

// mostrarSaldo(cliente);


// cliente.conta.depositar(5000);
// cliente.conta.sacar(2000);


// mostrarSaldo(cliente);













// ------------------------------------------------ Aula 3 -----------------------------------------------





// Ex 1



// const pessoa = {
//     nome: 'Clara',
//     notas: [8, 9, 10, 9, 10],

//     calcularMediaNotas: function () {
//         const soma = this.notas.reduce(function (acumulador, n) {
//             return acumulador = acumulador + n;
//         }, 0)
//         return soma / this.notas.length;
//     },

//     classificarDesempenho: function () {
//         // if (this.calcularMediaNotas() >= 9) {
//         //     return "Desempenho excelente.";
//         // } else if (this.calcularMediaNotas() >= 7.6 && this.calcularMediaNotas() <= 8.9) {
//         //     return "Bom desempenho";
//         // } else if (this.calcularMediaNotas() >= 6 && this.calcularMediaNotas() <= 7.5) {
//         //     return "Média regular";
//         // } else if (this.calcularMediaNotas() < 6) {
//         //     return "Média insuficiente";
//         // }


//         // IMPORTANTE: Para evitar fazer o que foi feito acima, atribui-se AQUI NESSE MÉTODO o resultado do método que calcula média
//         const media = this.calcularMediaNotas(); 
//         if (media >= 9) {
//             return "Desempenho excelente.";
//         } else if (media >= 7.6 && media <= 8.9) {
//             return "Bom desempenho";
//         } else if (media >= 6 && media <= 7.5) {
//             return "Média regular";
//         } else {
//             return "Média insuficiente";
//         }

//     }
// };

// const mediaCalculada = pessoa.calcularMediaNotas();
// console.log(mediaCalculada);

// const desempenho = pessoa.classificarDesempenho();
// console.log(desempenho);








// Ex 2


// const carro = {
//     marca: 'nissan',
//     modelo: 'versa',
//     ano: 2010,
//     cor: 'preto',
// };

// for (const key in carro) {
//    console.log(`A chave da propriedade é ${key} e seu valor é ${carro[key]}.`);
// };

// carro.pneu = 'pirelli';
// carro.automatico = false;

// for (const key in carro) {
//     console.log(`A chave da propriedade é ${key} e seu valor é ${carro[key]}.`);
// };









// Ex 3

// const carro = {
//     marca: 'nissan',
//     modelo: 'versa',
//     ano: 2010,
//     cor: 'preto',

//     ligado: true,

//     ligar: function () {
//         if (!this.ligado) {
//             this.ligado = true;
//             console.log('O carro foi ligado.');
//         } else {
//             console.log('O carro já estava ligado.');
//         }
//     },

//     desligar: function () {
//         if (this.ligado) {
//             this.ligado = false;
//             console.log('O carro foi desligado.');
//         } else {
//             console.log('O carro já estava desligado.');
//         }
//     },

//     obterDetalhes: function () {
//         const estado = this.ligado ? 'ligado' : 'desligado'; // Obtendo resposta a partir do booleano presente
//         return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
//     },
// };

// carro.ligar();
// carro.desligar();
// carro.desligar();
// carro.ligar();

// console.log(carro.obterDetalhes());












// Ex 4


// const carro = {
//     marca: 'nissan',
//     modelo: 'versa',
//     ano: 2010,
//     cor: 'preto',
// };

// Object.defineProperty(carro, 'placa', {
//     value: 'JLSKJ29038',
//     enumerable: false,
// });

// for (const key in carro) {
//     console.log(`${key}: ${carro[key]}`);
// };

// const detalhesCarro = Object.keys(carro);
// console.log(detalhesCarro);

// console.log(carro.placa); // Acesso direto à propriedade placa que está **NÃO ENUMERÁVEL**

// OBSERVAÇÃO: Pode-se também adicionar a propriedade placa no objeto literário normalmente e DEPOIS usar o **defineProperty** para torná-la NÃO ENUMERÁVEL. Ou seja, propriedades já existentes podem ser configuradas (como no exemplo para não enumerável) com o defineProperty MESMO QUE JÁ TENHAM SIDO CRIADAS NO OBJETO!!













// Ex 5


// const carro = {
//     marca: 'nissan',
//     modelo: 'versa',
//     ano: 2010,
//     cor: 'preto',
//     placa: 'WUSJZ29348',
// };

// const carroNovo = {
//     marca: 'chevrolet',
//     modelo: 'kadett',
//     ano: 1994,
//     cor: 'branco',
// };

// const carroComNovosDetalhes = {...carro, ...carroNovo};
// console.log(carroComNovosDetalhes);

// carroComNovosDetalhes.cor = 'cinza';
// console.log(carroComNovosDetalhes);




















// ------------------------------------------ Aula 4 -----------------------------------------





// Ex 1


// const dados = require('./exercicios-dados.json');

// console.log(dados);
// console.log(dados.produtos);
// console.log(dados.usuarios);
// console.log(dados.produtos[0]);
// console.log(dados.usuarios[1]);
// console.log(dados.produtos[0].nome);
// console.log(dados.produtos[1].preco);










// Ex 2


// const dados = require('./exercicios-dados.json');

// console.log(dados);










// Ex 3


// const produto = {
//     id: 1,
//     nome: 'calça',
//     preco: 80.99
// };

// const stringProduto = JSON.stringify(produto);
// console.log(stringProduto);











// Ex 4 *******************



// Meu jeito da resolução do exercício
// const animais = require('./exercicios-animais.json');

// const novoAnimal = {
//     id: 4,
//     nome: 'Cachorro',
//     tipo: 'Mamífero',
//     habitat: 'Doméstico'
// };

// animais.animais.push(novoAnimal);


// animais.animais[3].habitat = 'Casa';

// console.log(animais);

// animais.animais.splice(1, 1);

// console.log(animais);

// const stringAnimais = JSON.stringify(animais);
// console.log(stringAnimais);





// ********** Jeito da professora da resolução do exercício (copiado pois achei interessante a forma que métodos de Array retornam objetos inteiros, sendo procurados por suas propriedades)
// manipulacaoJson.js
// const objetoAnimais = {
//     "animais": [
//         {
//             "id": 1,
//             "nome": "Leão",
//             "tipo": "Mamífero",
//             "habitat": "Savana"
//         },
//         {
//             "id": 2,
//             "nome": "Pinguim",
//             "tipo": "Ave",
//             "habitat": "Pólo Sul"
//         },
//         {
//             "id": 3,
//             "nome": "Cobra",
//             "tipo": "Réptil",
//             "habitat": "Floresta Tropical"
//         }
//     ]
// };

// // Adiciona um novo animal ao array de animais
// const novoAnimal = {
//     "id": 4,
//     "nome": "Elefante",
//     "tipo": "Mamífero",
//     "habitat": "Savana"
// };
// objetoAnimais.animais.push(novoAnimal);

// // Modifica o habitat de um animal existente no array de animais
// const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
// if (animalParaModificar) {
//     animalParaModificar.habitat = "Oceano Antártico";
// }

// // Remove um animal do array de animais
// const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
// if (indiceAnimalRemover !== -1) {
//     objetoAnimais.animais.splice(indiceAnimalRemover, 1);
// }

// // Converte o objeto modificado para uma string JSON
// const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// // Imprime no console o objeto JavaScript resultante das operações
// console.log("Objeto JavaScript Resultante das Operações:");
// console.log(objetoAnimais);













// Ex 5


// const pessoa = {
//     id: 1,
//     nome: "Clara",
//     idade: 22,
// };


// // Função que recebe um objeto e realiza uma *CÓPIA PROFUNDA* de um objeto, usando JSON stringify e parse
// function clonaObjeto (obj) {
//     return JSON.parse(JSON.stringify(obj))
// };

// // Atribuindo a cópia do objeto à nova variável
// const clonePessoa = clonaObjeto(pessoa);


// // Alterando valores da cópia para ter certeza de que não foi criado uma referência ao objeto original
// clonePessoa.nome = 'Ana';

// // Imprimindo resultados de ambos, clone e original, respectivamente
// console.log(clonePessoa);
// console.log(pessoa);



















// ------------------------------------------------ Aula 5 -----------------------------------------



// Ex 1


// const livros = [
//     {
//         id: 1,
//         titulo: 'Capitães da Areia',
//         autor: 'Jorge Amado',
//         ano: 1937,
//     },
//     {
//         id: 2,
//         titulo: 'Vidas Secas',
//         autor: 'Graciliano Ramos',
//         ano: 1938,
//     },
//     {
//         id: 3,
//         titulo: 'Dom Quixote',
//         autor: 'Miguel de Cervantes',
//         ano: 1605,
//     }
// ];


// function encontrarLivroPorId (lista, chave, valorId) {
//     // Resolução "oficial" do exercicio
//     return lista.find((item) => item[chave] === valorId) || null;

//     // Minha tentativa usando a minha lógica de incluir o "null" numa condicional. Funciona com o caminho certo, mas com o caminho errado dá erro
//     // const verifica = lista.find((item) => item[chave] === valorId);
//     // if (verifica[chave] === valorId) {
//     //     return verifica
//     // } else {
//     //     return null
//     // }
    
// };


// const achado = encontrarLivroPorId(livros, 'id', 3);
// console.log(achado);













// Ex 2


// const filmes = [
//     {
//         id: 1,
//         titulo: 'Django',
//         diretor: 'Tarantino',
//         anoLancamento: 2000,
//     },
//     {
//         id: 2,
//         titulo: 'Bastardos',
//         diretor: 'Tarantino',
//         anoLancamento: 2002,
//     },
//     {
//         id: 3,
//         titulo: 'Kill Bill',
//         diretor: 'Tarantino',
//         anoLancamento: 1990,
//     }
// ];

// function filtrarFilmesPorAno (lista, chave, valorAno) {
//     return lista.filter((item) => item[chave] === valorAno)
// }

// const achado = filtrarFilmesPorAno(filmes, 'anoLancamento', 2002);
// console.log(achado);

















// Ex 3


// const produtos = [
//     {
//         id: 2,
//         nome: 'camisa',
//         preco: 15.99,
//     },
//     {
//         id: 1,
//         nome: 'boné',
//         preco: 10.99,
//     },
//     {
//         id: 3,
//         nome: 'calça',
//         preco: 59.99
//     },
//     {
//         id: 4,
//         nome: 'tênis',
//         preco: 99.99,
//     },
// ];

// function filtrarOrdenarProdutosPorPreco (lista, chave, valorMax) {
//     const filtraPreco = lista.filter((item) => item[chave] <= valorMax);
//     // return filtraPreco.sort((a, b) => a[chave] - b[chave]); <----- Também funciona!
//     return filtraPreco.sort((a, b) => {
//         if (a[chave] < b[chave]) {
//             return -1;
//         } else if (a[chave] > b[chave]) {
//             return 1;
//         }     
//         return 0;
//     })
// }

// const produtosFiltrados = filtrarOrdenarProdutosPorPreco (produtos, 'preco', 20);
// console.log(produtosFiltrados);



















// Ex 4



// const animais = [
//     {id: 1, nome: 'Coruja', especie: 'Ave', idade: 3},
//     {id: 4, nome: 'Papagaio', especie: 'Ave', idade: 2},
//     {id: 3, nome: 'Gato', especie: 'Mamífero', idade: 4},
//     {id: 2, nome: 'Tartaruga', especie: 'Réptil', idade: 6},
// ];


// function ordenarAnimais (lista, ordemComparacao) {
//     return lista.sort(ordemComparacao);
// };

// function comparaOrdemCrescente (a, b) {
//     // return a.idade - b.idade;

//     if (a.idade < b.idade) {
//         return -1;
//     }

//     if (a.idade > b.idade) {
//         return 1;
//     }

//     return 0;
// } 

// // *****NOTA: Na ordem decrescente, apenas inverti (comparado ao exemplo crescente) os retornos de "1" e "-1", podendo também ter apenas invertido a ordem de A e B
// function comparaOrdemDecrescente (a, b) {
//     // return b.idade - a.idade

//     if (a.idade < b.idade) {
//         return 1;
//     }

//     if (a.idade > b.idade) {
//         return -1;
//     }

//     return 0;
// }


// const resultadoCrescente = ordenarAnimais(animais, comparaOrdemCrescente);
// console.log(resultadoCrescente);


// const resultadoDecrescente = ordenarAnimais(animais, comparaOrdemDecrescente);
// console.log(resultadoDecrescente);


// Jeito feito usando operador ternário
// const abc = animais.sort((a, b) => a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0);

// console.log(abc);













// Ex 5


// const listaDepartamentos = [
//     {
//         id: 2,
//         nome: 'Finanças',
//         funcionarios: [
//             {id: 209, nome: 'Clara', cargo: 'Gerente de finanças'},
//             {id: 199, nome: 'Ana', cargo: 'Analista de finanças'},
//             {id: 302, nome: 'Camila', cargo: 'Sub-gerente de finanças'}
//         ]
//     },
//     {
//         id: 5,
//         nome: 'TI',
//         funcionarios: [
//             {
//                 id: 29,
//                 nome: 'Carolina',
//                 cargo: 'Gerente de TI'
//             },
//             {
//                 id: 98,
//                 nome: 'Paula',
//                 cargo: 'Analista de TI'
//             },
//             {
//                 id: 78,
//                 nome: 'Bruna',
//                 cargo: 'Sub-chefe de TI',
//             }
//         ]
//     },
//     {
//         id: 9,
//         nome: 'Vendas',
//         funcionarios: [
//             {
//                 id: 124,
//                 nome: 'Julia',
//                 cargo: 'Gerente de Vendas',
//             },
//             {
//                 id: 402,
//                 nome: 'Sara',
//                 cargo: 'Analista de Vendas',
//             },
//             {
//                 id: 506,
//                 nome: 'Gabriela',
//                 cargo: 'Sub-chefe de Vendas'
//             }
//         ]
//     }
// ]



// // *****Minha primeira resolução para o exercício
// function encontrarFuncionarioPorId (valorId) {
//     // Teste de tudo feito em uma linha só funciona, porém o caminho de "não encontrado" gera um ERRO ao invés da mensagem designada.
//     return listaDepartamentos.find((n) => n.funcionarios.find((j) => j.id === valorId)).funcionarios.find((k) => k.id === valorId) || 'Não encontrado';


//     // 
//     // return achado.funcionarios.find((n) => n.id === valorId || 'Funcionário não encontrado');
// };

// const funcionarioEncontrado = encontrarFuncionarioPorId(302);
// console.log(funcionarioEncontrado);




// ******* Minha "segunda" resolução. Um jeito que "encontrei" para fazer
// function encontrarFuncionarioPorId (valorId) {
//     let funcionario;
//     for (const item of listaDepartamentos) {
//         funcionario = item.funcionarios.find((n) => n.id === valorId);
//     }
//     return funcionario || null;
// }

// const achado = encontrarFuncionarioPorId (900);
// console.log(achado);






// *****Jeito proposto com a resolução do exercício pela professora (e também pela IA)
// function encontrarFuncionarioPorId (valorId) {
//     for (const item of listaDepartamentos) {
//         const funcionario = item.funcionarios.find((n) => n.id === valorId);

//         // Retorna o funcionário assim que encontrado durante a iteração
//         // OBS: Um objeto é considerado um valor "TRUTHY" (no caso do exemplo, quando achado com o FIND), por isso, ele "entra no IF", fazendo com que seja retornado CASO seja achado e, enquanto não é achado nas iterações, segue sendo "FALSY", pois seu retorno será "undefined" (e undefined é falsy).
//         if (funcionario) {
//             return funcionario;
//         }
//     }
//     return null;
// }

// const achado = encontrarFuncionarioPorId (402);
// console.log(achado);

// // Exemplo de truthy
// const num = 5;
// if (num) {
//     console.log('Sim, é considerado truthy.');
// }















// ------------------------------------------------------- Exercícios feitos a partir de enunciados gerados da IA


// const livros = [
//     { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
//     { id: 2, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen' },
//     { id: 3, titulo: '1984', autor: 'George Orwell' }
// ];

// function encontraLivro (chave, valorTitulo) {
//     return livros.find((n) => {
//         return n[chave] === valorTitulo;
//     })
// };

// const livroEncontrado = encontraLivro('titulo', 'Orgulho e Preconceito');
// console.log(livroEncontrado);



// const usuarios = [
//     { id: 1, nome: 'Ana', idade: 15 },
//     { id: 2, nome: 'Pedro', idade: 22 },
//     { id: 3, nome: 'Maria', idade: 17 }
// ];

// function encontraMaiorDeIdade (lista, chave, valorIdade) {
//     return lista.find((n) => n[chave] > valorIdade)
// };

// const encontrado = encontraMaiorDeIdade (usuarios, 'idade', 18);
// console.log(encontrado);




// const produtos = [
//     { id: 'A123', nome: 'Camiseta', preco: 29.99 },
//     { id: 'B456', nome: 'Calça', preco: 79.90 },
//     { id: 'C789', nome: 'Tênis', preco: 120.50 }
// ];

// function achaProduto (valorId) {
//     return produtos.find((item) => {
//         return item.id === valorId
//     })
// }

// console.log(achaProduto('B456'));




// const carros = [
//     { modelo: 'Gol', cor: 'branco', ano: 2015 },
//     { modelo: 'Uno', cor: 'vermelho', ano: 2018 },
//     { modelo: 'Palio', cor: 'branco', ano: 2020 }
// ];

// function procuraCor (valorCor) {
//     return carros.find((n) => n.cor === valorCor)
// }

// console.log(procuraCor ('branco'));








// const estudantes = [
//     { nome: 'Carlos', nota: 7.5 },
//     { nome: 'Sofia', nota: 9.0 },
//     { nome: 'Lucas', nota: 6.8 }
// ];

// function encontraEstudante (valorNotaMinima) {
//     return estudantes.find((n) => n.nota >= valorNotaMinima);
// }

// console.log(encontraEstudante(8));





// const tarefas = [
//     { id: 1, descricao: 'Comprar pão', concluida: true },
//     { id: 2, descricao: 'Lavar o carro', concluida: false },
//     { id: 3, descricao: 'Estudar JavaScript', concluida: false }
// ];

// function encontraTarefa (lista, valorBool) {
//     return lista.find((n) => n.concluida === valorBool)
// };

// console.log(encontraTarefa(tarefas, false));





// const filmes = [
//     { titulo: 'Vingadores', genero: 'Ação' },
//     { titulo: 'Titanic', genero: 'Romance' },
//     { titulo: 'O Iluminado', genero: 'Terror' }
// ];

// function procuraFilme (lista, chave, valorGenero) {
//     return lista.find((item) => item[chave] === valorGenero);
// };

// console.log(procuraFilme(filmes, 'genero', 'Terror'));






// const funcionarios = [
//     { nome: 'Mariana', salario: 2500 },
//     { nome: 'Ricardo', salario: 3200 },
//     { nome: 'Juliana', salario: 2800 }
// ];

// function procuraFuncionario (valorSalario) {
//     return funcionarios.find((n) => n.salario > valorSalario) || 'Funcionário não encontrado';
// };

// console.log(procuraFuncionario(3900));






// const animais = [
//     { nome: 'Rex', especie: 'cachorro' },
//     { nome: 'Miau', especie: 'gato' },
//     { nome: 'Fido', especie: 'cachorro' }
// ];


// function encontraEspecie (valorEspecie) {
//     return animais.find((n) => n.especie === valorEspecie)
// };

// console.log(encontraEspecie('gato'));







// const eventos = [
//     { nome: 'Reunião', data: '2025-05-10' },
//     { nome: 'Aniversário', data: '2025-05-05' },
//     { nome: 'Workshop', data: '2025-05-15' }
// ];


// function encontraData (valorData) {
//     return eventos.find((n) => n.data === valorData) || 'Data não encontrada.';
// }

// const dataEncontrada = encontraData('2025-05-11');
// console.log(dataEncontrada);













// const alunos = [
//     { id: 1, nome: 'Carla', habilidades: ['JavaScript', 'React'] },
//     { id: 2, nome: 'Bruno', habilidades: ['Python', 'SQL'] },
//     { id: 3, nome: 'Ana', habilidades: ['JavaScript', 'Node.js'] }
// ];

// function encontraAluno (valorHabilidade) {
//     return alunos.find((n) => n.habilidades.find((j) => j === valorHabilidade)) || 'Não encontrado';
// }

// console.log(encontraAluno('SQ'));




// const alunos = [
//   { id: 1, nome: 'Carla', habilidades: [{ nome: 'JavaScript', nivel: 'Avançado' }, { nome: 'React', nivel: 'Intermediário' }] },
//   { id: 2, nome: 'Bruno', habilidades: [{ nome: 'Python', nivel: 'Intermediário' }, { nome: 'SQL', nivel: 'Básico' }] },
//   { id: 3, nome: 'Ana', habilidades: [{ nome: 'JavaScript', nivel: 'Intermediário' }, { nome: 'Node.js', nivel: 'Básico' }] }
// ];



// function procuraAluno (chave, valorHabilidade) {
//     for (const aluno of alunos) {
//         const habilidadeEncontrada = aluno.habilidades.find((n) => n[chave] === valorHabilidade);
//         if (habilidadeEncontrada) {
//             return habilidadeEncontrada;
//         };
//     }

//     return 'Não foi possível encontrar';
// };

// console.log(procuraAluno('nome','Python'));








// const livros = [
//     { titulo: 'A Guerra dos Tronos', generos: [{ nome: 'Fantasia' }, { nome: 'Aventura' }] },
//     { titulo: 'O Código Da Vinci', generos: [{ nome: 'Mistério' }, { nome: 'Thriller' }] },
//     { titulo: 'Dom Casmurro', generos: [{ nome: 'Romance' }, { nome: 'Literatura Brasileira' }] }
// ];


// function encontraLivro (valorNome) {
//     for (const livro of livros) {
//         const encontrado = livro.generos.find((n) => n.nome === valorNome);
//         if (encontrado) {
//             return encontrado;
//         }
//     }

//     return 'Não encontrado.';
// };

// console.log(encontraLivro('Romance'));



// function encontraLivro (valorNome) {
//     return livros.find((n) => n.generos.find((j) => j.nome === valorNome)) || 'Não encontrado';
// };

// console.log(encontraLivro('Mistério'));





// Resolução feita pela Gemini IA
// function encontraLivroAlternativo(nomeDoGenero) {
//     for (const livro of livros) {
//       for (const genero of livro.generos) {
//         if (genero.nome === nomeDoGenero) {
//           return livro;
//         }
//       }
//     }
//     return 'Não encontrado';
// };


// console.log(encontraLivroAlternativo('Mistério'));









// 1
// const produtos = [
//   { id: 1, nome: 'Smartphone', categoria: 'Eletrônicos', preco: 1200 },
//   { id: 2, nome: 'O Senhor dos Anéis', categoria: 'Livros', preco: 50 },
//   { id: 3, nome: 'Camiseta', categoria: 'Roupas', preco: 30 },
//   { id: 4, nome: 'Notebook', categoria: 'Eletrônicos', preco: 2500 },
//   { id: 5, nome: 'Dom Quixote', categoria: 'Livros', preco: 65 },
// ];


// function filtrarPorCategoria (lista, categoria) {
//   return lista.filter((n) => n.categoria === categoria); 
// }

// const produtosFiltrados = filtrarPorCategoria(produtos, 'Roupas');
// console.log(produtosFiltrados);



// 2

// const usuarios = [
//   { id: 1, nome: 'João', endereco: { rua: 'Rua A', cidade: 'São Paulo', estado: 'SP' } },
//   { id: 2, nome: 'Maria', endereco: { rua: 'Rua B', cidade: 'Rio de Janeiro', estado: 'RJ' } },
//   { id: 3, nome: 'Carlos', endereco: { rua: 'Rua C', cidade: 'São Paulo', estado: 'SP' } },
//   { id: 4, nome: 'Ana', endereco: { rua: 'Rua D', cidade: 'Belo Horizonte', estado: 'MG' } },
//   { id: 5, nome: 'Pedro', endereco: { rua: 'Rua E', cidade: 'Rio de Janeiro', estado: 'RJ' } },
// ];

// function agruparPorCidade (valorEstado) {
//   return usuarios.filter((n) => n.endereco.estado === valorEstado);
// }

// const usuariosFiltrados = agruparPorCidade('RJ');
// console.log(usuariosFiltrados);

// const stringUsuariosFiltrados = JSON.stringify(usuariosFiltrados);
// console.log(stringUsuariosFiltrados);

// const novosUsuarios = JSON.parse(stringUsuariosFiltrados);
// console.log(novosUsuarios);







// 2


// const usuarios = [
//   { id: 1, nome: 'João', endereco: { rua: 'Rua A', cidade: 'São Paulo', estado: 'SP' } },
//   { id: 2, nome: 'Maria', endereco: { rua: 'Rua B', cidade: 'Rio de Janeiro', estado: 'RJ' } },
//   { id: 3, nome: 'Carlos', endereco: { rua: 'Rua C', cidade: 'São Paulo', estado: 'SP' } },
//   { id: 4, nome: 'Ana', endereco: { rua: 'Rua D', cidade: 'Belo Horizonte', estado: 'MG' } },
//   { id: 5, nome: 'Pedro', endereco: { rua: 'Rua E', cidade: 'Rio de Janeiro', estado: 'RJ' } },
// ];



// // Resolução da IA (comentários de anotações são meus)
// function agruparPorCidade (arr) {
//   // Cria um objeto vazio para poder armazenar os usuários
//   const cidadesAgrupadas = {};

//   for (const usuario of arr) {
//     // Captura o nome da CIDADE DO OBJETO que está sendo iterada no momento
//     const cidade = usuario.endereco.cidade;

//     // Cria uma propriedade, caso não exista, com o nome da cidade capturada acima na iteração e cria um array vazio para, posteriormente, um usuário ser incluído 
//     if (!cidadesAgrupadas[cidade]) {
//       cidadesAgrupadas[cidade] = [];
//     };

//     // Insere o objeto iterado à propriedade/array correspondente a sua cidade (pois logo que a iteração começa, a variável "CIDADE" captura a cidade do objeto que está sendo iterado)
//     cidadesAgrupadas[cidade].push(usuario);
//   }

//   return cidadesAgrupadas
// }

// const usuariosFiltradosCidade = agruparPorCidade(usuarios);
// console.log(usuariosFiltradosCidade);





// Minha resolução ruim e chumbada pro exercício
// function agruparPorCidade (arr) {
//   const filtradosSp = arr.filter((n) => n.endereco.estado === 'SP');
//   const filtradosRj = arr.filter((n) => n.endereco.estado === 'RJ');
//   const filtradosMg = arr.filter((n) => n.endereco.estado === 'MG');

//   return {
//     'São Paulo': filtradosSp,
//     'Rio de Janeiro': filtradosRj,
//     'Minas Gerais': filtradosMg,
//   }
// }

// const usuariosFiltradosCidade = agruparPorCidade(usuarios);
// console.log(usuariosFiltradosCidade);






// 3

// const carrinho = {
//   itens: [
//     { nome: 'Mouse', quantidade: 2, precoUnitario: 25 },
//     { nome: 'Teclado', quantidade: 1, precoUnitario: 80 },
//     { nome: 'Monitor', quantidade: 1, precoUnitario: 350 },
//   ],
// };



// // Resolução da IA
// function calcularPrecoTotalCarrinho (objeto) {
//   const total = objeto.itens.reduce((acumulador, item) => {
//     return acumulador = acumulador + (item.quantidade * item.precoUnitario);
//   }, 0);
//   return 'Preço total: ' + total;
// };

// console.log(calcularPrecoTotalCarrinho(carrinho));


// Minha resolução
// function calcularPrecoTotalCarrinho (objeto) {
//   let acumulador = 0;
//   for (const item of objeto.itens) {
//     const resultado = item.quantidade * item.precoUnitario;
//     acumulador = acumulador + resultado;
//   };

//   return 'Preço total do carrinho: ' + acumulador;
// };

// console.log(calcularPrecoTotalCarrinho(carrinho));




// Exercício 2: Agrupando Usuários por Cidade

// Considere que você tem uma lista de usuários de um sistema. Cada usuário é um objeto com as propriedades id, nome e endereco (que é outro objeto contendo as propriedades rua, cidade e estado).

// Tarefa: Escreva uma função chamada agruparPorCidade que recebe um array de usuários e retorna um objeto onde as chaves são os nomes das cidades e os valores são arrays contendo os usuários daquela cidade.




// const frutas = ["maçã", "banana", "laranja", "uva", "morango"];

// frutas.push('abacaxi');
// frutas.shift();
// console.log(frutas);
// console.log(frutas.includes('banana'));




// const notas = [7.5, 8.0, 6.5, 9.0, 7.0, 8.5];

// function calculaMedia (arr) {
//   const soma = arr.reduce((acumulador, item) => acumulador + item, 0);

//   return soma / arr.length;
// };

// console.log(calculaMedia(notas));



// const notasAltas = [9, 8, 9, 10, 9, 8, 10];
// console.log(calculaMedia(notasAltas));
// console.log(notasAltas);












// Novos Exercícios:

// Com base nessa nova estrutura de dados, aqui estão dois novos exercícios para você:

// Exercício 7: Calculando o Valor Total do Pedido

// Tarefa: Escreva uma função chamada calcularTotalPedido que recebe um objeto de pedido (como os presentes no array pedidos) e retorna o valor total do pedido, que é a soma dos preços de todos os itens no array itens.

// Exercício 8: Agrupando Pedidos por Estado de Entrega

// Tarefa: Escreva uma função chamada agruparPedidosPorEstado que recebe o array pedidos e retorna um objeto onde as chaves são os nomes dos estados e os valores são arrays contendo todos os pedidos que devem ser entregues naquele estado.

// Esses exercícios exploram um contexto diferente (pedidos online) mas mantêm a ideia de manipular arrays de objetos com informações aninhadas, como o endereço. Espero que você os ache interessantes!


const pedidos = [
  {
    idPedido: 1,
    idCliente: 101,
    itens: [
      { nomeProduto: "Camiseta", preco: 25.00 },
      { nomeProduto: "Calça Jeans", preco: 75.50 }
    ],
    enderecoEntrega: {
      rua: "Rua das Flores, 123",
      cidade: "Rio de Janeiro",
      estado: "RJ"
    },
    dataPedido: "2025-05-01"
  },
  {
    idPedido: 2,
    idCliente: 102,
    itens: [
      { nomeProduto: "Tênis", preco: 120.00 }
    ],
    enderecoEntrega: {
      rua: "Avenida Brasil, 456",
      cidade: "São Paulo",
      estado: "SP"
    },
    dataPedido: "2025-05-03"
  },
  {
    idPedido: 3,
    idCliente: 101,
    itens: [
      { nomeProduto: "Meias", preco: 10.00 },
      { nomeProduto: "Boné", preco: 30.00 }
    ],
    enderecoEntrega: {
      rua: "Rua das Flores, 123",
      cidade: "Rio de Janeiro",
      estado: "RJ"
    },
    dataPedido: "2025-05-05"
  },
  {
    idPedido: 4,
    idCliente: 103,
    itens: [
      { nomeProduto: "Livro", preco: 40.00 }
    ],
    enderecoEntrega: {
      rua: "Rua Augusta, 789",
      cidade: "São Paulo",
      estado: "SP"
    },
    dataPedido: "2025-05-02"
  }
];




// EXPLICAÇÃO DO PORQUÊ O "ANINHAMENTO DE FILTER" NÃO FUNCIONAR EM ARRAYS ANINHADOS:

// Em JavaScript, um array (mesmo um array vazio []) é considerado um valor "truthy" (verdadeiro) em um contexto booleano.
// Portanto, para cada pedido, a condição do seu filtro externo sempre resulta em true, e é por isso que ele retorna o array de pedidos inteiro, sem filtrar ninguém.
// Problema: Seu .filter() externo estava recebendo um array como condição, e um array (mesmo vazio) é sempre considerado "verdadeiro", então nenhum pedido era descartado.
// Solução: Trocamos o .filter() interno por .some(), que verifica se existe "algum" item que satisfaça a condição e retorna true ou false, permitindo que o filtro externo funcione como esperado.

// ********* RESUMO: COMBINAR FILTER COM SOME, FARÁ COM QUE O FILTER RETORNE APENAS OS ELEMENTOS/OBJETOS QUE SATISFAÇAM A CONDIÇÃO (Quando o método "some" achar um valor que satisfaça a condição, retornará um valor booleano, true ou false, para o método filter que, por sua vez, fará sua verificação para o retorno do elemento/objeto)

// function filtrado (array, valor) {
//   const retornado = array.filter((n) => n.itens.some((g) => g.preco < valor));

//   return retornado;
// };





// function filtrado (array, valor) {
//   const listaFinal = [];
//   for (const itemPrincipal of array) {
//     for (const subItem of itemPrincipal.itens) {
//       if (subItem.preco < valor) {
//         listaFinal.push(subItem)
//       }
//     }
//   }
//   return listaFinal
// }




// console.log(filtrado(pedidos, 50));

// Neste caso, o MÉTODO "FIND" terá o MESMO EFEITO QUE QUANDO USADO COM O SOME
// console.log(pedidos.filter(n => n.itens.find(g => g.preco < 50)));

// const rockets = [
//   {country: "Russia", launches: 33},
//   {country: "USA", launches: 28},
//   {country: "China", launches: 20},
//   {country: "Japan", launches: 9},
// ];

// const totalLaunches = rockets.reduce((acc, item) => acc + item.launches, 0);

// const mapa = rockets.map((n) => n.launches <= 20)

// const filtro = rockets.filter((n) => n.launches <= 20)

// const every = rockets.every((n) => n.launches > 20)




// console.log(totalLaunches);
// console.log(mapa);
// console.log(filtro);
// console.log(every);









const totais = pedidos.map(p => ({ idPedido: p.idPedido, valorTotal: p.itens.reduce((acc, item) => acc + item.preco, 0) }));

// const arr = [1, 2, 3, 4, 5, {idade: 18, peso: 90, itens: 'mpa'}];


// *********** O padrão do método map é retornar para um NOVO ARRAY os elementos que são afetados pela função callback. O método MAP, quando aplicada em um Array onde os elementos são OBJETOS, irá RETORNAR OS OBJETOS novamente para um NOVO ARRAY.

// const funcao = pedidos.map((n) => {
//   return {idPedido: n.idPedido, idCliente: n.idCliente, valorTotal: n.itens.reduce((acc, item) => acc + item.preco, 0)}
// })

// function f (array) {
//   const res = array.map((n) => {
//     return {idPedido: n.idPedido, idCliente: n.idCliente, valorTotal: n.itens.reduce((acc, item) => acc + item.preco, 0)}
//   })
  
//   return res
// }

// function g (array) {

//   const objFinal = array.map((n) => {
//     const obj = {
//       idPedido: n.idPedido,
//       idCliente: n.idCliente,
//       valorTotal: n.itens.reduce((acc, item) => {
//         return acc + item.preco
//       }, 0)
//     }
//     return obj;
//   })
//   return objFinal;
// }


// function g (array) {

//   const objFinal = array.map((n) => {
//     let soma = 0;
//     for (const item of n.itens) {
//       soma = soma + item.preco;
//     }
//     const obj = {
//       idPedido: n.idPedido,
//       idCliente: n.idCliente,
//       valorTotal: soma
//     }
//     return obj;
//   })
//   return objFinal;
// }



// console.log(g(pedidos));














// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 17, 18, 20];


// const filtrado = myArray.filter((n) => {
//   return n > 5 && n % 2 == 0;
// });



// Versão refatorada
// const maiorQue = (x, y) => x > y;
// const divisivelPorDois = (x) => {
//   return x % 2 == 0;
// }

// const filtrado = myArray.filter(function (n) {
//   return maiorQue(n, 5) && divisivelPorDois(n)
// })


// filtrado = (arr, numero) => {
//   const lista = [];
//   for (const element of arr) {
//     if (element < numero) {
//       lista.push(element)
//     }
//   };

//   return lista
// }


// function filtrado (arr, numero) {
//   const novoArr = arr.filter((n) => {
//     return n > numero && n % 2 == 0;
//   });

//   return novoArr
// }

// console.log(filtrado(myArray, 5));













// Caso quiser revisitar a lógica, copia a função e peça à IA para explicar
// function agruparPedidosPorEstado (pedidos) {
//     const pedidosAgrupadosPorEstado = {};
//     for (const pedido of pedidos) {
//         const estado = pedido.enderecoEntrega.estado;

//         if (!pedidosAgrupadosPorEstado[estado]) {
//             pedidosAgrupadosPorEstado[estado] = [];
//         }

//         pedidosAgrupadosPorEstado[estado].push(pedido);
//     };

//     return pedidosAgrupadosPorEstado;
// };

// console.log(agruparPedidosPorEstado(pedidos));



// function calcularTotalPedidos (pedidos) {
//     let totalGeral;
//     for (const item of pedidos) {
//         const totalPedido = item.itens.reduce((acumulador, n) => acumulador + n.preco, 0);
//         totalGeral = totalPedido;   
//     };
//     return totalGeral;
// };

// console.log(calcularTotalPedidos(pedidos));







// const pizzas = [
//   "mussarela",
//   "pepperoni",
//   "calabresa",
//   "portuguesa",
//   "marguerita",
//   "ovo"
// ];

// const fruits = [
//   {name: 'cereja', quantity: 2},
//   {name: 'abacaxi', quantity: 1},
//   {name: 'morango', quantity: 7},
//   {name: 'banana', quantity: 3},
// ]


// const foundPizza = pizzas.filter((p) => p.length < 5);

// const foundFruit = fruits.find((f) => f.name === 'abacaxi');


// function filtraFruta (arr, valor) {
//   return arr.filter((f) => f.quantity < valor);
// };

// function filtraFruta (arr, valor) {
//   const fruta = arr.filter((f) => f.quantity < valor);
//   return fruta
// };

// function filtraFruta (arr, valor) {
//   const fruta = arr.filter((f) => {
//     return f.quantity < valor
//   });

//   return fruta;
// };

// function filtraFruta (arr, valor) {
//   const fruta = arr.filter((f) => {
//     const achado = f.quantity < valor
//     return achado;
//   });

//   return fruta
// };



// console.log(foundPizza);
// console.log(foundFruit);
// console.log(filtraFruta(fruits, 4));







const produtos = [
  { id: 1, nome: 'Smartphone XPTO', categoria: 'Eletrônicos', preco: 1200, emPromocao: true },
  { id: 2, nome: 'Notebook Pro', categoria: 'Eletrônicos', preco: 4500, emPromocao: false },
  { id: 3, nome: 'Camiseta Básica', categoria: 'Vestuário', preco: 50, emPromocao: true },
  { id: 4, nome: 'Smart TV 4K', categoria: 'Eletrônicos', preco: 2800, emPromocao: true },
  { id: 5, nome: 'Tênis de Corrida', categoria: 'Calçados', preco: 350, emPromocao: false },
  { id: 6, nome: 'Fone de Ouvido Bluetooth', categoria: 'Eletrônicos', preco: 250, emPromocao: true }
];


// const produtosEmPromocao = produtos.filter((n) => n.categoria === 'Eletrônicos' && n.emPromocao === true);

// function filtraProduto (array) {
//   const lista = array.filter((n) => {
//     return n.categoria === 'Eletrônicos' && n.emPromocao === true;
//   })

//   return lista
// };





// function filtraProduto (array, categoria, promocao) {
//   let produtosEmPromocao = [];
//   for (const produto of array) {
//     if (produto.categoria === categoria && produto.emPromocao === promocao) {
//       produtosEmPromocao.push(produto);
//     };
//   };

//   return produtosEmPromocao;
// };



// console.log(produtosEmPromocao);
// console.log(filtraProduto(produtos, 'Eletrônicos', true));



const usuarios = [
  { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com', status: 'ativo' },
  { id: 2, nome: 'Bruno Costa', email: 'bruno.costa@email.com', status: 'ativo' },
  { id: 3, nome: 'Carla Lima', email: 'carla.lima@email.com', status: 'ativo' },
  { id: 4, nome: 'Daniel Martins', email: 'daniel.martins@email.com', status: 'ativo' }
];


// function alteraStatusUsuario (array, id, status) {
//   for (const usuario of array) {
//     if (usuario.id === id) {
//       usuario.status = status;
//     }
//   };

//   return array
// };



// const usuario = usuarios.find((n) => n.id === 3);

// if (usuario) {
//   usuario.status = 'Inativo';
// };


// console.log(usuarios);




const carrinho = [
  { produto: 'Mouse Gamer', quantidade: 2, preco: 150.00 },
  { produto: 'Teclado Mecânico', quantidade: 1, preco: 320.50 },
  { produto: 'Monitor 24"', quantidade: 1, preco: 950.00 },
  { produto: 'Headset 7.1', quantidade: 1, preco: 480.25 }
];


// function somaProdutos (array) {
//   let soma = 0;

//   for (const produto of array) {
//     soma = soma + produto.quantidade * produto.preco
//   };

//   return Number(soma.toFixed(2));
// };


// function somaProdutos(array) {
//   const resultado = array.reduce((acumulador, n) => acumulador + n.preco * n.quantidade, 0);
//   return Number(resultado.toFixed(2));
// }


// console.log(somaProdutos(carrinho));



// function analise (array) {
//   const lista = [];

//   for (const element of array) {
//     lista.push({
//       produto: element.produto,
//       preco: element.preco,
//     });
//   };

//   return lista;
// };


// function analise (array) {
//   const lista = [];

//   for (const element of array) {
//     const objeto = {
//       produto: element.produto,
//       preco: element.preco,
//     };

//     lista.push(objeto);
//   };

//   return lista;
// }


// function analise (array) {
  
//   return array.map((n) => {
//     return {produto: n.produto, preco: n.preco, total: `${n.preco}` * `${n.quantidade}`}
//   });
// };

// console.log(analise(carrinho));


// function analise (array) {
  
//   const novaLista = array.map((n) => {
//     return {produto: n.produto, preco: n.preco, total: `${n.preco} ${n.quantidade}`}
//   });

//   return novaLista.filter((n) => n.preco > 400)
// };



// function analise (array) {
  
//   const novaLista = array.map((n) => {
//     return {produto: n.produto, preco: n.preco, total: `${n.preco} ${n.quantidade}`}
//   });

//   return novaLista.filter((n) => n.preco > 400)
// };




// function analise (array) {
  
//   return array.filter((n) => {
//     return n.preco > 400
//   });
// };



// function analise (array) {
//   return `Quantidade: ${array[0].quantidade}`;
// }

// console.table(analise(carrinho));






const texto = "Lorem ipsum dolor Lorem sit amet, Lorem consectetur adipiscing elit. Etiam sed purus lobortis, posuere nisi ac, dictum purus. Nunc et ex sit amet nulla Lorem pellentesque Lorem maximus. Maecenas et varius turpis. Aliquam magna lorem, mattis et tellus ac, ornare pellentesque purus. Donec hendrerit urna diam, a pulvinar elit convallis in. Morbi eu pretium magna, non molestie nisi. Suspendisse convallis eu lacus sed congue. Mauris mollis ullamcorper dui sit amet congue. Suspendisse potenti. Quisque finibus felis sit amet nunc interdum, id ultricies erat scelerisque. Nulla turpis nisi, volutpat at mattis ac, congue quis miNam consequat imperdiet tempor. Quisque vitae feugiat metus. Quisque eget nulla gravida, pretium ante a, efficitur augue. Duis quis congue magna. Nulla pretium enim neque, id iaculis tellus tempor in. Fusce in metus nisi. Cras id erat erat. Suspendisse odio nisl, tincidunt ac nisl eget, egestas tincidunt ipsum. Sed consequat consectetur diam sed commodo. Cras orci risus, rhoncus a finibus a, viverra et augue Ut sed interdum quam. Nullam porta, orci at hendrerit elementum, massa ante luctus urna, id maximus purus elit a urna. Etiam ullamcorper orci sit amet dolor dignissim, et dignissim mauris consequat. Vestibulum commodo, sapien pharetra gravida vehicula, quam massa Lorem mollis risus, a imperdiet velit nisi eu metus. Duis convallis luctus orci, sit amet fringilla libero sagittis vitae. Quisque ligula erat, efficitur quis Lorem pretium in, lacinia in enim. Cras tempor nisl metus, sit amet lobortis odio congue nec. Morbi at diam faucibus, suscipit purus nec, facilisis erat. Pellentesque vitae venenatis sapien. Sed dapibus urna sit amet ex fermentum suscipit. Pellentesque eget purus luctus Lorem, commodo odio et, lacinia ex. In non rhoncus arcu. Nullam cursus vehicula nisl vehicula rutrum. Sed in est posuere, gravida mi in LoReM, laoreet LOREM metus loREM Lorem. Donec laoreet purus id lacus lorem. iaculis luctus. Sed TORTOR Lorem non odio tortor Lorem.";



// function analisaPalavras (texto) {
//   texto = texto.toLowerCase();
//   const listaPalavras = texto.split(" ");
//   let obj = {};

//   for (let element of listaPalavras) {
//     let palavraPicotada = element.split("");
//     let letraIndex = 0;

//     for (const letra of palavraPicotada) {
//       if (letra === '.' || letra === ',') {
//         palavraPicotada.splice(letraIndex, 1);
//         // NOTA: Poderia também ao invés de usar "letraIndex" para capturar o index, usar *** "palavraPicotada.indexOf(letra)" ***
//       };
//       letraIndex++;
//     };

//     element = palavraPicotada.join("");


//     if (!obj[element]) {
//       obj[element] = 1;
//     } else {
//       obj[element]++;
//     };
//   };

//   return obj
// };

// console.log(analisaPalavras(texto));









// const texto = "Lorem ipsum dolor Lorem sit amet, Lorem consectetur adipiscing elit. Etiam sed purus lobortis, posuere nisi ac, dictum purus. Nunc et ex sit amet nulla Lorem pellentesque Lorem maximus Lorem. Maecenas et varius turpis.";


// Contador de palavras de um texto
// function analisa (arr, palavra) {
//   let contador = 0;
//   arr = arr.split(" ");
//   for (let element of arr) {
//     palavra = palavra.toLowerCase();
//     element = element.toLowerCase();
//     if (element === palavra || element === palavra + "." || element === palavra + "," || element === palavra + ";" || element === palavra + ':') {
//       contador++;
//     };
//   }

//   return contador;
// };

// Mesmíssimo código que a função acima, apenas repetida a escrita da lógica a fins de estudo
// function analisa(texto, palavra) {
//   let contador = 0;
//   palavra = palavra.toLowerCase();
//   texto = texto.toLowerCase();
//   texto = texto.split(" ");

//   for (const element of texto) {
//     if (element === palavra || element === palavra + '.' || element === palavra + ',' || element === palavra + ';' || element === palavra + '/' || element === palavra + '"') {
//       contador++
//     }
//   }

//   return contador;
// }



// console.log(analisa(texto, 'LOREM'));


// Contador de palavras de um texto (versão mais complicada)
// function analisa (arr, palavra) {
//   let contador = 0;
//   arr = arr.split(" ");

//   for (let element of arr) {
//     palavra = palavra.toLowerCase();
//     element = element.toLowerCase();

//     const palavraPicotada = element.split("");
//     let letraIndex = 0;
//     for (const letra of palavraPicotada) {
//       if (letra === '.' || letra === ',' || letra === ':' || letra === ';' || letra === '/' || letra ===  "'" || letra === '"') {
//         palavraPicotada.splice(letraIndex, 1);
//         element = palavraPicotada.join('');
//       };
//       letraIndex++;
//     };

//     if (element === palavra) {
//       contador++;
//     };
//   }

//   return contador;
// };


// Contador de palavras de um texto (versão mais complicada 2.0)
// É literalmente o mesmo algorítmo da função acima, apenas sendo reescrita para estudo da lógica
function analisa (texto, palavra) {
  let contador = 0;

  palavra = palavra.toLowerCase();
  texto = texto.toLowerCase();
  texto = texto.split(" ");

  for (let element of texto) {
    let palavraPicotada = element.split("");
    let letraIndex = 0;

    for (const letra of palavraPicotada) {
      if (letra === '.' || letra === ',' || letra === ';' || letra === '/' || letra ===  "'" || letra === '"') {
        palavraPicotada.splice(letraIndex, 1);
        element = palavraPicotada.join('');
      };

      letraIndex++;
    };


    if (element === palavra) {
      contador++;
    };
  };

  return contador;
};








// let txt = 'ola';

// txt = txt.split('');

// txt.splice(2, 1);

// console.log(txt);





// const textoDois = `Como a Web funciona

// Como a Web funciona oferece uma visão simplificada do que acontece quando você vê uma página em um navegador, no seu computador ou telefone.

// Essa teoria não é essencial para escrever códigos em curto prazo, mas em pouco tempo você vai se beneficiar ao entender o que está acontecendo em segundo plano.
// Clientes e servidores

// Computadores conectados à web são chamados clientes e servidores. Um diagrama simplificado de como eles interagem pode ter essa aparência:

// Clientes são os típicos dispositivos conectados à internet dos usuários da web (por exemplo, seu computador conectado ao seu Wi-Fi ou seu telefone conectado à sua rede móvel) e programas de acesso à Web disponíveis nesses dispositivos (geralmente um navegador como Firefox ou Chrome).

// Servidores são computadores que armazenam páginas, sites ou aplicativos. Quando o dispositivo de um cliente quer acessar uma página, uma cópia dela é baixada do servidor para a máquina do cliente para ser apresentada no navegador web do usuário.`


// function verificaPalavrasDuplicadas(texto) {
//     const listaPalavras = texto.split(" ");
//     let resultado = {};

//     listaPalavras.forEach(palavra => {

//         resultado[palavra] = (resultado[palavra] || 0) + 1;
//     });
    
//     return resultado;
// };


// function separaEmParagrafos(texto) {
//     const listaParagrafos = texto.split("\n");

//     // listaParagrafos.forEach((paragrafo, index) => {
//     //   if (paragrafo === '') {
//     //     listaParagrafos.splice(index, 1)
//     //   }
//     // })

//     const contagem = listaParagrafos.map(paragrafo => {
//         return verificaPalavrasDuplicadas(paragrafo);
//     });

//     console.log(contagem);
// };

// separaEmParagrafos(textoDois);






// const abcd = '123ABCD 123EFGH';
// console.log(abcd.replace("123", ''));
// console.log(abcd.replace("123", '').replace("123", ''));
// console.log(abcd.split(" ").map(n => n.replace("123", '')).join(" "));
// console.log(abcd.replaceAll("123", ''));

// console.log(abcd.indexOf('A'));



// const offices = [
//     {
//         name: 'West Office',
//         employees: ['John', 'Sarah']
//     },
//     {
//         name: 'North Office',
//         employees: ['David', 'Amanda']
//     },
//     {
//         name: 'East Office',
//         employees: ['Amy', 'Michael']
//     }
// ];




// const employeesList = [];


// for (const element of offices) {
//   for (const employee of element.employees) {
//     employeesList.push(employee);
//   };
// };


// const employeesList = [];


// offices.forEach(item => {
//   item.employees.forEach(name => {
//     employeesList.push(name)
//   });
// });

// const employeesList = [];


// const employeesList = offices.map(item => {
//   return item.employees.map(name => {
//     return name
//   })
// })


// console.log(employeesList.flat());





//  Simple Pig Latin (5 Kyu)Desafio:Mova a primeira letra de cada palavra para o final dela, então adicione "ay" ao final da palavra.Deixe as marcas de pontuação (caracteres que não sejam letras) intocadas.📝 Exemplos:Entrada (Input)Saída Esperada (Output)'Pig latin is cool''igPay atinlay siay oolcay''Hello world !''elloHay orldway !'

// function pigLatin (str) {
//   const frase = str.split(" ");
//   let novoArr = [];

//   for (let palavra of frase) {
//     palavra = palavra.split("");

//     if (palavra[0] !== '!') {
//       const primeiraLetra = palavra.splice(0, 1);
//       palavra.push(primeiraLetra, 'ay');
//     };
    
//     palavra = palavra.join("");
//     novoArr.push(palavra);
//   };

//   novoArr = novoArr.join(" ");

//   return novoArr;
// };

// console.log(pigLatin("Hello world !"));








// const ppp = 'p';

// console.log(ppp.repeat(30));






// const objeto = {
//   nome: 'aaa',
//   idade: 5,
//   estado: 'rj'
// };


// function stringSplitter (str) {
//   const dividedString = str.split('');
//   const newArr = [];

//   if (str.length % 2 === 0) {
    
//     while (dividedString.length > 1) {
//       newArr.push(dividedString[0] + dividedString[1]);
//       dividedString.splice(0, 2);
//     };

//   } else {
//     dividedString.push('_');

//     while (dividedString.length > 1) {
//       newArr.push(dividedString[0] + dividedString[1]);
//       dividedString.splice(0, 2);
//     };
//   };

//   return newArr;
// };

// console.log(stringSplitter('abcdef'));



// function smallestInteger(arr) {

//   const sortedArr = arr.sort((a, b) => a - b)

//   return sortedArr = arr.sort((a, b) => a - b)[0]
//   return sortedArr[0];
// };


// console.log(smallestInteger([71, 78, 27, 45, 68]));



// function smallestInteger(arr) {

//   let smallest = arr[0];
  
//   for (const element of arr) {
//     if (element < smallest) {
//       smallest = element;
//     };
//   };
  
//   return smallest;
// }

// console.log(smallestInteger([12, 1, 20, 11, 35, 4, 51, 2]));





// function betterThanAverage(classPoints, yourPoints) {

//   // const classPointsSum = classPoints.reduce((a, b) => {
//   //   return a + b;
//   // }, 0);
  
//   // return yourPoints > classPointsSum / classPoints.length;

//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// };


// console.log(betterThanAverage([9, 9, 9, 8, 9, 9, 9, 9], 9));



// function solution (str, ending) {

//   return str.endsWith(ending);
// };


// console.log(solution('abc', 'd'));





// function vowelCount(str) {
//   const regex = /[aeiou]/i;
//   const newArr = str.split('');
//   let count = 0;

//   for (const element of newArr) {
//     if (regex.test(element)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(vowelCount('aeiou'));



// function jumpingNumbers(number) {
//   const newNumberArr = String(number).split('').map(n => Number(n));
//   let count = 0;
  
//   if (newNumberArr.length === 1) {
//     return 'Jumping!!';
//   };

//   for (let i = 0; i < newNumberArr.length; i++) {
//     if (newNumberArr[i] - newNumberArr[i + 1] === 1 || newNumberArr[i + 1] - newNumberArr[i] === 1) { 
//       count++;  
//     };
//   };
  
//   if (count === newNumberArr.length - 1) {
//     return 'Jumping!!!'
//   } else {
//     return 'Not Jumping!!!'
//   };
// };


// console.log(jumpingNumbers(90));



// function spaceRemover(str) {
//   // O método abaixo também funciona
//   //const regex = /[' ']/g
//   //return str.replace(regex, '');

//   return str.replaceAll(' ', '')
// };

// console.log(spaceRemover('oi, tudo bem'));



// const arr = [
//   [62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
//   [63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],
//   [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
//   [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],
//   [66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],
//   [67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]
// ];

// function numberCounter(arr, number) {
//   const newArr = arr.flat();
//   let counter = 0;

//   for (const element of newArr) {
//     if (element === number) {
//       counter++;
//     };
//   };

//   return counter;
// };


// console.log(numberCounter(arr, 81));




// function numberCounter(arr, number) {
//   const counter = arr
//   .flat()
//   .filter(n => n === number);

//   return counter.length;
// };


// console.log(numberCounter(arr, 81));



// function toJadenCase(str) {
//   str = str.split(' ');
//   const newArr = [];

//   for (let element of str) {
//     newArr.push(element.replace(element[0], element[0].toUpperCase()));
//   }

//   return newArr.join(' ');
// };



// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));






// function century(year) {
//   return Math.ceil(year/100);
// };

// console.log(century(83));








// function clock(h, m, s) {
//   const second = s * 1000;
//   const minute = m * 60 * 1000;
//   const hour = h * 60 * 60 * 1000;
//   const time = hour + minute + second;

//   return time;
// };


// console.log(clock(3, 20, 50));



// function highAndLow(str) {
//   const arrOfNumbers = str.split(' ').map(n => Number(n));
//   const sorted = arrOfNumbers.sort((a, b) => a - b);

//   return `${arrOfNumbers[arrOfNumbers.length - 1]} ${arrOfNumbers[0]}`;
// };

// console.log(highAndLow("1 9 3 4 -5"));






// function twoToOne (a, b) {
//   const fusedStringsArr = (a + b).split('');
//   const newArr = [];

//   for (const element of fusedStringsArr) {
//     if (!newArr.includes(element)) {
//       newArr.push(element);
//     };
//   };

//   return newArr.sort().join('');
// };

// console.log(twoToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"));






// function invertValues(numbers) {
//   return numbers.map(n => n * -1)
// };

// console.log(invertValues([1, -2, 3, -4]));








// function friendOrFoe(arr) {
//   return arr.filter(n => n.length === 4);
// };

// console.log(friendOrFoe(["Peter", "Stephen", "Joe"]));
// console.log(friendOrFoe(["Ryan", "Kieran", "Jason", "Yous"]));








// function listFiltering (arr) {
//   return arr.filter(n => typeof n === 'number');
// };

// console.log(listFiltering([1,2,'aasf','1','123',123]));




// function middler(str) {
//   str = str.split('');

//   if (str.length % 2 === 0) {
//     return str[str.length / 2 - 1] + str[str.length / 2];
//   } else {
//     return str[Math.floor(str.length / 2)];
//   };
// };



// console.log(middler('test'));


// function reverse(str) {
//   return str.split('').reverse().join('');
// };

// console.log(reverse('abc'));


// function sumOfArrays(arr) {
//   let sum = 0;

//   for (const element of arr) {
//     const average = element.reduce((a, b) => a + b, 0) / element.length;
//     sum = sum + average;
//   };

//   return sum;
// };

// function sumOfArrays(arr) {
  
//   const sum = arr.map(n => {
//     return n.reduce((a, b) => a + b, 0) / n.length;
//   })

//   return sum.reduce((a, b) => a + b, 0)
  
// };


// console.log(sumOfArrays([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));






// function trolls(str) {
//   return str.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(trolls('This website is for losers LOL!'));


// function swap(arr) {
//   const first = arr[0];
//   const last = arr[arr.length - 1];

//   arr.splice(0, 1, last);
//   arr.splice(arr.length - 1, 1, first);

//   return arr;
// };

// console.log(swap([1,2]));


// function sqr(arr) {
//   return arr.reduce((a, b) => a + b * b, 0)
// }


// console.log(sqr([1, 2, 2]));







// function decypher(str) {
  
  
// }


// console.log(decypher('H3110 W0r1d'));









// function decypher(word) {

//   const regexNotLetter = /[,.;/=_-{}*]/i;

//   if (letter === '1') {
//     if (letter === '1' && word.indexOf('1') === 0) {
//       return 'teste'
//     };

//     if (word.indexOf('1') - 1 === ' ' && word.indexOf('1') - 2 === '.') {
//       return 'teste'
//     }

//   };

//   return 'nenhum teste'
// };



// function decypher(word) {

//   const regexNotLetter = /[,.;/=_-{}*]/i;
//   const indexOfOne = word.indexOf('1');
//   const indexOfPeriod = word.indexOf('.');
//   const indexOfSpace = word.indexOf(' ');
  

//   // if (word[0] === '1') {
//   //   if (word[0] === '1' && word.indexOf('1') === 0) {
//   //     return 'teste 1'
//   //   };

//   //   if (word.indexOf('1') - 1 === ' ' && word.indexOf('1') - 2 === '.') {
//   //     return 'teste 2'
//   //   }

//   // };

  

//   if (word[indexOfOne] - 1 === ' ' && word[indexOfOne - 2] === '.') {
//     return 'teste 2'
//   }

//   return 'nenhum teste'
// };


// // str.replace(str[0], 'p')









// function whoLikesIt(arr) {
 
//   if (arr.length === 0) {
//     return 'no one likes this';
//   };

//   if (arr.length === 1) {
//     return `${arr[0]} likes this`;
//   };

//   if (arr.length === 2) {
//     return `${arr[0]} and ${arr[1]} like this`;
//   };

//   if (arr.length === 3) {
//     return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//   };

//   if (arr.length > 3) {
//     return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//   };

// };

// console.log(whoLikesIt(["Alex", "Jacob", "Mark", "Max"]));


// function buliano(bool) {
//   return bool === true ? 'Yes' : bool === false ? 'No' : undefined
// }

// console.log(buliano(false));



// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     };

//     left++;
//     right--;
//   };

//   return true;
// };


// console.log(isPalindrome('rever'));
// console.log(isPalindrome('gato'));
// console.log(isPalindrome('natan'));
// console.log(isPalindrome('pato'));

// function reverse(num) {
//   num = num
//     .toString()
//     .split('')
//     .sort((a, b) => b - a)
//     .join('')
//   ;

//   return Number(num);
// };

// console.log(reverse(42145));


// function decypher(str) {
//   const regexLetters = /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890]/i;
//   const regex = /[ .,;=+-]/g;

//   if (str.includes('1')) {

//     if (str[0] === '1') {
//       str = str.replace('1', 'I')
//     };

//     if (str[str.indexOf('1') - 1] === ' ' && str[str.indexOf('1') - 2] === '.') {
//       str = str.replace('1', 'I')
//     };

//     if (str[str.indexOf('1') - 1] === ' ' && str[str.indexOf('1') + 1] === ' ') {
//       str = str.replaceAll('1', 'I')
//     };

//     if (str[str.indexOf('1') - 1] === ' ' && str[str.indexOf('1') + 1] === '.') {
//       str = str.replace('1', 'I')
//     };

//   };

//   return str;
// };

// console.log(decypher('1guana. 1guana'));
// // console.log(decypher('what else 1 can test'));
// console.log(decypher('1, 1. 1 m34n 13773r 1'));






// function filter(str) {
//   const regex = /[a-z0-9]/;

//   const newArr = str.split('').filter(n => regex.test(n));

//   return newArr.join('')
// };

// console.log(filter('b..123a'));



//console.log('abcd123..'.match(/[abc]/g));



// Comparação com Regex: No JavaScript, não podemos comparar uma string diretamente com uma Regex usando != ou == (ex: str[...] != regex). Para testar se um caractere atende a uma Regex, o correto seria usar o método regex.test(caractere).


// function filter(str) {

//   // ********* IMPORTANTE: Para indicar ao regex TODAS as LETRAS E NÚMEROS de forma mais prática, pode-se usar da maneira que está escrita abaixo (A-Z0-9). Dessa forma, que é uma forma mais simplificada de referenciar todas as letras (A-Z) e todos os númeors (0-9).
//   // ********* IMPORTANTE RESSALTAR: APARENTEMENTE, só se deve usar a FLAG "G" com métodos .MATCH() ou .REPLACE(), pois quando usado em uma variável de regex, ocorrem alguns bugs com o "lastIndex".
//   // RESPOSTA DA IA: Se você estiver testando caractere por caractere dentro de um loop, nunca use a flag /g/. Ela só é necessária quando você quer encontrar todas as ocorrências dentro de uma única string grande de uma vez só (usando métodos como .match() ou .replace()).
//   const regex = /[a-z0-9]/i;

//   return str.split('').filter(n => regex.test(n)).length


//   // EXEMPLO DE USO DA FLAG "G" COM O MÉTODO MATCH, o qual terá o mesmo efeito do código acima.
//   //return str.match(/[a-z0-9]/gi).length;
// };

// console.log(filter('b..123aA'));





// function sums(arr) {
//   if (arr === null) {
//     return [];
//   };

//   if (arr.length === 0) {
//     return [];
//   };

//   let count = 0;
//   let sum = 0;
//   const newArr = [];

//   for (const element of arr) {
//     element > 0 ? count++ : sum = element + sum;
//   };

//   newArr.push(count);
//   newArr.push(sum);

//   return newArr;
// };


// console.log(sums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(sums(null));





// function reverse(n) {
//   return n
//     .toString()
//     .split('')
//     .reverse()
//     .map(n => Number(n))
//   ;
// };

// console.log(reverse(3214));



// function decypher(str) {
//   const regex = /[a-z0-9]/;
//   str = str.split('');

//   for (let i = 0; i < str.length; i++) {
    
//     // 1
//     if (i === 0 && str[i] === '1') {
//       str[i] = 'I';
//     } else if (str[i] === '1' && regex.test(str[i + 1]) || str[i] === '1' && regex.test(str[i - 1])) {      
//       str[i] = 'i';
//     } else if (str[i] === '1' && !regex.test(str[i + 1]) || str[i] === '1' && !regex.test(str[i - 1])) {
//       str[i] = 'I';
//     };
    

//   };

//   return str.join('');
// };

// console.log(decypher('1, 1. 1 m34n 13773r 1'));



// function decypher(str) {
//   const regex = /[a-z0-9]/;

//   if (str.includes('1')) {
//     str = str.replaceAll('1', 'I');
//     str = str.split('');

//     for (let i = 0; i < str.length; i++) {

//       if (str[i] === 'I' && regex.test(str[i + 1]) || str[i] === 'I' && regex.test(str[i - 1])) {      
//         str[i] = 'i';
//       };
//     };

//     str = str.join('');
//   };


//   return str;
// };

// console.log(decypher('1, 1. 1 m34n 13773r 1'));








// function decypher(str) {
//   const regex = /[a-z0-9]/;
//   str = str.split('');

//   for (const element of str) {
//     if (element === '1') {

//     }
//   }

//   return str;
// };

// console.log(decypher('1, 1. 1 m34n 13773r 1'));








// function maths(operation, value1, value2) {
//   return operation === '+'
//   ? value1 + value2
//   : operation === '-'
//   ? value1 - value2
//   : operation === '*'
//   ? value1 * value2
//   : operation === '/'
//   ? value1 / value2
//   : undefined
// };

// console.log(maths('/', 49, 7));







// function pyramid(floors) {
//   let count = 0;
//   const newArr = [];

//   while (count < floors - 1) {
//     if (newArr.length === 0) {
//       newArr.push('*');
//     };
//     newArr.push('*'.repeat(newArr[count].length + 2));
//     count++;
//   };

//   let leftPointer = 0;
//   let rightPointer = newArr.length - 1;

//   while (leftPointer < floors) {
//     newArr[leftPointer] = newArr[leftPointer]
//       + ' '
//       .repeat(Math.floor(newArr[rightPointer].length / 2))
//       .split('')
//       .reverse()
//       .join('')
//       + ' '
//       .repeat(Math.floor(newArr[rightPointer].length / 2))
//     ;
    
//     leftPointer++;
//     rightPointer--;
//   };

//   return newArr;
// };


// function pyramid(nFloors) {
//   let count = 0;
//   const newArr = [];

//   if (nFloors === 1) {
//     newArr.push('*')
//     return newArr;
//   };

//   while (count < nFloors - 1) {
//     if (newArr.length === 0) {
//       newArr.push('*');
//     };
//     newArr.push('*'.repeat(newArr[count].length + 2));
//     count++;
//   };

//   let leftPointer = 0;
//   let rightPointer = newArr.length - 1;
//   const finalArr = [];

//   while (leftPointer < nFloors) {
//     const element = ' '.repeat(Math.floor(newArr[rightPointer].length / 2)) + newArr[leftPointer] + ' '.repeat(Math.floor(newArr[rightPointer].length / 2));
//     finalArr.push(element);

//     leftPointer++;
//     rightPointer--;
//   };

//   return finalArr;
// };


// console.log(pyramid(3));

// console.log(['*'.concat(' ').repeat(3)]);
// console.log(['*' + ' '.repeat(3)]);
// console.log('    ' + '*');







// function sentenceSmash(arr) {
//   let str = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     str = str + ` ${arr[i]}`;
//   };

//   return str;
// };

// console.log(sentenceSmash(['hello', 'world', 'this', 'is', 'great']));








// function encontra(arr) {
//   return `found needle at position ${arr.indexOf('needle')}`
// };

// console.log(encontra(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));






// function multiples (array1, array2) {
//   let count = 0;
//   let bIndex = 0;

//   if (array1 === null || array2 === null) {
//     return false;
//   };

//   for (const aElement of array1) {
//     bIndex = 0;

//     for (const bElement of array2) {
//       if (aElement * aElement === bElement) {
//         array2.splice(bIndex, 1);
//         count++;
//         break;
//       };
      
//       bIndex++;
//     };
//   };

//   if (count === array1.length) {
//     return true;
//   } else {
//     return false;
//   };
// };


// console.log(multiples([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
// console.log(multiples([2, 2, 3], [4, 9, 9]));
// console.log(19 * 19);
// console.log(Math.sqrt(121));









// function meanAndString(arr) {
//   const newArr = [];
//   const arrayOfStrings = arr.filter(n => /[a-z]/.test(n));
//   const arrayOfNumbers = arr.filter(n => /[0-9]/.test(n)).map(n => Number(n));
//   newArr.push(arrayOfNumbers.reduce((a, b) => a + b, 0) / arrayOfNumbers.length);
//   newArr.push(arrayOfStrings.join(''));

//   return newArr;
// };

// console.log(meanAndString(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']));














// function alphabetPosition(str) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let newArr = [];
//   str = str.toLowerCase().split('');
  
//   for (const element of str) {
//     if (/[a-z]/.test(element)) {
//       newArr.push(alphabet.indexOf(element) + 1).toString();
//     };
//   };

//   return newArr.join(' ');
// };

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));



// function oddFinder(arr) {
//   let count = 0;

//   for (const testingNumber of arr) {
//     for (const numberCount of arr) {
//       if (testingNumber === numberCount) {
//         count++;
//       };
//     };    

//     if (count % 2 !== 0) {
//       return testingNumber;
//     };

//     count = 0;
//   };

//   return 'not found';
// };

// console.log(oddFinder([1,2,2,3,3,3,4,3,3,3,2,2,1]));





// function firstAndLast(str) {
//   return str.length < 2 ? '' : str.slice(1, str.length - 1);
// };

// console.log(firstAndLast('xyz'));



// function shortest(str) {
//   str = str.split(' ');
//   let shortest = str[0].length;
 
//   for (const element of str) {
//     if (element.length < shortest) {  
//       shortest = element.length;
//     };
//   };

//   return shortest;
// };


// console.log(shortest('Helloaa four big aa'));




// function reverse(str) {
//   const arrayOfWords = str.split(' ');
//   let newArr = [];
  
//   for (const element of arrayOfWords) {
//     newArr.push(element.split('').reverse().join(''))
//   };

//   return newArr.join(' ')
// };


// console.log(reverse('This is an example!'));

// ---------------------------------- Aula 1 -----------------------------




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
//             {id: 209,nome: 'Clara',cargo: 'Gerente de finanças'},
//             {id: 199,nome: 'Ana',cargo: 'Analista de finanças'},
//             {id: 302,nome: 'Camila',cargo: 'Sub-gerente de finanças'}
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

// Caso quiser revisitar a lógica, copia a função e peça à IA para explicar
function agruparPedidosPorEstado (pedidos) {
    const pedidosAgrupadosPorEstado = {};
    for (const pedido of pedidos) {
        const estado = pedido.enderecoEntrega.estado;

        if (!pedidosAgrupadosPorEstado[estado]) {
            pedidosAgrupadosPorEstado[estado] = [];
        }

        pedidosAgrupadosPorEstado[estado].push(pedido);
    };

    return pedidosAgrupadosPorEstado;
};

console.log(agruparPedidosPorEstado(pedidos));



function calcularTotalPedidos (pedidos) {
    let totalGeral = 0;
    for (const item of pedidos) {
        const totalPedido = item.itens.reduce((acumulador, n) => acumulador + n.preco, 0);
        totalGeral = totalGeral + totalPedido;   
    };
    return totalGeral;
};

console.log(calcularTotalPedidos(pedidos));
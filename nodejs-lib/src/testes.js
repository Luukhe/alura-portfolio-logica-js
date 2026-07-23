// const fs = require('fs');

// const pastaDir = 'C:/Users/luuka/Desktop/pasta-js-teste';
// const caminho = 'C:/Users/luuka/Desktop/textoteste.txt';
// const conteudoTxt = 'salve';

// fs.writeFile(caminho, conteudoTxt, 'utf-8', () => {});

// fs.rename(caminho, 'C:/Users/luuka/Desktop/textoAlterado.txt', function () {});

// fs.rm(caminho, () => {});

// fs.mkdir(pastaDir, (err) => {
//     if (err) throw err;
//     console.log('Pasta criada com sucesso.');
// })

// fs.rmdir(pastaDir, (erro) => {
//     if (erro) throw erro;
//     console.log('Diretório deletado com sucesso.');
// })







// function criaPasta () {
//   fs.mkdir(pastaDir, () => {})
// };

// function deletaPasta () {
//   fs.rmdir(pastaDir, () => {})
// }



// function teste (path) {
//   setTimeout(criaPasta, 2000)
// }


// teste(pastaDir);


// const obj = {age: 14}

// function teste (obj) {

//   try {
//     if (!obj.name) {
//       throw new SyntaxError("Não encontrado");
//     }
//   } catch (e) {
//     console.log(`Nome do erro: ${e.name}\nMensagem do erro: ${e.message}`);
//   }

// };


// teste(obj);







// function teste () {

//   try {

//     if (!pastaDirr) {
//       throw e;
//     }

//     fs.mkdir(pastaDir, () => {
//       console.log('Criado!');
      
//     });

//   } catch (e) {
//     console.log(`Erro: ${e}`);
//   }

// };


// teste();






// function teste () {
//   const verif = true;

//   try {
    
//     console.log('Início');

//     // O objeto de erro em si não é impresso automaticamente a menos que você o faça explicitamente dentro do catch.
//     // Qualquer código *APÓS O THROW* não funciona (da mesma forma que códigos após um return, por exemplo)
//     // E, o throw também encerra o fluxo quando é acionado
//     if (!verif) {
//       throw new Error('Erro detectado');
//     }
    
//   } catch (e) {
//     //console.log(`Capturado.\nMensagem: ${e.message}\nError name: ${e.name}\nError: ${e}`);
//   };
// };


// teste();




// function repeatStr(str) {

//   return str.repeat(5)

// };


// console.log(repeatStr('Oi'));


// function repeatStr(str, vezes) {
//   let palavraSomada = '';
//   for (let index = 0; index < vezes; index++) {
//     palavraSomada = palavraSomada + str;
//   }

//   return palavraSomada;
// };



// console.log(repeatStr('a', 5));




// function vowelCount (str) {

//   const regex = /[aeiou]/;
//   let counter = 0;
//   str
//     .split('')
//     .forEach(n => {
//       if (regex.test(n)) {
//         counter++;
//       };
//     });
  
//   return counter;
// };


// console.log(vowelCount('abracadabra'));





// const arr = ['Alex', 'Jacob', 'Mark', 'Max'];

// function format (arr) {
//   if (arr.length === 0) {
//     return "No one likes this";
//   } else if (arr.length === 1) {
//     return `${arr[0]} likes this`;
//   } else if (arr.length === 2) {
//     return `${arr[0]} and ${arr[1]} like this`;
//   } else if (arr.length === 3) {
//     return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//   } else if (arr.length >= 4) {
//     return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//   };
// };


// console.log(format(arr));







// function isogramChecker (str) {

//   str = str.toLowerCase();
//   if (str === '') {
//     return true;
//   };

//   const arr = str.split('');

//   for (let index = 0; index < arr.length; index++) {

//     for (let index2 = index + 1; index2 < arr.length; index2++) {

//       if (arr[index2] === arr[index]) {
//         return false;
//       };

//     };
    
//   };

//   return true;
// };

// console.log('leao');


// Refatoração mais performática do exercício acima

// // ***** LEMBRANDO: Um **"Set"** é uma COLEÇÃO DE VALORES QUE NÃO PERMITE DUPLICATAS. 
// function isIsogram (str) {

//   // Cria-se um SET com todas as letras minúsculas, para que não haja distinção case sensitive
//   // O set automaticamente descarta duplicatas, considerando que todas são minúsculas (sem o toLowerCase, haveria distinção entre letras maiúsculas e minúsculas e, logo, a mesma letra poderia não ser descartada pelo Set)
//   const newString = new Set(str.toLowerCase());

//   // Se o tamanho do Set for igual ao tamanho da string original, significa que nenhuma letra foi descartada
//   // Logo, a string é um isograma
//   return newString.size === str.length;
// };


// console.log(isIsogram('caro'));




// function isSquare (n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return true;
//   } else {
//     return false;
//   }
// };






// function persistence (n) {
//   let numberLength = String(n).length;
//   let counter = 0;
  
//   // if (numberLength < 2) {
//   //   return counter;
//   // };

//   while(numberLength >= 2) {
//     let numberArr = n.toString().split('').map(n => Number(n));
//     let multiplierResult = numberArr.reduce((accumulator, number) => {
//       return accumulator * number;
//     }, 1);
//     numberLength = String(multiplierResult).length;
//     n = multiplierResult;
//     counter++;
//   };

//   return counter;
// };

// console.log(persistence(4));







// const n = 39;

// let numberArr = n.toString().split('').map(n => Number(n));
// console.log(numberArr);

// let multiplierResult = numberArr.reduce((accumulator, number) => {
//   return accumulator * number;
// }, 1);

// console.log(multiplierResult);


// const num = 12345;

// console.log(num.toString().split('').map(n => Number(n)));








// function getSum (a, b) {

//   const arr = [];

//   if (a > b) {
//     const copyA = a;
//     a = b;
//     b = copyA;
//   };

//   if (a === b) {
//     return a;
//   };

//   for (a; a <= b; a++) {    
//     arr.push(a)
//   };
  
//   const sum = arr.reduce((acc, number) => {
//     return acc + number;
//   }, 0);
  
//   return sum;
// };


// console.log(sumBetween(-1, 2));






// function convertingStrings (str) {
//   let wordArr = str.split(' ');
//   let newArr = [];
  
//   for (let word of wordArr) {
//     word = word.split('');
//     word[0] = word[0].toUpperCase();
//     word = word.join('');
//     newArr.push(word);   
//   };
//   newArr = newArr.join(' ')
  
//   return newArr;
// };

// console.log(convertingStrings('aaa bbb ccc ddd'));




// function sumOfDigits(n) {
//   const numbersArr = String(n).split('').map(n => Number(n));
//   console.log('Numbers arr:' + numbersArr);
  
  
//   const sum = numbersArr.reduce((accumulator, number) => {
//     return accumulator + number
//   }, 0);
//   console.log('Sum:' + sum);
  

//   const digits = String(sum).length;
//   console.log('Digits:' + digits);
  

//   if (digits >= 2) {
//     return sumOfDigits(sum);
//   };
  
//   return sum
// };

// console.log(sumOfDigits(132189));




// function sumOfDigits(n) {
//   let numbersArr = String(n).split('').map(n => Number(n));
  
//   let sum = numbersArr.reduce((accumulator, number) => {
//     return accumulator + number
//   }, 0);

//   let digits = String(sum).length;
  
//   while (digits >= 2) {
//     numbersArr = String(sum).split('').map(n => Number(n));
//     sum = numbersArr.reduce((accumulator, number) => {
//       return accumulator + number
//     }, 0);
//     digits = String(sum).length;
//   };

//   return sum;
// };

// console.log(sumOfDigits(493193));




// function bmwRemover (str) {

//   try {

//     // OBS: Me atentar sempre aos sinais de NEGAÇÃO ("!") e DIFERENTE ("!==")
//     if (typeof str !== 'string') {
//       throw Error('This program only works for text.');
//     };

//     console.log('working');
//   }

//   catch (e) {
//     console.log(e.message);
//   }

// };



// bmwRemover(2);


// function bmwRemover (str) {

//   try {
//     if (typeof str !== 'string') {
//       throw new Error('This program only works for text.')
//     };

//     str = str.toLowerCase();

//     const arrayOfString = str.split('');
//     const regex = /[bmw]/;

//     arrayOfString.forEach((n, index) => {
//       if (regex.test(n)) {
//         arrayOfString.splice(index, 1);
//       }
//     });

//     return arrayOfString.join('');
    
    
//   } catch(e) {
//     return e.message;
//   };

// };



// function bmwRemover (str) {

//   try {
//     if (typeof str !== 'string') {
//       throw new Error('This program only works for text.')
//     };

//     return remover(str)

//     // Jeito mais prático e rápido:
//     //return str.replace(/[bmw]/i, '');
//   } catch(e) {
//     return e.message;
//   };

// };


// function remover(str) {

//   // IMPORTANTE: Transformar a string inteira em minúsculas foi substituído pela **Flag global "i" no REGEX**
//   // str = str.toLowerCase();

//   const arrayOfString = str.split('');
//   const regex = /[bmw]/i;

//   const newArr = arrayOfString.filter(n => !regex.test(n))

//   return newArr.join('');

//   // const regex = /[bmw]/;

//   // arrayOfString.forEach((n, index) => {
//   //   if (regex.test(n)) {
//   //     arrayOfString.splice(index, 1);
//   //   }
//   // });

//   // return arrayOfString.join('');

//   // NOTA IMPORTANTE: Em casos como esse (e, talvez, outros futuramente) é bom considerar criar um array novo ao invés de iterar o original, pois pode minimizar erros

//   // const newArr = [];
//   // const regex = /[bmw]/

//   // arrayOfString.forEach(n => {
//   //   if (!regex.test(n)) {
//   //     newArr.push(n)
//   //   };
//   // })

//   // return newArr.join('');
// };


// console.log(bmwRemover('mvolvom'));




// const abc = [1, 2, 3, 4];

// abc.splice(0, 1, 3);

// console.log(abc);




// function carregarPagina(callback) {
//   console.log('Carregando a página...');

//   setTimeout(() => {
//     callback('teste parametro');
//   }, 1500);
// };

// function carregada(msg) {
//   console.log('Carregada.' + msg);
// };

// carregarPagina(carregada)

// carregarPagina(() => console.log('Carregada. (sem parâmetro)'))

// carregarPagina(a => console.log('Carregada.' + a))

// carregarPagina(function (msg) {
//   console.log('Carregada.' + msg)
// });

// Se colocasse os parênteses, o JavaScript executaria a função "carregada" imediatamente, antes mesmo de a função carregarPagina começar a rodar.
// Ex: carregarPagina(carregada);

// Essencialmente, funções CALLBACK são funções que são um passo a se fazer QUANDO A FUNÇÃO PRINCIPAL TERMINAR DE EXECUTAR A TAREFA PRINCIPAL.
// Uma função callback é uma função que você passa como argumento para outra função, para que ela seja chamada quando uma tarefa for concluída. É muito útil para fazer operações ASSÍNCRONAS, como fazer requisições de rede, ler arquivos, ou qualquer coisa que leve tempo para ser concluída.



// async function funcaoAssincrona() {
//   // Síncrono
//   console.log('2');

//   // Apenas o retorno é assíncrono
//   return '4';
// };

// console.log('1');

// // O retorno é tratado como uma PROMISE. Logo, usa-se .then para lidar
// funcaoAssincrona().then(a => console.log(a));

// console.log('3');








// async function pegarNome() {
//   return 'carlos';
// };

// console.log(pegarNome());

// pegarNome().then(a => console.log(a));

// console.log(await pegarNome());


// const resultado = pegarNome();
// resultado.then(a => console.log(a));

// const resultado2 = await pegarNome();
// console.log(resultado2);



// async function teste() {
//   console.log('B');
//   return 'D';
// };

// console.log('A');

// teste().then(a => console.log(a));

// console.log('C');



// function teste() {

//   const p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
  
//     if (a === 2) {
//       resolve({
//         sucesso: 'sucesso'
//       })
//     } else {
//       reject('Não')
//     }
//   });
  
  
//   return p

// }
// teste().then(a => console.log(a.sucesso))


// const p = new Promise((resolve, reject) => {
//   const a = 1 + 1;

//   if (a === 2) {
//     resolve('Sucess')
//   } else {
//     reject('Falhou')
//   }
// })


// p.then(a => console.log(a))



// function teste(avaliacao, nome) {

//   const promise = new Promise((resolve, reject) => {

//     if (avaliacao) {
//       resolve({
//         name: nome
//       })
//     } else {
//       reject({
//         name: nome
//       })
//     }
//   });

//   return promise;
// };

// teste(true, 'Lucas')
//   .then(resolve => console.log(`True, ${resolve.name}`))
//   .catch(reject => console.log(`False, ${reject.name}`))
// ;



function bestRockBand(band) {

  return new Promise((resolve, reject) => {
    if (band === 'Metallica') {
      resolve({
        success: true,
        bandName: band,
        msg: 'Boa! ' + band + ' é muito bom!'
      });
    } else {
      reject({
        success: false,
        msg: 'Sei lá...'
      });
    };
  })

};

function bestSong(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('Fight fire with fire by ' + response.bandName);
    } else {
      reject('Certeza? ' + response.msg);
    };
  })
};

// Com then/catch
bestRockBand('Metallica')
  .then(response => {
    console.log(response.msg);

    // Esse return repassa, juntamente com a chamada da "segunda função", os dados do response do primeiro .then
    return bestSong(response)
  })
  .then(response => {
    console.log(response)
  })
  .catch(reject => {
    console.log(reject.msg)
  })
;

// // Com Async/Await
// async function doIt() {
//   try {
//     const response1 = await bestRockBand('Metallica');
//     console.log(response1.msg)
//     const response2 = await bestSong(response1)
//     console.log(response2);
//   } catch(e) {
//     console.log(e.msg);
//   } 
// }

// doIt()



// // Com AWAIT (sem estar em um contexto de função, portanto, sem async também)
// try {
//   const response1 = await bestRockBand('Metallica');
//   console.log(response1.msg)
//   const response2 = await bestSong(response1);
//   console.log(response2)
// } catch(e) {
//   console.log(e.msg)
// }
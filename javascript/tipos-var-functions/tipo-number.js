const primeiraNota = 8;
const segundaNota = 6.3;
const terceiraNota = -2;
const quartaNota = Number.parseInt('5');

const total = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

console.log(`A média é ${total.toFixed(2)}`);




// Observe que nome não é avaliado como NaN nesse contexto. Porém, observe este novo exemplo, utilizando a função isNaN() ao invés de Number.isNan():

// isNaN(10) // false
// isNaN(nome) // true
// isNaN(NaN) // true

// A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número. Você pode utilizar um ou outro dependendo da sua necessidade.
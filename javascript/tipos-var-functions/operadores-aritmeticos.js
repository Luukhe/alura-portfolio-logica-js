const primeiraNota = 8;
const segundaNota = 6.3;
const terceiraNota = 7;
const quartaNota = Number.parseFloat('9.3');

let media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;


if (media >= 7) {
    media += media * 0.1
};


console.log(`A média é ${media.toFixed(2)}`);
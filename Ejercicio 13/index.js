const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const numerosPares = number.filter(function (numero) {
    return numero%2===0
});
console.log(numerosPares)

const numerosImpares = number.filter(function (num) {
    return num%2!=0
});
console.log(numerosImpares)
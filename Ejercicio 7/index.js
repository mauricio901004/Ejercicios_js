let arrayNumeros = [1,2,3,4,5,6,7,8]

function sumaNumerosPares(arrayNumeros) {
    let suma = 0
    for (const numero of arrayNumeros) {
        if (numero % 2 === 0) {

            suma += numero
        }
    }
    return suma
}
console.log (sumaNumerosPares(arrayNumeros))
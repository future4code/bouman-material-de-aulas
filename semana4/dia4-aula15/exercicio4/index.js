const arrayDeNumeros = [1, 3, 4, 8, 10, 14, 41, 908]

const numerosMaioresDoQueDez = arrayDeNumeros.filter(
    (bolinha) => {
        return bolinha > 10
    }
)

const numerosPares = arrayDeNumeros.filter((el) => {
    return el % 2 === 0
})

console.log("Maiores do que 10: ", numerosMaioresDoQueDez)
console.log("Pares: ", numerosPares)
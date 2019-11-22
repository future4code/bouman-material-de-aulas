function verificaImpar(numero, callback) {
    if (numero % 2 !== 0) {
        callback()
    }
}


const imprimeQueEhImpar = () => {
    console.log("É ímpar")
}

verificaImpar(21, imprimeQueEhImpar)
verificaImpar(20, imprimeQueEhImpar)
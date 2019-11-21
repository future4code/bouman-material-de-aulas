function onKeyDown(ev) {
    if (ev.key === "Enter") {
        aoSalvar()
    }
}

function aoSalvar() {
    const elementoDeInput = document.getElementById("image-input")
    const containerDeImagens = document.getElementById("images-container")
    console.log(elementoDeInput.value)
    if (verificaInput(elementoDeInput.value)) {
        containerDeImagens.innerHTML += criaImagem(elementoDeInput.value)
        elementoDeInput.value = ""
    } else {
        alert("Imagem inválida")
    }
}

function criaImagem(url) {
    return "<img src=\"" + url + "\">"
}

function verificaInput(texto) {
    return texto.includes("http") ||
        texto.includes(".png") ||
        texto.includes(".jpeg") ||
        texto.includes(".mpeg")
}
const arrayDeImagens = []

function onKeyDown(ev) {
    if (ev.key === "Enter") {
        aoSalvar()
    }
}

function aoSalvar() {
    const elementoDeInput = document.getElementById("image-input")
    console.log(elementoDeInput.value)
    if (verificaInput(elementoDeInput.value)) {
        arrayDeImagens.push(elementoDeInput.value)
        elementoDeInput.value = ""
        mostraTodasAsImagens()
    } else {
        alert("Imagem inválida")
    }
}

function mostraTodasAsImagens() {
    const containerDeImagens = document.getElementById("images-container")
    containerDeImagens.innerHTML = ""
    for (const imagem of arrayDeImagens) {
        containerDeImagens.innerHTML += criaImagem(imagem)
    }
}

function criaImagem(url) {
    return "<article class=\"container-da-imagem\">" +
        "<img src=\"" + url + "\">" +
        "<p class=\"botao-de-deletar\" onclick=\"aoDeletar(\'" + url + "\')\">" + "Deletar" + "</p>" +
        "</article>"
}

function aoDeletar(url) {
    for (const image of arrayDeImagens) {
        if (image === url) {
            arrayDeImagens.splice(arrayDeImagens.indexOf(image), 1)
        }
    }
    mostraTodasAsImagens()
}


function verificaInput(texto) {
    return texto.includes(".png") ||
        texto.includes(".jpeg") ||
        texto.includes("http") ||
        texto.includes("data") ||
        texto.includes(".mpeg")
}
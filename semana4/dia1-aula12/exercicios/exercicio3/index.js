window.onload = main

function main() {}

function adicionaTexto(quantidade) {
    const container = document.getElementById("main-container")
    for (let i = 0; i < quantidade; i++) {
        console.log("a")
        container.innerHTML += "<div class='texto-azul'>" + "Texto " + i + "</div>"
    }
}


adicionaTexto(5)
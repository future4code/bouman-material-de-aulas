function aoSelecionarUmaTecla(event) {
    if (event.key === "Enter") {
        aoClicarNoBotao()
    }
}

function aoClicarNoBotao() {
    const texto = document.getElementById("user-input").value
    const containerDosTextos = document.getElementById("container-dos-textos")
    containerDosTextos.innerHTML += "<p>" + texto + "</p>"
    document.getElementById("user-input").value = ""
}
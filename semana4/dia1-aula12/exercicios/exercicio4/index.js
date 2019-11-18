let cliquesNoBotao = 0

function atualizaCliques() {
    cliquesNoBotao++
    const container = document.getElementById("text-container")
    container.innerText = "Quantidade de cliques: " + cliquesNoBotao

}
class Coruja {
    constructor(nome, peso) {
        this.nome = nome
        this.peso = peso
    }

    chirriar() {
        console.log("hu hu hu 🦉")
    }

    comer(quantidadeDeRatos) {
        this.peso += quantidadeDeRatos * 0.2
    }

    voar(tempoDeVoo) {
        this.peso -= tempoDeVoo * 0.1
    }

}

const edwiges = new Coruja("Edwiges", 2)
edwiges.chirriar()
edwiges.comer(3)
console.log(edwiges.peso)

const errol = new Coruja("errol", 3)
errol.chirriar()
errol.comer(4)
console.log(errol.peso)
errol.voar(4)
console.log(errol.peso)
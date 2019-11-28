import React from "react";
import "./App.css";
import PessoaCard from "./components/PessoaCard/index";

const arrayDePessoas = [
  { nome: "Goli", idade: 23 },
  { nome: "Paulinha", idade: 20 },
  { nome: "Darvas", idade: 10 }
];

function App() {
  return (
    <div className="App">
      {arrayDePessoas.map(pessoa => {
        return <PessoaCard nome={pessoa.nome} idade={pessoa.idade} />;
      })}
    </div>
  );
}

export default App;

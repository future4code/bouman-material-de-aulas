import React from "react";
import "./App.css";
import styled from "styled-components";

const Botoes = styled.button`
  height: ${props => {
    if (props.tamanho === "grande") {
      return "50px";
    } else {
      return "30px";
    }
  }};
  width: ${props => {
    if (props.tamanho === "grande") {
      return "200px";
    } else {
      return "100px";
    }
  }};
  background-color: ${props => {
    return props.corDeFundo;
  }};
  color: ${props => {
    return props.corDoTexto;
  }};
`;

function App() {
  return (
    <div className="App">
      <Botoes tamanho="grande" corDeFundo="blue" corDoTexto="violet">
        SALVAR
      </Botoes>
      <Botoes tamanho="pequeno" corDeFundo="yellow" corDoTexto="green">
        DELETAR{" "}
      </Botoes>
    </div>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const BotaoAzulEGrande = styled.button`
  height: 50px;
  width: 200px;
  background-color: blue;
  color: violet;
`;

const BotaoAmareloEPequeno = styled.button`
  height: 30px;
  width: 100px;
  background-color: yellow;
  color: green;
`;

function App() {
  return (
    <div>
      <BotaoAzulEGrande>SALVAR</BotaoAzulEGrande>
      <BotaoAmareloEPequeno>DELETAR</BotaoAmareloEPequeno>
    </div>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const PessoaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
const CampoDeIdade = styled.p`
  font-style: bold;
  color: orange;
  margin-left: 20px;
`;

const CampoDeNome = styled.p``;

function PessoaCard(props) {
  return (
    <PessoaContainer>
      <CampoDeNome>{props.nome}</CampoDeNome>
      <CampoDeIdade>{props.idade}</CampoDeIdade>
    </PessoaContainer>
  );
}

export default PessoaCard;

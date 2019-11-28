import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const NameField = styled.p``;

const AgeField = styled.p`
  color: orange;
  margin-left: 20px;
`;

function PersonCard(props) {
  return (
    <Container>
      <NameField>{props.name}</NameField>
      <AgeField>{props.age}</AgeField>
      <button
        onClick={() => {
          props.onDeleteButtonClick(props.name);
        }}
      >
        Deletar
      </button>
    </Container>
  );
}

export default PersonCard;

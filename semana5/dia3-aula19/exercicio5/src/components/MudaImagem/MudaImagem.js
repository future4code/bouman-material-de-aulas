import React from "react";
import "./MudaImagem.css";

class MudaImagem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroDaImagemMostrada: 1,
      imagemParaMostrar:
        "https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg"
    };
  }

  aoClicar = () => {
    if (this.state.numeroDaImagemMostrada === 1) {
      this.setState({
        numeroDaImagemMostrada: 2,
        imagemParaMostrar:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/13A35/production/_108173408_a6f6df65-ebdd-48d6-b9d6-b8c754a611bc.jpg"
      });
    } else {
      this.setState({
        numeroDaImagemMostrada: 1,
        imagemParaMostrar:
          "https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg"
      });
    }
  };

  render() {
    return (
      <div className="Container">
        <button onClick={this.aoClicar}>
          Mostrando Imagem {this.state.numeroDaImagemMostrada}
        </button>
        <img alt="Imagem" src={this.state.imagemParaMostrar} />
      </div>
    );
  }
}

export default MudaImagem;

import React from "react";
import "./MostraH1.css";

function H1ParaMostrar(mostra) {
  if (mostra) {
    return <h1> Sou uma H1</h1>;
  }
}

class MostraH1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostraH1: false,
      textoDoBotao: "Mostrar"
    };
  }

  aoClicar = () => {
    if (this.state.mostraH1) {
      this.setState({
        mostraH1: false,
        textoDoBotao: "Mostrar"
      });
    } else {
      this.setState({
        mostraH1: true,
        textoDoBotao: "Esconder"
      });
    }
  };

  render() {
    return (
      <div className="Container">
        <button onClick={this.aoClicar}>{this.state.textoDoBotao}</button>
        {H1ParaMostrar(this.state.mostraH1)}
      </div>
    );
  }
}

export default MostraH1;

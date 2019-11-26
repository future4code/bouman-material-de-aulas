import React from "react";
import "./InputETexto.css";

class InputETexto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textoDoH1: "",
      textoDoH2: "",
      textoDoH3: ""
    };
  }

  controleDoInput1 = e => {
    this.setState({
      textoDoH1: e.target.value
    });
  };

  controleDoInput2 = e => {
    this.setState({
      textoDoH2: e.target.value
    });
  };

  controleDoInput3 = e => {
    this.setState({
      textoDoH3: e.target.value
    });
  };

  aoClicarEmLimpar = () => {
    this.setState({
      textoDoH1: "",
      textoDoH2: "",
      textoDoH3: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Texto do Input: {this.state.textoDoH1}</h1>
        <input value={this.state.textoDoH1} onChange={this.controleDoInput1} />
        <h2>Texto do Input: {this.state.textoDoH2}</h2>
        <input value={this.state.textoDoH2} onChange={this.controleDoInput2} />
        <h3>Texto do Input: {this.state.textoDoH3}</h3>
        <input value={this.state.textoDoH3} onChange={this.controleDoInput3} />
        <button onClick={this.aoClicarEmLimpar}>Limpar</button>
      </div>
    );
  }
}

export default InputETexto;

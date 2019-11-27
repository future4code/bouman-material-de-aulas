import React from "react";
import "./BotaoMostraClique.css";

class BotaoMostraClique extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroDeCliques: 0
    };
  }

  aoClicar = () => {
    const numeroDeCliques = this.state.numeroDeCliques;
    this.setState({
      numeroDeCliques: numeroDeCliques + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.aoClicar}>Clique em mim, pf!</button>
        <p> Clicaram {this.state.numeroDeCliques} vezes.</p>
      </div>
    );
  }
}

export default BotaoMostraClique;

import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    //Declaramos una propiedad 'sumar' y le enlazamos el this de toda la clase mediante bind hacia el this de sumar.
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    // console.log("sumando");
    // console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar() {
    // console.log("restando");
    // console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  sumar = (e) => {
    // console.log("sumando");
    // console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    // console.log("restando");
    // console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

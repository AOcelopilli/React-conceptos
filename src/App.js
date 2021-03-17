import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";

function App() {
  let nombre = "Angel";
  let auth = true;
  let seasons = ["primavera", "verano", "otoño", "invieno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p>
          {auth ? "El usuario esta logueado" : "El usuario no esta logueado"}
        </p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {seasons.map((season, idx) => (
            <li key={idx}>{season}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Componente msg="Hola soy un componente con mensaje por props" />
        <Componente msg="Hola soy un componente con mensaje por props" />
        <Componente msg="Hola soy un componente con mensaje por props" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

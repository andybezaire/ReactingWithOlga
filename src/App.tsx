import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link name="Olga" />
      </header>
    </div>
  );
}

type LinkProps = {
  name: string;
};

function Link({ name }: LinkProps) {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React {name} please
    </a>
  );
}

export default App;

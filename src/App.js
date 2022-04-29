import React from "react";
import "./App.css";
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <div className="App">
      <h1>Projeto Redux</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
      <Card title="Card 1" blue> Conteúdo </Card>
      <Card title="Card 2" green> Conteúdo </Card>
      <Card title="Card 3" purple> Conteúdo </Card>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from './components/Header.jsx';
import GameCanvas from "./components/GameCanvas.jsx";
import GameProcess from "./components/GameProcess.jsx";
import RestartButton from "./components/RestartButton.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <GameCanvas/>
      <GameProcess/>
      <RestartButton/>
    </div>
  );
}

export default App;

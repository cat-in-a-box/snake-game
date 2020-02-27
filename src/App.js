import React from "react";
import "./App.css";
// Установил и импортировал Helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ менять его (как и атрибуты страницы) на реакте.
// А еще подгружает скрипты. Нормально.
// Поставил еще React-Scrollable-Anchor для красивых якорей и плавного перемещения
import { Helmet } from "react-helmet";
import Header from './components/Header.jsx';
import GameCanvas from "./components/GameCanvas.jsx";
import GameProcess from "./components/GameProcess.jsx";
import RestartButton from "./components/RestartButton.jsx";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Snake game!</title>
        <meta charSet="utf-8" />
        <link rel="preload" href="App.css" as="style"/>
      </Helmet>
      <Header/>
      <GameCanvas/>
      <GameProcess/>
      <RestartButton/>
    </div>
  );
}

export default App;

import React from "react";
import BackButton from "../BackButton.jsx";
import GameCanvas from "./components/GameCanvas.jsx";
import GameProcess from "./components/GameProcess.jsx";
import RestartButton from "./components/RestartButton.jsx";

const Snake = () => {

    return (
        <div>
            <BackButton/>
            <GameCanvas/>
            <GameProcess/>
            <RestartButton/>
        </div>
    );

}

export default Snake;

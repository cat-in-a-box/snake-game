import React from "react";
import BackButton from "../BackButton";
import GameCanvas from "./components/GameCanvas";
import GameProcess from "./components/GameProcess";
import RestartButton from "./components/RestartButton";

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

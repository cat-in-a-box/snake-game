import React from "react";

const GameCanvas = () => {
    return (
        <div className={"SnakeGame"}>
            <p>Съедено колбасок:</p>
            <p id={"SnakeScore"}>0</p>
            <p id={'SnakeScoreUnderText'}>Двигай змейку с помощью стрелок на клавиатуре</p>
            <canvas id={"SnakeGameCanvas"} width={"810"} height={"510"}/>
        </div>
    )
};

export default GameCanvas;

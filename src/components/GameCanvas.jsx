import React from "react";

const GameCanvas = () => {
    return (
        <div className="GameCanvas">
            <div>Съедено колбасок:</div>
            <div className="score" id="score">0</div>
            <div className="scoreUndertext">Двигай змейку с помощью стрелок на клавиатуре</div>
            <canvas className="GameField" id="gameCanvas" width="810" height="510"/>
        </div>
    )
};

export default GameCanvas;

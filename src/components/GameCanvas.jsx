import React from "react";

const GameCanvas = () => {
    return (
        <div className="GameCanvas">
            <div>Cubes eaten:</div>
            <div class="score" id="score">0</div>
            <canvas class="gameField" id="gameCanvas" width="810" height="510"/>
        </div>
    )
};

export default GameCanvas;

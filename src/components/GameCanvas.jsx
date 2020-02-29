import React from "react";

const GameCanvas = () => {
    return (
        <div className="GameCanvas">
            <div>Food eaten:</div>
            <div className="score" id="score">0</div>
            <div className="scoreUndertext">You can move the snake with arrow buttons</div>
            <canvas class="gameField" id="gameCanvas" width="810" height="510"/>
        </div>
    )
};

export default GameCanvas;

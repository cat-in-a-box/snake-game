import React from 'react';

export default class GameProcess extends React.Component {

    componentDidMount() {

        //скорость обновления игры
        const GameRefreshSpeed = 120;
        //цвет бордера канваса
        const CanvasBorderColor = 'black';
        //цвет бекграунда канваса
        const CanvasBackgroundColor = "white";
        //цвет тела змеи
        const SnakeColor = 'rgba(145,255,133,0.7)';
        //цвет бордера змеи
        const SnakeBorderColor = 'darkgreen';
        //цвет еды
        const FoodColor = '#ffa08f';
        //цвет бордера еды
        const FoodBorderColor = 'black';

        //координаты спауна змейки
        let snake = [
            {x: 150, y: 150},
            {x: 120, y: 150},
            {x: 90, y: 150},
            {x: 60, y: 150},
            {x: 30, y: 150}
        ];

        // Счет игрока
        let score = 0;
        // Меняется на true когда змейка меняет направление
        let changingDirection = false;
        // x-координата еды
        let foodX;
        // y-координата еды
        let foodY;
        // Горизонтальная скорость движения
        let dx = 30;
        // Вертикальная скорость движения
        let dy = 0;

        const gameCanvas = document.getElementById("gameCanvas");
        const ctx = gameCanvas.getContext("2d");

        // Старт игры
        main();
        // Создать еду
        spawnFood();
        // Вызывает changeDirection когда нажимаешь клавишу
        document.addEventListener("keydown", changeDirection);

        /**
         * Главная функция
         * Постоянно выполняется, чтобы игра игралась
         **/

        function main() {
            if (GameEnd()) return;
            // Заканчивает игру, если соблюдены все условия
            setTimeout(function onTick() {
                changingDirection = false;
                prepareCanvas();
                drawFood();
                moveSnake();
                drawSnake();
                main();
            }, GameRefreshSpeed)
        }


        /**
         * Изменяет цвет бекграунда на CanvasBackgroundColor и
         * рисует вокруг него бордер
         **/
        function prepareCanvas() {
            ctx.fillStyle = CanvasBackgroundColor;
            ctx.strokestyle = CanvasBorderColor;
            ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
            ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
        }


        /**
         * Рисует еду
         **/
        function drawFood() {
            ctx.fillStyle = FoodColor;
            ctx.strokestyle = FoodBorderColor;
            ctx.fillRect(foodX, foodY, 30, 30);
            ctx.strokeRect(foodX, foodY, 30, 30);
        }


        /**
         * Продвигает змейку вперед по х-координатам и y-координатам
         **/
        function moveSnake() {
            // Создает новую голову у змейки
            const newHead = {x: snake[0].x + dx, y: snake[0].y + dy};
            // Добавляет новую голову к началу тела змейки
            snake.unshift(newHead);
            const FoodEaten = snake[0].x === foodX && snake[0].y === foodY;
            if (FoodEaten) {
                // Повышает счёт
                score += 1;
                // Отображает счет на экране
                document.getElementById('score').innerHTML = score;
                // Создает новую еду
                spawnFood();
            } else {
                // Убирает последнюю часть тела змейки
                snake.pop();
            }
        }

        /**
         * Возвращает true если голова змейки коснулась стены или самой себя
         **/
        function GameEnd() {
            for (let i = 4; i < snake.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
            }
            const LeftWallCollision = snake[0].x < 0;
            const RightWallCollision = snake[0].x > gameCanvas.width - 30;
            const TopWallCollision = snake[0].y < 0;
            const BottomWallCollision = snake[0].y > gameCanvas.height - 30;
            return LeftWallCollision || RightWallCollision || TopWallCollision || BottomWallCollision
        }

        /**
         * Генерирует рандомное число умноженное на 10 основываясь на минимальном и максимальном числе
         **/
        function randomNumber(min, max) {
            return Math.round((Math.random() * (max - min) + min) / 30) * 30;
        }

        /**
         * Создает еду в рандомных координатах
         */
        function spawnFood() {
            foodX = randomNumber(0, gameCanvas.width - 30);
            foodY = randomNumber(0, gameCanvas.height - 30);
            // Если еда создается там, где змейка находится сейчас, то генерирует еду в новой локации
            snake.forEach(function foodSnakeCheck(part) {
                const foodRecreate = part.x === foodX && part.y === foodY;
                if (foodRecreate) spawnFood();
            });
        }

        /**
         * Рисует голову змейки
         */
        function drawSnake() {
            snake.forEach(drawSnakePart)
        }

        /**
         * Рисует части змейки
         */
        function drawSnakePart(snakePart) {
            ctx.fillStyle = SnakeColor;
            ctx.strokestyle = SnakeBorderColor;
            // Рисует сам квадратик для змейки
            ctx.fillRect(snakePart.x, snakePart.y, 30, 30);
            // Рисует бордер для змейки
            ctx.strokeRect(snakePart.x, snakePart.y, 30, 30);
        }

        /**
         * Изменяет вертикальную и горизонтальную скорость для змейки основываясь на нажатой кнопке
         */
        function changeDirection(event) {
            const leftArrowKey = 37;
            const rightArrowKey = 39;
            const upArrowKey = 38;
            const downArrowKey = 40;

            /**
             Предотвращает изменение скорости на противоположную
             */
            if (changingDirection) return;
            changingDirection = true;

            const pressedKey = event.keyCode;
            const movingUp = dy === -30;
            const movingDown = dy === 30;
            const movingRight = dx === 30;
            const movingLeft = dx === -30;

            if (pressedKey === leftArrowKey && !movingRight) {
                dx = -30;
                dy = 0;
            }
            if (pressedKey === upArrowKey && !movingDown) {
                dx = 0;
                dy = -30;
            }
            if (pressedKey === rightArrowKey && !movingLeft) {
                dx = 30;
                dy = 0;
            }
            if (pressedKey === downArrowKey&& !movingUp) {
                dx = 0;
                dy = 30;
            }
        }
    }

    render() {
        return <div/>;
    }
}
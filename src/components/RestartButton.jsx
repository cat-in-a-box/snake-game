import React from "react";

function RestartButton(event) {

    //Листенер сидит и жмет пока ты нажмешь на кнопку. Нужен чтобы детектить это дело, иначе кнопка не проходит
    document.addEventListener("keydown", RestartButton);

    //Назначение кода на пробел
    let spaceBar = 32;
    let spaceBarPressed = event.keyCode;

    //Перезагрузка страницы
    if (spaceBarPressed === spaceBar) {
        window.location.reload();
    }

    //Собственно самам кнопка
    return (
        <a className="RestartButton" href="https://cat-in-a-box.github.io/snake-game/">Перезапуск (Пробел)</a>
    )
}

export default RestartButton;

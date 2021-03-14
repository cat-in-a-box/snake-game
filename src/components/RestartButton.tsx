import React from 'react';

function RestartButton(event:any) {
	//Листенер сидит и жмет пока ты нажмешь на кнопку
	document.addEventListener("keydown", RestartButton);

	//Назначение кода на пробел
	let spaceBar: number = 32;
	let spaceBarPressed:any = event.keyCode;

	//Перезагрузка страницы
	if (spaceBarPressed === spaceBar) {
		window.location.reload();
	}

    return (
        <a className={"SnakeRestartButton"} href={"https://cat-in-a-box.github.io/snake"}>Перезапуск (Пробел)</a>
    )
}

export default RestartButton;


const gameBoard = document.querySelector("#game-board");
const context = gameBoard.getContext("2d");
const scoreText = document .querySelector("#score-text");
const resetBtn = document.querySelector('#reset-button');
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = 'purple';
const snakeColor = 'yellow';
const snakeBorder = 'black';
const foodColor = 'red';
const unitSize = 25;


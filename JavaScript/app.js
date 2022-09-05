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

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
  {x:unitSize *  4, y:0},
  {x:unitSize *  3, y:0},
  {x:unitSize *  2, y:0},
  {x:unitSize, y:0},
  {x:0, y:0}
];

resetBtn.addEventListener('click', resetGame);
window.addEventListener('keydown', changeDirection);
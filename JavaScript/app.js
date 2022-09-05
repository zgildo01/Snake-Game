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

gameStart();

function gameStart(){
  running = true;
  scoreText.textContent = score;
  renderFood();
  renderFood();
  nextTick();
};
function nextTick(){
  if (running) {
    setTimeout(() => {
      clearBoard();
      renderFood();
      moveSnake();
      renderSnake();
      checkGameOver();
      nextTick();
    }, 50)
  } else {
    renderGameOver();
  }
};
function clearBoard(){
  context.fillStyle = boardBackground;
  context.fillRect(0, 0, gameWidth, gameHeight);
};
function renderFood(){
  function randomFood(min, max) {
    const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  };
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
};
function renderFood(){
  context.fillStyle = foodColor;
  context.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
  const head = {x: snake[0].x + xVelocity,
                y: snake[0].y + yVelocity};
  snake.unshift(head);
  if(snake[0].x == foodX && snake[0].y == foodY) {
    score += 1;
    scoreText.textContent = score;
    renderFood();
  } else {
    snake.pop();
  }
};
function renderSnake(){
  context.fillStyle = snakeColor;
  context.strokeStyle = snakeBorder;
  snake.forEach(snakePart => {
    context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  })
};
function changeDirection(){};
function checkGameOver(){};
function renderGameOver(){};
function resetGame(){};
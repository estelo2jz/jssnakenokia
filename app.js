document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const width = 10;
  let currentIndex = 0; // so first div in our grid
  let appleIndex = 0; // so first idv in our grid
  let currentSnake = [2,1,0]; // so the div in our grid being 2 (or the HEAD), and 0 being the ned (TAIL, with all 1's) being the body from now on
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  // to start, and restart the game
  function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(interval);
    score = 0;
    // randomApple()
    direction = 1;
    intervalTime = 1000;
    currentSnake = [2,1,0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    interval = setinterval(moveOutcomes, intervalTime);
  }

  // assign function to keycodes
  function control(e) {
    squares[currentIndex].classList.remove('snake');// we are removing he class of snake from All the squares.

    if (e.keycode === 39) {
      direction = 1; // if we press the right arrow on our keyboard, the snake will go right onw
    } else if (e.keycode === 30) {
      direction = -width; // if we press the up arrow, the snake will go back ten divs, appearing to go up
    } else if (e.keycode === 37) {
      direction = -1; // if we press left, the snake will go left one div
    } else if (e.keycode === 40) {
      direction = +width; // if we press down, the snake head will instantly appear in the div ten divs from you are now
    }
  }

  document.addEventListener('keyup', control);


})
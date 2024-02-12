const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 32;
let score = 0;
// keep track of what is in every cell of the game using a 2d array
// playfield is 10x20, with a few rows offscreen
const playfield = [];

// populate the empty state
for (let row = -2; row < 20; row++) {
    playfield[row] = [];
  for (let col = 0; col < 10; col++) {
    playfield[row][col] = 0;
  }
}
let count = 0;
let tetromino = getNextTetromino();
let rAF = null;  // keep track of the animation frame so we can cancel it
let gameOver = false;

// game loop
function loop() {
  rAF = requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  // draw the playfield
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col];
        context.fillStyle = colors[name];
        // drawing 1 px smaller than the grid creates a grid effect
        context.fillRect(col * grid, row * grid, grid-1, grid-1);
      }
    }
  }
  // draw the active tetromino
  if (tetromino) {

    // tetromino falls every 35 frames
    if (++count > 25) {
      tetromino.row++;
      count = 0;

      // place piece if it runs into anything
      if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTetromino();
      }
    }

    context.fillStyle = colors[tetromino.name];

    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {
          // drawing 1 px smaller than the grid creates a grid effect
          context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
        }
      }
    }
  }
}

// listen to keyboard events to move the active tetromino
document.addEventListener('keydown', function(e) {
  if (gameOver) return;

  // left and right arrow keys (move)
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const col = e.key === 'ArrowLeft'
      ? tetromino.col - 1
      : tetromino.col + 1;

    if (isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col;
    }
  }

  // up arrow key (rotate)
  if (e.key === 'ArrowUp') {
    const matrix = rotate(tetromino.matrix);
    if (isValidMove(matrix, tetromino.row, tetromino.col)) {
      tetromino.matrix = matrix;
    }
  }

  // down arrow key (drop)
  if(e.key === 'ArrowDown') {
    const row = tetromino.row + 1;

    if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
      tetromino.row = row - 1;
      placeTetromino();
      return;
    }

    tetromino.row = row;
  }
});

document.getElementById("Restart").addEventListener ("click",()=> {
    location.reload()
})
document.getElementById("startGame").addEventListener ("click",()=> {
  // start the game
  rAF = requestAnimationFrame(loop);
  document.getElementById("startGame").style.display = "none";
  document.getElementById("begin").play();
  document.getElementById("endGame").style.display = "block"
})
document.getElementById("endGame").addEventListener ("click",()=> {
  document.getElementById("endGame").style.display = "none";
  document.getElementById("Restart").style.display = "block";
  showGameOver();
})

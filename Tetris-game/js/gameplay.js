const tetrominoSequence = [];

function generateSequence() {
    const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
  
    while (sequence.length) {
      const rand = getRandomInt(0, sequence.length - 1);
      const name = sequence.splice(rand, 1)[0];
      tetrominoSequence.push(name);
    }
  }
  
  // get the next tetromino in the sequence
function getNextTetromino() {
    if (tetrominoSequence.length === 0) {
      generateSequence();
    }
    const name = tetrominoSequence.pop();
    const matrix = tetrominos[name];
  
    // I and O start centered, all others start in left-middle
    const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);
  
    // I starts on row 21 (-1), all others start on row 22 (-2)
    const row = name === 'I' ? -1 : -2;
  
    return {
      name: name,      // name of the piece (L, O, etc.)
      matrix: matrix,  // the current rotation matrix
      row: row,        // current row (starts offscreen)
      col: col         // current col
    };
}
// check to see if the new matrix/row/col is valid
// place the tetromino on the playfield
function placeTetromino() {
    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {
          // game over if piece has any part offscreen
          if (tetromino.row + row < 0) {
            return showGameOver();
          }
  
          playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
        }
      }
    }
  
    // check for line clears starting from the bottom and working our way up
    for (let row = playfield.length - 1; row >= 0; ) {
      if (playfield[row].every(cell => !!cell)) {
        score += 100; // incrementing the score system
        let printScore = document.getElementById("game_score");
        printScore.textContent = "Score:" + score;
        document.getElementById("scoring").play();
        // drop every row above this one
        for (let r = row; r >= 0; r--) {
          for (let c = 0; c < playfield[r].length; c++) {
            playfield[r][c] = playfield[r-1][c];
          }
        }
      }

      else {
        row--;
      }
    }
  
    tetromino = getNextTetromino();
}
  
  // show the game over screen
function showGameOver() {
    cancelAnimationFrame(rAF);
    gameOver = true;
    document.getElementById("begin").pause();
    document.getElementById("Restart").style.display ="block";
    document.getElementById("endGame").style.display= "none";
    document.getElementById("end").play();
    context.fillStyle = 'black';
    context.globalAlpha = 0.75;
    context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
    context.globalAlpha = 1;
    context.fillStyle = 'white';
    context.font = '36px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
    document.getElementById("start-btn").style.display = "block";
  
}
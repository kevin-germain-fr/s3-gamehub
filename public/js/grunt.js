var app = {

  player: {
    x: 0,
    y: 0,
    direction: 'right'
  },

  targetCell: {
    x: 5,
    y: 3
  },

  gameOver: false,

  counter: -1,

  init: function () {
    app.boardContainer = document.querySelector('#board');
    app.redrawBoard();
    app.listenKeyboardEvents();
    console.log('init !');
  },


  drawBoard: function () {
    for (var indexRow = 0; indexRow < 4; indexRow++) {
      var divRaw = document.createElement('div');
      divRaw.classList.add('row');

      for (var indexCell = 0; indexCell < 6; indexCell++) {
        var divCell = document.createElement('div');
        divCell.classList.add('cell');
        divRaw.appendChild(divCell);

        if (indexRow === app.player.y && indexCell === app.player.x) {
          var divPlayer = document.createElement('div');
          divPlayer.classList.add('player');
          divPlayer.classList.add(app.player.direction)
          divCell.appendChild(divPlayer);
        }

        if (indexRow === app.targetCell.y && indexCell === app.targetCell.x) {
          divCell.classList.add('targetCell')
        }

      }
      app.boardContainer.appendChild(divRaw);
    }
    app.isGameOver();
  },

  clearBoard: function() {
    app.boardContainer.textContent = ''
  },

  redrawBoard: function() {
    app.clearBoard();
    app.drawBoard();
    app.counter++;
    console.log(app.counter + ' coups');
  },

  turnLeft: function() {
    if (app.gameOver === false) {
      if (app.player.direction === 'right') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'up';
        console.log('Nouvelle direction : ' + app.player.direction);
      } else if (app.player.direction === 'up') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'left';
        console.log('Nouvelle direction : ' + app.player.direction);
      } else if (app.player.direction === 'left') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'down';
        console.log('Nouvelle direction : ' + app.player.direction);
      } else if (app.player.direction === 'down') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'right';
        console.log('Nouvelle direction : ' + app.player.direction);
      }

      app.redrawBoard();
    }
  },

  turnRight: function() {
    if (app.gameOver === false) {
      if (app.player.direction === 'right') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'down';
        console.log('Nouvelle direction : ' + app.player.direction);
      } else if (app.player.direction === 'down') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'left';
        console.log('Nouvelle direction : ' + app.player.direction);
      } else if (app.player.direction === 'left') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'up';
        console.log('Nouvelle direction : ' + app.player.direction);
      } else if (app.player.direction === 'up') {
        console.log('Ancienne direction : ' + app.player.direction);
        app.player.direction = 'right';
        console.log('Nouvelle direction : ' + app.player.direction);
      }
      app.redrawBoard();
    }
  },

  moveForward: function() {
    if (app.gameOver === false) {
      if (app.player.direction === 'right' && app.player.x < 5) {
        app.player.x = app.player.x + 1
      } else if (app.player.direction === 'down' && app.player.y < 3) {
        app.player.y = app.player.y +1
      } else if (app.player.direction === 'left' && app.player.x > 0) {
        app.player.x = app.player.x - 1
      } else if (app.player.direction === 'up' && app.player.y > 0) {
        app.player.y = app.player.y -1
      }
      app.redrawBoard();
    }
  },

  listenKeyboardEvents: function() {
    document.addEventListener('keyup', app.pressedKeyboard);
  },

  pressedKeyboard: function(evt) {
    console.log('Le clavier a été touché');
    console.log(evt.keyCode);

    if (evt.keyCode === 38) {
      app.moveForward();
    } else if (evt.keyCode === 39) {
      app.turnRight();
    } else if (evt.keyCode === 37) {
      app.turnLeft();
    }
  },

  isGameOver: function() {
    if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
      alert('Bravo vous avez gagné en ' + app.counter + ' coups !');
      app.gameOver = true;
    }
  }

};

document.addEventListener('DOMContentLoaded', app.init);
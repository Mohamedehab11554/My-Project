let playerXName = "Player X";
let playerOName = "Player O";
let currentPlayer = 'x';

const oColor = 'Red';
const xColor = '#fa0';

window.onload = function() {
    playerXName = prompt("الي هيلعب ب X أسمك:");
    if (playerXName === null || playerXName.trim() === "") {
        playerXName = "Player X";
    }

    playerOName = prompt(" وأنت يا عم ب O انجز:");
    if (playerOName === null || playerOName.trim() === "") {
        playerOName = "Player O";
    }

    document.getElementById('xWins').innerHTML = `${playerXName} Wins: 0`;
    document.getElementById('oWins').innerHTML = `${playerOName} Wins: 0`;
    document.querySelector('.title').innerHTML = '<span>X O</span> Game';
  };

function game(id) {
    let element = document.getElementById(id);

    if (element.innerHTML === '') {
        element.innerHTML = currentPlayer;
        element.style.color = currentPlayer === 'x' ? xColor : oColor;
        document.querySelector('.title').innerHTML = currentPlayer === 'x' ? playerOName : playerXName;
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        winner();
    }

    if (document.querySelector('.title').innerHTML.includes('Winner')) {
        for (let i = 1; i <= 9; i++) {
            const square = document.getElementById('item' + i);
            square.onclick = null;
        }
    }
}

function restartGame() {
    for (let i = 1; i <= 9; i++) {
        const element = document.getElementById('item' + i);
        element.innerHTML = '';
        element.style.background = 'none';
        element.style.backgroundColor = 'black';
        element.style.boxShadow = 'none';
        element.onclick = function () {
            game(this.id);
        };
    }
    document.querySelector('.title').innerHTML = `${playerXName} ${playerOName}`;
    currentPlayer = 'x';
}
function resetGame() {
    for (let i = 1; i <= 9; i++) {
        const element = document.getElementById('item' + i);
        element.innerHTML = '';
        element.style.background = 'none';
        element.style.backgroundColor = 'black';
        element.style.boxShadow = 'none';
        element.onclick = function () {
            game(this.id);
        };
    }

    playerXName = prompt("Enter Player X's name:");
    if (playerXName === null || playerXName.trim() === "") {
        playerXName = "Player X";
    }

    playerOName = prompt("Enter Player O's name:");
    if (playerOName === null || playerOName.trim() === "") {
        playerOName = "Player O";
    }

    document.getElementById('xWins').innerHTML = `${playerXName} Wins: 0`;
    document.getElementById('oWins').innerHTML = `${playerOName} Wins: 0`;
    document.querySelector('.title').innerHTML = '<span>X O</span> Game';
    currentPlayer = 'x';
}

function winner() {
    let squares = [];
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !== '') {
        end(squares[1]);
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !== '') {
        end(squares[4]);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !== '') {
        end(squares[7]);
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !== '') {
        end(squares[1]);
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !== '') {
        end(squares[2]);
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !== '') {
        end(squares[3]);
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !== '') {
        end(squares[1]);
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] !== '') {
        end(squares[3]);
    } else if ([...squares].every(square => square !== '')) {
        end('draw');
    }
}

function end(result) {
    if (result === 'draw') {
        document.querySelector('.title').innerHTML = "It's a draw!";
    } else {
        let winnerName = result === 'x' ? playerXName : playerOName;
        document.querySelector('.title').innerHTML = `${winnerName} Winner`;
        if (result === 'x') {
            document.getElementById('xWins').innerHTML = `${playerXName} Wins: ${parseInt(document.getElementById('xWins').innerHTML.split(": ")[1]) + 1}`;
        } else {
            document.getElementById('oWins').innerHTML = `${playerOName} Wins: ${parseInt(document.getElementById('oWins').innerHTML.split(": ")[1]) + 1}`;
        }
    }

    setTimeout(function () {
        for (let i = 1; i <= 9; i++) {
            const element = document.getElementById('item' + i);
            element.innerHTML = '';
            element.style.background = 'none';
            element.style.backgroundColor = 'black';
            element.style.boxShadow = 'none';
            element.onclick = function () {
                game(this.id);
            };
        }
        document.querySelector('.title').innerHTML = '<span>X O</span> Game';
        currentPlayer = 'x';
    }, 2000);
}
// Variables globales
let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = 'X';
let gameEnded = false;

// Fonction pour effectuer un coup
function makeMove(index) {
    if (board[index] === null && !gameEnded) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Fonction pour vérifier s'il y a un gagnant
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
        [0, 4, 8], [2, 4, 6]             // diagonales
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            gameEnded = true;
            setTimeout(() => {
                alert(`Le joueur "${board[a]}" a gagné !`);
            }, 100);
            break;
        }
    }

    if (!board.includes(null) && !gameEnded) {
        gameEnded = true;
        setTimeout(() => {
            alert("Match nul !");
        }, 100);
    }
}

// Fonction pour réinitialiser le plateau de jeu
function resetBoard() {
    board = [null, null, null, null, null, null, null, null, null];
    currentPlayer = 'X';
    gameEnded = false;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

// Ajout d'événement aux cellules
const cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => makeMove(i));
}

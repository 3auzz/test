const board = document.getElementById('board');
let pieces = [];

function startGame() {
    createBoard();
    placePieces();
}

function createBoard() {
    for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div');
        if ((i + Math.floor(i / 8)) % 2 === 0) {
            cell.classList.add('black-cell');
        } else {
            cell.classList.add('cell');
        }
        board.appendChild(cell);
    }
}

function placePieces() {
    pieces = [
        { type: 'red', x: 0, y: 7 },
        { type: 'red', x: 2, y: 7 },
        // Добавьте остальные фигуры...
    ];
    
    pieces.forEach(piece => {
        const cell = board.children[piece.x + piece.y * 8];
        const newPiece = document.createElement('div');
        newPiece.classList.add('piece', `${piece.type}-piece`);
        cell.appendChild(newPiece);
    });
}

// Вызов функции для начала игры при загрузке страницы
window.onload = startGame;

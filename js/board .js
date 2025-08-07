// Мапване от букви във FEN към имена на картинки
const pieceMap = {
  p: 'bP', r: 'bR', n: 'bN', b: 'bB', q: 'bQ', k: 'bK',
  P: 'wP', R: 'wR', N: 'wN', B: 'wB', Q: 'wQ', K: 'wK'
};

function createEmptyBoard() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = ""; // Изчистване
  boardDiv.style.display = "grid";
  boardDiv.style.gridTemplateColumns = "repeat(8, 60px)";
  boardDiv.style.gridTemplateRows = "repeat(8, 60px)";
  boardDiv.style.width = "480px";
  boardDiv.style.height = "480px";

  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.style.width = "60px";
    square.style.height = "60px";
    square.style.backgroundColor = (Math.floor(i / 8) + i) % 2 === 0 ? "#eee" : "#444";
    square.style.position = "relative";
    boardDiv.appendChild(square);
  }
}
function loadPGN(pgnText) {
  const game = new Chess(); // използва chess.js
  const success = game.load_pgn(pgnText);

  if (!success) {
    alert("Невалиден PGN!");
    return;
  }

  const fen = game.fen(); // вземаме крайната позиция от PGN-а
  loadFEN(fen); // зареждаме тази позиция на дъската
}
  }
}

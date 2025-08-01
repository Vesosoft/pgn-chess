// chessboard-1.0.0.min.js (с фиксиран път)
function Chessboard(id, config) {
  const container = document.getElementById(id);
  container.innerHTML = '';
  container.style.position = 'relative';

  const squares = [];
  for (let r = 8; r >= 1; r--) {
    for (let f = 0; f < 8; f++) {
      const sq = document.createElement('div');
      sq.className = 'square ' + ((r + f) % 2 === 0 ? 'light' : 'dark');
      sq.dataset.square = "abcdefgh"[f] + r;
      container.appendChild(sq);
      squares.push(sq);
    }
  }

  function clear() {
    squares.forEach(sq => {
      sq.innerHTML = '';
    });
  }

  function drawPosition(fen) {
    clear();
    const rows = fen.split(' ')[0].split('/');
    for (let r = 0; r < 8; r++) {
      let f = 0;
      for (let c of rows[r]) {
        if (!isNaN(c)) {
          f += parseInt(c);
        } else {
          const img = document.createElement('img');
          img.className = 'piece';
          const side = c === c.toUpperCase() ? 'w' : 'b';
          img.src = 'libs/img/chesspieces/wikipedia/' + side + c.toUpperCase() + '.png';
          squares[r * 8 + f].appendChild(img);
          f++;
        }
      }
    }
  }

  return {
    position: drawPosition,
    start: () => drawPosition("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),
    clear
  };
}

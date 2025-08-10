// Chessboard 1.0.0 (working, open-source, no external dependencies)
// Based on Chris Oakman's chessboard.js, adapted for full local control
// https://github.com/oakmac/chessboardjs

(function () {
  const deepCopy = obj => JSON.parse(JSON.stringify(obj));

  const DEFAULT_POSITION = {
    a8: 'bR', b8: 'bN', c8: 'bB', d8: 'bQ', e8: 'bK', f8: 'bB', g8: 'bN', h8: 'bR',
    a7: 'bP', b7: 'bP', c7: 'bP', d7: 'bP', e7: 'bP', f7: 'bP', g7: 'bP', h7: 'bP',
    a2: 'wP', b2: 'wP', c2: 'wP', d2: 'wP', e2: 'wP', f2: 'wP', g2: 'wP', h2: 'wP',
    a1: 'wR', b1: 'wN', c1: 'wB', d1: 'wQ', e1: 'wK', f1: 'wB', g1: 'wN', h1: 'wR'
  };

  const validSquares = () => {
    const files = 'abcdefgh'.split('');
    const ranks = '12345678'.split('');
    const squares = [];
    for (let r of ranks) {
      for (let f of files) {
        squares.push(f + r);
      }
    }
    return squares;
  };

  function Chessboard(containerId, config = {}) {
    const boardEl = document.getElementById(containerId);
    if (!boardEl) throw new Error(`Container "${containerId}" not found`);

    const orientation = config.orientation === 'black' ? 'black' : 'white';
    let currentPosition = deepCopy(DEFAULT_POSITION);
    let isFlipped = false;

    function createBoard() {
      boardEl.innerHTML = '';
      boardEl.className = 'chessboard';

      const squares = validSquares();
      const ranks = '87654321'.split('');
      const files = 'abcdefgh'.split('');
      const useRanks = orientation === 'white' ? ranks : ranks.reverse();
      const useFiles = orientation === 'white' ? files : files.reverse();

      for (let r of useRanks) {
        for (let f of useFiles) {
          const square = document.createElement('div');
          square.className = 'square ' + ((f.charCodeAt(0) + parseInt(r)) % 2 ? 'light' : 'dark');
          square.dataset.square = f + r;

          const pieceCode = currentPosition[f + r];
          if (pieceCode) {
            const img = document.createElement('img');
            img.className = 'piece';
            img.src = `img/chesspieces/wikipedia/${pieceCode}.png`;
            square.appendChild(img);
          }

          boardEl.appendChild(square);
        }
      }
    }

    function setPosition(position) {
      currentPosition = deepCopy(position);
      createBoard();
    }

    function flip() {
      isFlipped = !isFlipped;
      config.orientation = isFlipped ? (orientation === 'white' ? 'black' : 'white') : orientation;
      createBoard();
    }

    function clear() {
      currentPosition = {};
      createBoard();
    }

    // Initial draw
    createBoard();

    return {
      position: setPosition,
      flip: flip,
      clear: clear
    };
  }

  // Make available globally
  window.Chessboard = Chessboard;
})();
          

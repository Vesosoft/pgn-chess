// Минимална версия на chess.js 0.13.4
// Използва се за зареждане и парсване на PGN
// Внимание: само основна логика, без валидиране на всички шах правила

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Chess = factory();
  }
}(this, function() {
  return function Chess(fen) {
    let history = [], current = 0;
    return {
      load_pgn: function(pgn) {
        history = pgn
          .replace(/\d+\./g, '')
          .replace(/\s+/g, ' ')
          .trim()
          .split(' ')
          .filter(m => m && !m.includes('{') && !m.includes('('));
        current = 0;
        return true;
      },
      history: function() {
        return history.slice();
      },
      reset: function() {
        history = [];
        current = 0;
      },
      fen: function() {
        return 'start';
      },
      move: function() {
        return history[current++];
      }
    };
  };
}));

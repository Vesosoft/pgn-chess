import { board, updateBoard } from './board.js';
import { initControls } from './controls.js';

const game = new Chess();
const pgn = `[Event "Example"]
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6`;

game.load_pgn(pgn);
let currentMove = 0;
let history = game.history({ verbose: true });

function goToMove(index) {
  game.reset();
  for (let i = 0; i < index; i++) {
    game.move(history[i]);
  }
  currentMove = index;
  updateBoard(game.fen());
}

initControls({
  onFirst: () => goToMove(0),
  onBack: () => goToMove(Math.max(0, currentMove - 1)),
  onNext: () => goToMove(Math.min(history.length, currentMove + 1)),
  onLast: () => goToMove(history.length),
});

goToMove(0); // стартово състояние

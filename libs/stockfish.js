// stockfish.js (не използва import)
var stockfish = new Worker("https://cdn.jsdelivr.net/npm/stockfish@16.1.0/src/stockfish.js");

stockfish.onmessage = function (e) {
  console.log("Stockfish: " + e.data);
};

function sendToEngine(cmd) {
  console.log("Sending to Stockfish: " + cmd);
  stockfish.postMessage(cmd);
}
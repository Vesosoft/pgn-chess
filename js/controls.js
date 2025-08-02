// js/controls.js

export function createControls(container, onAction) {
  const buttons = [
    { id: "prevBtn", label: "◀️", action: "prev" },
    { id: "nextBtn", label: "▶️", action: "next" },
    { id: "flipBtn", label: "🔄", action: "flip" },
    { id: "loadBtn", label: "📂", action: "load" },
  ];

  buttons.forEach(({ id, label, action }) => {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = label;
    btn.className = "chess-btn";
    btn.addEventListener("click", () => onAction(action));
    container.appendChild(btn);
  });
}
document.getElementById('btn-prev').addEventListener('click', () => {
  if (typeof prevMove === 'function') prevMove();
});

document.getElementById('btn-next').addEventListener('click', () => {
  if (typeof nextMove === 'function') nextMove();
});

document.getElementById('btn-flip').addEventListener('click', () => {
  if (typeof board !== 'undefined' && typeof board.flip === 'function') {
    board.flip();
  }
});

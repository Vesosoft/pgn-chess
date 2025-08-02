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

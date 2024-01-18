export function Cell(x, y) {
  const cellElement = document.createElement("div");
  cellElement.append(x + "-" + y);
  cellElement.style =
    "font-size: 30px; border: 1px solid #000; padding: 10px; gap: 10px";

  return cellElement;
}

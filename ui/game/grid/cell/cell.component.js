import { OFFER_STATUSES, data } from "../../../../data/game.data.js";

export function Cell(x, y) {
  const cellElement = document.createElement("div");
  cellElement.style =
    "font-size: 30px; border: 1px solid #000; padding: 10px; gap: 10px; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center";

  if (x === data.coords.current.x && y === data.coords.current.y) {
    const offerElement = document.createElement("img");
    offerElement.src = "../../../../assets/images/offer.jpg";
    offerElement.width = 50;
    cellElement.append(offerElement);
  }

  if (
    data.status === OFFER_STATUSES.caught &&
    x === data.coords.caught.x &&
    y === data.coords.caught.y
  ) {
    const offerElement = document.createElement("img");
    offerElement.src = "../../../../assets/images/caught.jpg";
    offerElement.width = 50;
    cellElement.append(offerElement);
  }

  if (
    data.status === OFFER_STATUSES.miss &&
    x === data.coords.missed.x &&
    y === data.coords.missed.y
  ) {
    const offerElement = document.createElement("img");
    offerElement.src = "../../../../assets/images/miss.jpg";
    offerElement.width = 50;
    cellElement.append(offerElement);
  }

  return cellElement;
}

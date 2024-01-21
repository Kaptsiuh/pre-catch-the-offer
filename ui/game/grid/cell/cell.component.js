import {
  OFFER_STATUSES,
  catchOffer,
  data,
  subscribe,
} from "../../../../data/game.data.js";

export function Cell(x, y) {
  subscribe(() => {
    update(x, y, cellElement);
  });

  const cellElement = document.createElement("div");
  cellElement.style =
    "font-size: 30px; border: 1px solid #000; padding: 10px; gap: 10px; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center";

  return cellElement;
}

function update(x, y, cellElement) {
  cellElement.innerHTML = "";
  if (x === data.coords.current.x && y === data.coords.current.y) {
    const offerElement = document.createElement("img");
    offerElement.src = "../../../../assets/images/offer.jpg";
    offerElement.style = "width: 100%";
    offerElement.addEventListener("click", catchOffer);
    cellElement.append(offerElement);
  }

  if (
    data.status === OFFER_STATUSES.caught &&
    x === data.coords.previous.x &&
    y === data.coords.previous.y
  ) {
    const offerElement = document.createElement("img");
    offerElement.src = "../../../../assets/images/caught.jpg";
    offerElement.style = "width: 100%";
    cellElement.append(offerElement);
  }

  if (
    data.status === OFFER_STATUSES.miss &&
    x === data.coords.previous.x &&
    y === data.coords.previous.y
  ) {
    const offerElement = document.createElement("img");
    offerElement.src = "../../../../assets/images/miss.jpg";
    offerElement.style = "width: 100%";
    cellElement.append(offerElement);
  }
}

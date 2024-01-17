import { Game } from "./ui/game/game.component.js";

const gameElement = Game();

function renderApp() {
  document.body.innerHTML = "";
  document.body.append(gameElement);
}

renderApp();

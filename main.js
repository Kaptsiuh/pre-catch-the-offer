import { Game } from "./ui/game/game.component.js";
import { subscribe } from "./data/game.data.js";
import { Player } from "./sound/player.js";

setTimeout(() => {
  Player();
}, 10);

// subscribe(renderApp);

function renderApp() {
  document.body.innerHTML = "";
  const gameElement = Game();
  document.body.append(gameElement);
}

renderApp();

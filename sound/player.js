import { OFFER_STATUSES, data, subscribe } from "../data/game.data.js";

export function Player() {
  const catchAudio = new Audio();
  catchAudio.src =
    "https://www.myinstants.com/media/sounds/thats-amazing_i8ctuCt.mp3";

  let prevStatus = data.status;

  subscribe(() => {
    if (
      data.status === OFFER_STATUSES.caught &&
      prevStatus !== OFFER_STATUSES.caught
    ) {
      catchAudio.currentTime = 0;
      catchAudio.play();
    }

    prevStatus = data.status;
  });
}

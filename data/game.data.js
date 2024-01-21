export const OFFER_STATUSES = {
  default: "default",
  miss: "miss",
  caught: "caught",
};

export const data = {
  settings: {
    rowsCount: 3,
    columnsCount: 3,
    pointsToWin: 10,
    maximumMisses: 3,
    decreaseDeltaInMs: 100,
    isMuted: true,
  },
  status: OFFER_STATUSES.default,
  coords: {
    current: {
      x: 0,
      y: 0,
    },
    previous: {
      x: 1,
      y: 2,
    },
  },
  score: {
    missCount: 0,
    caughtCount: 0,
  },
};

let subscribers = [];

function notify() {
  subscribers.forEach((subscriber) => subscriber());
}

export function subscribe(newSubscriber) {
  subscribers.push(newSubscriber);
}

let stepIntervalId;

function runStepInterval() {
  stepIntervalId = setInterval(() => {
    missOffer();
    moveOfferToRandomPosition(true);
    notify();
  }, 1500);
}

runStepInterval();

function moveOfferToRandomPosition() {
  let newX = null;
  let newY = null;

  do {
    newX = getRandom(data.settings.columnsCount - 1);
    newY = getRandom(data.settings.rowsCount - 1);
  } while (data.coords.current.x === newX && data.coords.current.y === newY);

  data.coords.current.x = newX;
  data.coords.current.y = newY;
}

function missOffer() {
  data.status = OFFER_STATUSES.miss;
  data.score.missCount++;

  data.coords.previous = { ...data.coords.current };
  setTimeout(() => {
    data.status = OFFER_STATUSES.default;
    notify();
  }, 500);
}

export function catchOffer() {
  data.status = OFFER_STATUSES.caught;
  data.score.caughtCount++;
  data.coords.previous = { ...data.coords.current };
  setTimeout(() => {
    data.status = OFFER_STATUSES.default;
    notify();
  }, 500);

  moveOfferToRandomPosition();
  notify();
  clearInterval(stepIntervalId);
  runStepInterval();
}

function getRandom(x) {
  return Math.floor(Math.random() * (x + 1));
}

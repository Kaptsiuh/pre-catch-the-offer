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
    caught: {
      x: 1,
      y: 1,
    },
    missed: {
      x: 2,
      y: 2,
    },
  },
  score: {
    missCount: 1,
    caughtCount: 2,
  },
};

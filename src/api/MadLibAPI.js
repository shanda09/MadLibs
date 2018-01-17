const adjectives = [
  {
    id: 0, word: "defeated"
  },
  {
    id: 1, word: "greasy"
  },
  {
    id: 2, word: "addicting"
  },
  {
    id: 3, word: "repulsive"
  },
  {
    id: 4, word: "thirsty"
  },
  {
    id: 5, word: "dangerous"
  },
  {
    id: 6, word: "wicked"
  },
  {
    id: 7, word: "filthy"
  },
  {
    id: 8, word: "prickly"
  },
  {
    id: 9, word: "puny"
  }
];

const adverbs = [
  {
    id: 0, word: "accidentally"
  },
  {
    id: 1, word: "instantly"
  },
  {
    id: 2, word: "justly"
  },
  {
    id: 3, word: "obnoxiously"
  },
  {
    id: 4, word: "unbearably"
  },
  {
    id: 5, word: "excitedly"
  },
  {
    id: 6, word: "blissfully"
  },
  {
    id: 7, word: "fondly"
  },
  {
    id: 8, word: "neatly"
  },
  {
    id: 9, word: "supposedly"
  }
];

const getAdj = () => {
  let x = Math.random() * (adjectives.length)
  return adjectives[Math.floor(x)].word;
}

const getAdv = () => {
  let x = Math.random() * (adverbs.length)
  return adverbs[Math.floor(x)].word;
}

export default {
  getAdj,
  getAdv
};

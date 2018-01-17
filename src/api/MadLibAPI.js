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

const nouns = [
  {
    id: 0,
    word: "racism"
  },
  {
    id: 1,
    word: "catapult"
  },
  {
    id: 2,
    word: "silence"
  },
  {
    id: 3,
    word: "The Holy Bible"
  },
  {
    id: 4,
    word: "chips"
  },
  {
    id: 5,
    word: "dog poop"
  },
  {
    id: 6,
    word: "anti-depressants"
  },
  {
    id: 7,
    word: "Bill Cosby"
  },
  {
    id: 8,
    word: "Beyonce"
  },
  {
    id: 9,
    word: "The White House"
  }
];


const verbs = [
  {
    id: 0,
    word: "attack"
  },
  {
    id: 1,
    word: "bulldoze"
  },
  {
    id: 2,
    word: "humiliate"
  },
  {
    id: 3,
    word: "harass"
  },
  {
    id: 4,
    word: "empty"
  },
  {
    id: 5,
    word: "bushwhack"
  },
  {
    id: 6,
    word: "tyrannize"
  },
  {
    id: 7,
    word: "medicate"
  },
  {
    id: 8,
    word: "bury"
  },
  {
    id: 9,
    word: "trap"
  }
];




const getAllNoun = () => nouns;
const getOneNoun = id => nouns.find(noun => noun.id === id);

const mapNoun = () => {
  return nouns.map(noun => noun.word)
}

const getVerbs = () => {
  let x = Math.random() * (verbs.length)
  return verbs[Math.floor(x)].word;
}
const getNouns = () => {
  let x = Math.random() * (nouns.length)
  return nouns[Math.floor(x)].word;
}
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
  getAdv,
  getAllNoun,
  getNouns,
  getVerbs,
};

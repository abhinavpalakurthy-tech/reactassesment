export const COMMENTS = [
  {
    id: "dbm001",
    author: "tennisgirrrl1987",
    date: 1560743340000,
    body: "lyek omg. my boyfrenz cool.",
    moddy_hates: true
  },
  {
    id: "dbm002",
    author: "scooterz-r-rad",
    date: 1568654537446,
    body: "gnarly wipeout grandma!",
    moddy_hates: false
  },
  {
    id: "dbm003",
    author: "iGOTTAgoofydog",
    date: 1568906740942,
    body: "I got an A+ in being awesome yesterday",
    moddy_hates: false
  },
  {
    id: "dbm004",
    author: "junebug2002",
    date: 1560743340000,
    body: "My girlfriend's dog is really messy",
    moddy_hates: false
  },
  {
    id: "dbm005",
    author: "Ihazhardlyfe",
    date: 1560743340000,
    body: "I have such a hard lyfe, I live in beverly hills.",
    moddy_hates: true
  },
  {
    id: "dbm006",
    author: "brotownthrowdown",
    date: 1568906740942,
    body: "riding the bus to partytown!!!",
    moddy_hates: true
  },
  {
    id: "dbm007",
    author: "belaKissFan72",
    date: 1568654537446,
    body: "Ke$ha tho",
    moddy_hates: true
  },
  {
    id: "dbm008",
    author: "donkey1",
    date: 1568906839598,
    body: "aol is soo fun!",
    moddy_hates: false
  },
  {
    id: "dbm009",
    author: "enlightedBro",
    date: 1568906740942,
    body: "Im going vegan",
    moddy_hates: true
  },
  {
    id: "dbm010",
    author: "blackmetal4evaaaaaa",
    date: 1568906740942,
    body: "White belts are in?",
    moddy_hates: false
  },
  {
    id: "dbm011",
    author: "datPawnFeelin",
    date: 1568906973036,
    body: "the chess tournament was such a blast",
    moddy_hates: false
  },
  {
    id: "dbm012",
    author: "pokemonzRad",
    date: 1560743340000,
    body: "I finally caught them all!",
    moddy_hates: true
  },
  {
    id: "dbm013",
    author: "karateChopMama",
    date: 1568906740942,
    body: "Ive got the power now! The power to..... eat lunch?",
    moddy_hates: true
  },
  {
    id: "dbm014",
    author: "theRedRanger",
    date: 1568654537446,
    body: "tmnt isn not very enjoyable",
    moddy_hates: true
  },
  {
    id: "dbm015",
    author: "shelovesmee_NOT",
    date: 1559361600000,
    body: "I want to be a football player",
    "sir_moddy_hates": false
  },
  {
    id: "dbm016",
    author: "squirrels46",
    date: 1568906911925,
    body: "I dont believe in saxophonez, theyre faker than a flat earthh!!1",
    moddy_hates: true
  },
  {
    id: "dbm017",
    author: "badGrasshopper",
    date: 1568906740942,
    body: "im grounded! and all I did was the laundry!",
    moddy_hates: false
  },
  {
    id: "dbm018",
    author: "mylifeisnotoverat11",
    date: 1568654537446,
    body: "he brokeup with me!",
    moddy_hates: false
  },
  {
    id: "dbm019",
    author: "chillhipster99",
    date: 1560743340000,
    body: "all your base bro, all your base.",
    moddy_hates: false
  },
  {
    id: "dbm020",
    author: "xNeverLoveAgainx",
    date: 1568654537446,
    body: "will there be a second chance for me to finally love again?",
    moddy_hates: true
  }
]

const getActiveIds = () => {
  const active_ids = []
  COMMENTS.forEach(ele => {
      active_ids.push(ele.id)
  })
  return active_ids
}

export const ACTIVE_IDS = getActiveIds();


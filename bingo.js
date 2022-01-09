const cardGrid = document.getElementById('cardGrid');

const Quotes = [
  '"Fucking LOSERS"',
  '"Sound??"',
  '"controller player"',
  '"$200 headphones!"',
  '"BOT"',
  '"degen"',
  '"SHEEEEEEESH"',
  '"retards"',
  '"brotheR"',
  '"where are my shots"',
  '"fuck my ass!"',
  '"please climb"',
  `"i'm aping"`,
  'Gets a beer',
  'clutches a fight (last alive)',
  'rezzes a teammate',
  "Heero's mic deafens everybody in a fight",
];
let board = [];
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const randomArray = (array) => {
  while (board.length < 9) {
    let rand = array[Math.floor(Math.random() * array.length)];
    if (board.includes(rand)) {
      continue;
    } else {
      board.push(rand);
    }
  }
  console.log(board);
  return board;
};

const makeCard = (quote) => {
  const toggleSelected = () => {
    div.classList.toggle('selected');
  };
  const div = document.createElement('div');
  div.className = 'cardDiv';
  div.addEventListener('click', toggleSelected);

  const p = document.createElement('p');
  p.className = 'quote';
  p.textContent = quote;

  const tsad = document.createElement('img');
  tsad.className = 'icon';
  tsad.src = './tom.png';

  cardGrid.appendChild(div);
  div.appendChild(p);
  div.appendChild(tsad);
};

const clearGrid = () => {
  board = [];
  cardGrid.innerHTML = '';
};

const makeGrid = () => {
  clearGrid();
  const newQuotes = randomArray(Quotes);
  for (const quote of newQuotes) {
    makeCard(quote);
  }
};

const button = document.querySelector('.btn');
button.addEventListener('click', makeGrid);

const cardGrid = document.getElementById('cardGrid');

const Quotes = [
  'fucking losers',
  'no sound',
  'controller player',
  '$200 headphones',
  'bot',
  'degen',
  'sheeeeeeeeeesh',
  'retards',
  'where are my shots',
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

console.log(Quotes);

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
  cardGrid.innerHTML = '';
};

const makeGrid = () => {
  clearGrid();
  const newQuotes = shuffle(Quotes);
  for (const quote of newQuotes) {
    makeCard(quote);
  }
};
const button = document.querySelector('.btn');
button.addEventListener('click', makeGrid);

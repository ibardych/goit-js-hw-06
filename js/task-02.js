const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listitems = [];

for(const ingredient of ingredients) {
  const listitem = document.createElement('li');
  listitem.textContent = ingredient;
  listitem.classList.add('item');
  listitems.push(listitem);
}

const list = document.querySelector('ul#ingredients');
listitems.map(listitem => list.append(listitem));
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
list.innerHTML = ingredients.reduce((items, item )=> items += `<li class="item">${item}</li>`, '');
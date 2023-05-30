const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
// console.log(list)
const itemEl = document.createElement('li');
itemEl.textContent = "Potatoes";
itemEl.classList.add('item');
// console.dir(itemEl);
const itemEl1 = document.createElement('li');
itemEl1.textContent = "Mushrooms";
itemEl1.classList.add('item');

const itemEl2 = document.createElement('li');
itemEl2.textContent = "Potatoes";
itemEl2.classList.add('item');

const itemEl3= document.createElement('li');
itemEl3.textContent = "Garlic";
itemEl3.classList.add('item');

const itemEl4 = document.createElement('li');
itemEl4.textContent = "Tomatos";
itemEl4.classList.add('item');

const itemEl5 = document.createElement('li');
itemEl5.textContent = "Herbs";
itemEl5.classList.add('item');

const itemEl6 = document.createElement('li');
itemEl6.textContent = "Condiments";
itemEl6.classList.add('item');

const ingredientsList = document.querySelector(".ingredients");
list.append(itemEl, itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6 );
console.dir(list.textContent)
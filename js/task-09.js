function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('button.change-color');
const color = document.querySelector('span.color');

const changeBGColor = () => {
  const hexcolor = getRandomHexColor();
  body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
}

button.addEventListener('click', changeBGColor);
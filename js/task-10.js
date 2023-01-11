function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type=number]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = (amount, nextnumber = 0) => {

  if(nextnumber < amount) {

    const box = document.createElement('div');
    const boxSize = 30 + 10 * nextnumber + 'px';

    boxesContainer.append(box);

    setTimeout(function() {
      box.textContent = 30 + 10 * nextnumber;
      box.style.fontSize = 14 + nextnumber * 3 + 'px';
      box.style.color = getRandomHexColor();
      box.style.width = boxSize;
      box.style.height = boxSize;
      const hexColor = getRandomHexColor();
      box.style.backgroundColor = hexColor;
      box.style.boxShadow = `0 0 ${10 * nextnumber + 10}px 2px ${hexColor}`;
      nextnumber++;
      createBoxes(amount, nextnumber);
    }, 250);

  }
}

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  createBoxes(inputNumber.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
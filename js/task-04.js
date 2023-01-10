let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action=decrement]');
const btnIncrement = document.querySelector('button[data-action=increment]');
const value = document.querySelector('#value');

const decreaseValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
}

const increaseValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
}

btnDecrement.addEventListener("click", decreaseValue);
btnIncrement.addEventListener("click", increaseValue);
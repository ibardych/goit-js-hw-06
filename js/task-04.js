const btnDecrement = document.querySelector('button[data-action=decrement]');
const btnIncrement = document.querySelector('button[data-action=increment]');
const counterValue = document.querySelector('#value');

const decreaseValue = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

const increaseValue = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

btnDecrement.addEventListener("click", decreaseValue);
btnIncrement.addEventListener("click", increaseValue);
const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');

inputName.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  outputName.textContent = value !== '' ? value : "Anonymous";
});
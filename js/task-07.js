const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

const updateFontSize = () => {
  text.style.fontSize = input.value + 'px';
}

updateFontSize();

input.addEventListener('input', updateFontSize);
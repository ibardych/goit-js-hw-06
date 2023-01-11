const input = document.querySelector('#validation-input');

const inputValidation = () => {
  const value = input.value;
  const length = input.dataset.length;
  
  if(value.length > length) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }else{
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}

input.addEventListener("blur", inputValidation);
const form = document.querySelector('form.login-form');

const submitForm = (event) => {
  event.preventDefault();

  const formdata = {};
  
  const {
    elements: { email, password }
  } = event.currentTarget;

  if(email.value === '' || password.value === '')
    alert('Всі поля повинні бути заповнені!');
  
  if(email.value !== '' && password.value !== '') {
    formdata.email = email.value;
    formdata.password = password.value;
    
    console.log(formdata);
    form.reset();
  }
}

form.addEventListener('submit', submitForm);
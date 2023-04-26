// Capture form variables
const form = document.getElementById('contact-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Add submit event listener on form
form.addEventListener('submit', event => {
  // Prevent form from submitting
  event.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputWrapper = element.parentElement;
  const errorMessage = inputWrapper.querySelector('.error__text');

  errorMessage.innerText = message;
  inputWrapper.classList.add('error');
  inputWrapper.classList.remove('success');
}

const setSuccess = element => {
  const inputWrapper = element.parentElement;
  const errorMessage = inputWrapper.querySelector('.error__text');

  errorMessage.innerText = '';
  inputWrapper.classList.add('success');
  inputWrapper.classList.remove('error');
}

const isValidEmailAddress = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());  
}

const validateInputs = () => {

  // 1. capture values of each input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // 2. Check that required inputs have a value
  //   2a. If inputs do NOT have a value, call setError() function
  //   2b. If inputs DO have a value, call setSuccess() function
  if (usernameValue === '') {
    setError(username, 'Name is required');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmailAddress(emailValue)) {
    setError(email, 'Sorry, invalid format here')
  } else {
    setSuccess(email);
  }

  if (messageValue === '') {
    setError(message, 'A message is required');
  } else {
    setSuccess(message);
  }

}
// import throttle from 'lodash.throttle';
const _ = require('lodash');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener(
  'input',
  _.throttle(() => {
    const { email, message } = form.elements;
    const userFeedback = {
      email: `${email.value}`,
      message: `${message.value}`,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));
  }, 1000)
);

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
input.value = savedData?.email ? savedData.email : '';
textarea.value = savedData?.message ? savedData.message : '';

form.addEventListener('submit', event => {
  localStorage.clear();
  event.currentTarget.reset();
});

// const saveLocalStorage = event => {
//   event.preventDefault();
//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   const userFeedback = {
//     email: `${email.value}`,
//     message: `${message.value}`,
//   };

//   localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));
// };

// form.addEventListener('input', throttle(saveLocalStorage, 500));

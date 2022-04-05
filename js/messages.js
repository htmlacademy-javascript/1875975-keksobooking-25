const SUCCESS = 'success';
const ERROR = 'error';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = '52px';
  alertContainer.style.right = '50%';
  alertContainer.style.transform = 'translateX(50%)';
  alertContainer.style.width = '800px';
  alertContainer.style.padding = '12px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.fontSize = '16px';
  alertContainer.style.color = '#ffffff';
  alertContainer.style.textTransform = 'uppercase';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.backgroundColor = '#ff5635';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
};

// const getSuccessMessage = () => {
//   const successMessage = successMessageTemplate.cloneNode(true);
//   document.body.append(successMessage);
//   document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//       evt.preventDefault(evt);
//       successMessage.remove();
//     }
//   });
//   document.addEventListener('click', () => successMessage.remove());
// };

// const getErrorMessage = () => {
//   const errorMessage = errorMessageTemplate.cloneNode(true);
//   document.body.append(errorMessage);
//   document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//       evt.preventDefault(evt);
//       errorMessage.remove();
//     }
//   });
//   errorMessage.querySelector('.error__button').addEventListener('click', () => errorMessage.remove());
//   document.addEventListener('click', () => errorMessage.remove());
// };

const getSendMessages = (type) => {
  const messageTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const message = messageTemplate.cloneNode(true);
  document.body.append(message);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault(evt);
      message.remove();
    }
  });
  document.addEventListener('click', () => message.remove());
  if (type === ERROR) {
    message.querySelector('.error__button').addEventListener('click', () => message.remove());
  }
};

export {showAlert, getSendMessages, SUCCESS, ERROR};

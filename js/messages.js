import {isEscapeKey} from './util.js';

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

const getSendMessages = (type) => {
  const messageTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const message = messageTemplate.cloneNode(true);
  document.body.append(message);

  const onDocumentEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
      document.removeEventListener('keydown', onDocumentEscKeydown);
    }
  };

  const onMessageClick = () => {
    message.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  };

  document.addEventListener('keydown', onDocumentEscKeydown);
  message.addEventListener('click', onMessageClick);
};

export {showAlert, getSendMessages, SUCCESS, ERROR};

const description = document.querySelector('[data-description]');
const button = document.querySelector('[data-description-toggle-button]');

const toggleButtonText = () => {
  if (button) {
    if (description.classList.contains('is-open')) {
      button.textContent = 'свернуть';
    } else {
      button.textContent = 'подробнее';
    }
  }
};

const toggleClassIsOpen = () => {
  if (description) {
    description.classList.toggle('is-open');
    toggleButtonText();
  }
};

const addClickEventListenerOnButton = () => {
  if (button) {
    button.addEventListener('click', toggleClassIsOpen);
  }
};

export {addClickEventListenerOnButton};

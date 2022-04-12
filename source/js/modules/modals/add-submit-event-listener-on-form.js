const forms = document.querySelectorAll('[data-form]');
const name = document.querySelector('[data-name]');
const phone = document.querySelector('[data-phone]');
const question = document.querySelector('[data-question]');
const nameModal = document.querySelector('[data-name-modal]');
const phoneModal = document.querySelector('[data-phone-modal]');
const questionModal = document.querySelector('[data-question-modal]');

let isStorageSupport = true;
let nameData = '';
let phoneData = localStorage.getItem('phone');
let nameDataModal = localStorage.getItem('name-modal');
let phoneDataModal = localStorage.getItem('phone-modal');
let questionData = localStorage.getItem('question');
let questionDataModal = localStorage.getItem('question-modal');

if (name) {
  try {
    nameData = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }
}

const addDataToLocalStorage = () => {
  if (isStorageSupport) {
    if (name) {
      localStorage.setItem('name', name.value);
    }

    if (phone) {
      localStorage.setItem('phone', phone.value);
    }

    if (question) {
      localStorage.setItem('question', question.value);
    }

    if (nameModal) {
      localStorage.setItem('name-modal', nameModal.value);
    }

    if (phoneModal) {
      localStorage.setItem('phone-modal', phoneModal.value);
    }

    if (questionModal) {
      localStorage.setItem('question-modal', questionModal.value);
    }
  }
};

const addSubmitEventListenerOnForm = () => {
  if (forms.length) {
    forms.forEach((form) => {
      form.addEventListener('submit', addDataToLocalStorage);
    });
  }
};

const addDataToInput = (input, data) => {
  if (input) {
    if (data) {
      input.value = data;
    }
  }
};

const addDataToInputs = () => {
  addDataToInput(name, nameData);
  addDataToInput(phone, phoneData);
  addDataToInput(question, questionData);
  addDataToInput(nameModal, nameDataModal);
  addDataToInput(phoneModal, phoneDataModal);
  addDataToInput(questionModal, questionDataModal);
};

export {addSubmitEventListenerOnForm, addDataToInputs};

const phones = document.querySelectorAll('[data-phone-mask]');

const FIRSTSYMBOL = '+7(';

const addMaskOnPhoneInput = (input) => {
  const inputPhone = input.target;
  const inputNumbersValue = inputPhone.value.replace(/\D/g, '');
  let formattedInputValue = '';

  if (!inputNumbersValue) {
    input.value = '';
  }

  formattedInputValue = inputPhone.value = FIRSTSYMBOL;

  if (inputNumbersValue.length > 1) {
    formattedInputValue += inputNumbersValue.substring(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
  }

  inputPhone.value = formattedInputValue;
};

const cleanPhoneInput = (input) => {
  const inputPhone = input.target;

  if (inputPhone.value.length === 3) {
    inputPhone.value = '';
  }
};


const addEventsOnPhoneInputs = () => {
  if (phones.length) {
    phones.forEach((phone) => {
      phone.addEventListener('input', addMaskOnPhoneInput);
      phone.addEventListener('blur', cleanPhoneInput);
    });
  }
};

export {addEventsOnPhoneInputs};

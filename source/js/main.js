import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {removeClassNoJsFromElements} from './modules/modals/remove-class-no-js';
import {addSubmitEventListenerOnForm, addDataToInputs} from './modules/modals/add-submit-event-listener-on-form';
import {addClickEventListenerOnButton} from './modules/modals/add-event-on-description-button';
import {addEventOnAccordion} from './modules/modals/add-event-on-accordion';
import {addEventsOnPhoneInputs} from './modules/modals/add-mask-on-phone-inputs';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  removeClassNoJsFromElements();

  window.addEventListener('load', () => {
    initModals();
    addSubmitEventListenerOnForm();
    addDataToInputs();
    addClickEventListenerOnButton();
    addEventOnAccordion();
    addEventsOnPhoneInputs();
  });
});

const accordionTabs = document.querySelectorAll('[data-accordion-tab]');
const breakpointMobile = window.matchMedia('(max-width:767px)');

const addClassIsOpen = (target) => {
  target.classList.add('is-open');
};

const removeClassIsOpen = (target) => {
  if (target.classList.contains('is-open')) {
    target.classList.remove('is-open');
  }
};

const closeAccordionTabs = () => {
  if (accordionTabs.length) {
    accordionTabs.forEach((tab) => {
      removeClassIsOpen(tab);
    });
  }
};

const addEventClickOnAccordion = () => {
  if (accordionTabs.length) {
    accordionTabs.forEach((tab) => {
      const button = tab.querySelector('[data-accordion-button]');

      if (button) {
        button.addEventListener('click', () => {
          if (tab.classList.contains('is-open')) {
            removeClassIsOpen(tab);
          } else {
            closeAccordionTabs();
            addClassIsOpen(tab);
          }
        });
      }
    });
  }
};

const addEventOnAccordion = () => {
  if (breakpointMobile.matches) {
    addEventClickOnAccordion();
  }
};

export {addEventOnAccordion};

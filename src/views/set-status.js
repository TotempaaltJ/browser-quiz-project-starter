import { clearStatusClass } from './clear-status.js';

export function setStatusClass(element, correct) {
  clearStatusClass(element);

  //We check the status of element (answer) if it is correct or not:

  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

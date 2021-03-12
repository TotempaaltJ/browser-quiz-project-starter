export function clearStatusClass(element) {
  //Each time we call this function, we clear the colors of correct and wrong answers:
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

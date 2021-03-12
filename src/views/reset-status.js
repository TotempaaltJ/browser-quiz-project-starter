export function resetState() {
  //Each time we call this function:

  //we hide all answers of previous question
  const answerButtonsElement = document.getElementById('answer-buttons');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }

  //we hide all hint links of previous question
  const hintBox = document.getElementById('hint-box');
  while (hintBox.firstChild) {
    hintBox.removeChild(hintBox.firstChild);
  }
}

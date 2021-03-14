import { quizData } from '../data.js';
import { setStatusClass } from '../views/set-status.js';
import { renderScore } from '../handlers/render-score.js';

export function selectAnswer(event) {
  const selectedButton = event.target;
  selectedButton.style.borderColor = 'gold'
  // looping through the questions list to check which question is answered with the selectedButton
  for (const question of quizData.questions) {
    if (question.text === selectedButton.dataset.question) {
      if (question.selected !== null) {
        //if some answer was clicked already
        return;
      }
      // re-assign the value of selected with the key of selectedButton
      question.selected = selectedButton.dataset.answerKey;
    }
  }

  // checking if the of selectedButton has same dataset keys (same letter a, b, c, d)
  if (selectedButton.dataset.correctKey.toLowerCase() === selectedButton.dataset.answerKey.toLowerCase()) {
    quizData.quiz.correct += 1;
  }
  quizData.quiz.answered += 1;
  renderScore();

  //Change the color and style of correct answer and wrong once
  const answerButton = document.getElementById('answer-buttons').children;
  for (const button of [...answerButton]) {
    setStatusClass(
      button,
      button.dataset.correctKey === button.dataset.answerKey
    );
  }
}

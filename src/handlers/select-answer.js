import { quizData } from '../data.js';
import { data } from '../data.js';
import { setStatusClass } from '../views/set-status.js';
import { renderScore } from '../views/render-score.js';

export function selectAnswer(event) {
  const selectedButton = event.target;

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
  if (selectedButton.dataset.correctKey === selectedButton.dataset.answerKey) {
    quizData.quiz.correct += 1;
  }
  quizData.quiz.answered += 1;
  renderScore()

  //Change the color and style of correct answer and wrong once
  const answerButton = document.getElementById('answer-buttons').children;
  for (const button of [...answerButton]) {
    setStatusClass(
      button,
      button.dataset.correctKey === button.dataset.answerKey
    );
  }

  //keep showing next button, while the current index of questions is smaller than questions' list length.
  if (data.randomQuestions.length > data.currentQuestionIndex + 1) {
    document.getElementById('next-btn').classList.remove('hide');
  } else {
    //when the current index of questions is equal to the questions' list length:
    document.getElementById('next-btn').classList.add('hide'); // hide next button
    document.getElementById('question-container').classList.add('hide'); // hide question container
    document.getElementById('hint-box').classList.add('hide'); // hide the hint tabs
    const startBtn = document.getElementById('start-btn'); // make and show restart button
    startBtn.classList.remove('hide');
    startBtn.innerText = 'Restart';
  }
}

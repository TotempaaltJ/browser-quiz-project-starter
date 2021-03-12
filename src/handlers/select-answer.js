import { setStatusClass } from '../views/set-status.js';
import { renderScore } from '../handlers/render-score.js';
import { quizData } from '../data.js';
import { data } from '../data.js';

export function selectAnswer(event) {
  const selectedButton = event.target;
  for (const question of quizData.questions) {
    if (question.text === selectedButton.dataset.question) {
      if (question.selected !== null) {
        //if some answer was clicked already
        return;
      }
      question.selected = selectedButton.dataset.answerKey;
    }
  }

  if (selectedButton.dataset.correct === selectedButton.dataset.answerKey) {
    quizData.quiz.correct += 1;
  }
  quizData.quiz.answered += 1;

    const answerButton = document.getElementById('answer-buttons').children;
  for (const button of [...answerButton]) {
    setStatusClass(button, button.dataset.correct === button.dataset.answerKey);
  }
  renderScore();

  if (data.randomQuestions.length > data.currentQuestionIndex + 1) {
    const nextButton = document.getElementById('next-btn');
    nextButton.classList.remove('hide');
  } else {
    nextButton.classList.add('hide');
    const startBtn = document.getElementById('start-btn');
    startBtn.classList.remove('hide');
    startBtn.innerText = 'Restart';
    const questionContainerElement = document.getElementById(
      'question-container'
    );
    questionContainerElement.classList.add('hide');
    const hintBox = document.getElementById('hintBox');
    hintBox.classList.add('hide');
  }
}

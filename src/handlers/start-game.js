import { data } from '../data.js';
import { quizData } from '../data.js';
import { setNextQuestion } from './set-next-question.js';
import { renderScore } from '../handlers/render-score.js';

export function startGame() {
  //In case starting the game:
  const startButton = document.getElementById('start-btn'); // hide start button
  startButton.classList.add('hide');

  const questionContainerElement = document.getElementById(
    'question-container'
  );
  questionContainerElement.classList.remove('hide'); // show question container

  //TO make sure the question will be shown in random order each time
  data.randomQuestions = quizData.questions.sort(() => Math.random() - 0.5);

  //In case we restart the game we want to reset all variables
  for (const question of quizData.questions) {
    question.selected = null;
  }
  data.currentQuestionIndex = 0;
  quizData.quiz.answered = 0;
  quizData.quiz.correct = 0;

  setNextQuestion(); // to show the question
  renderScore(); // to start showing the score
}

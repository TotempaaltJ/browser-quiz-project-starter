import { quizData } from '../data.js';

export function renderScore() {
  //Show counter of the answered questions of total number of questions list:

  const questionNumber = document.getElementById('question-number');
  questionNumber.classList.remove('hide');
  questionNumber.innerHTML = `Answered: ${quizData.quiz.answered} / ${quizData.questions.length}`;

  //Show score of the Correct answered questions of total answered questions:

  const questionCorrect = document.getElementById('question-correct');
  questionCorrect.classList.remove('hide');
  questionCorrect.innerHTML = `Correct answers:  ${quizData.quiz.correct} / ${quizData.quiz.answered}`;
}

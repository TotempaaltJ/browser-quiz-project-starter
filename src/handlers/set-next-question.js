import { data } from '../data.js';
import { resetState } from '../views/reset-status.js';
import { questionToDisplay } from '../views/render-question.js';

export function setNextQuestion() {
  //Each time we call this function:

  //we increment this variable to move through the elements of the new random questions list.
  data.currentQuestionIndex++;

  //we hide all elements of previous question
  resetState();

  //Call displayQuestion with the new current index of the questions list.
  questionToDisplay(data.randomQuestions[data.currentQuestionIndex]);
}

import { data } from '../data.js';
import { resetState } from '../views/reset-status.js';
import { questionToDisplay } from '../views/render-question.js';

export function setNextQuestion() {
  //Each time we call this function:

  //when  the questions' list length is smaller than the index of current question
  if (data.randomQuestions.length <= data.currentQuestionIndex) {
    document.getElementById('next-btn').classList.add('hide'); // hide next button
    document.getElementById('question-container').classList.add('hide'); // hide question container
    document.querySelector('a').classList.add('hide'); // hide the hint tabs
    const startBtn = document.getElementById('start-btn'); // make and show restart button
    startBtn.classList.remove('hide');
    startBtn.innerText = 'Restart';
  } else {
    document.getElementById('next-btn').classList.remove('hide'); // show next button
    //we hide all elements of previous question
    resetState();

    //Call displayQuestion with the new current index of the questions list.
    questionToDisplay(data.randomQuestions[data.currentQuestionIndex]);
  }
}

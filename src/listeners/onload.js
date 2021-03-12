import { startGame } from '../handlers/startGame.js';
import { setNextQuestion } from '../handlers/setNextQuestion.js';
import { questionToDelete } from '../handlers/delete-Question.js';
import { questionToAdd } from '../handlers/add-Question.js';

document.getElementById('start-btn').addEventListener('click', startGame);

document.getElementById('next-btn').addEventListener('click', setNextQuestion);

document
  .getElementById('delete-question')
  .addEventListener('click', questionToDelete);
document
  .getElementById('add-question')
  .addEventListener('click', questionToAdd);

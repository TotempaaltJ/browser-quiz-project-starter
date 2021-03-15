import { startGame } from '../handlers/start-game.js';
import { setNextQuestion } from '../handlers/set-next-question.js';
import { questionToDelete } from '../handlers/delete-question.js';
import { questionToAdd } from '../handlers/add-question.js';

document.getElementById('start-btn').addEventListener('click', startGame); //Start or Restart the game

document.getElementById('next-btn').addEventListener('click', setNextQuestion); //Next question

document
  .getElementById('delete-question')
  .addEventListener('click', questionToDelete); //choice to delete a question
document
  .getElementById('add-question')
  .addEventListener('click', questionToAdd); //choice to add a question

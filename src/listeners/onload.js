import { displayQuestion } from '../views/questions-list.js';
import { startGame } from '../handlers/startGame.js';
import { setNextQuestion } from '../handlers/setNextQuestion.js';
import { data} from '../data.js';

window.addEventListener('DomContentLoaded', displayQuestion);

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-btn').addEventListener('click', () => {
  data.currentQuestionIndex++;
  setNextQuestion();
});

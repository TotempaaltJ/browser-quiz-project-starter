import { renderQuestions } from '../handlers/render-questions.js';
import { createQuestionList } from '../views/questions-list.js';
import { displayQuestion } from '../views/questions-list.js';
import { renderScore } from '../handlers/render-score.js';
import { startGame } from '../handlers/startGame.js';
import { setNextQuestion } from '../handlers/setNextQuestion.js';
import { quizData } from '../data.js';
import { addQuestion } from '../handlers/add-question.js';

window.addEventListener('DomContentLoaded', displayQuestion);

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-btn').addEventListener('click', setNextQuestion);

document.getElementById('addquestion').addEventListener('click', addQuestion);
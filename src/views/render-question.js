import { data } from '../data.js';
import { selectAnswer } from '../handlers/select-answer.js';

export function questionToDisplay(question) {
  //Adding the text of each question
  const questionText = document.getElementById('question');
  questionText.innerHTML = question.text;

  //Adding the answers of each question:
  const answers = question.answers;
  for (const [key, value] of Object.entries(answers)) {
    const button = document.createElement('button'); // Creating the button of each answer
    button.classList.add('btn');
    button.innerText = value; // add the text of answer
    button.dataset.answerKey = key; // add the key of answer : a, b, c, d
    button.dataset.correctKey = question.correct; // add the key of correct answer
    button.dataset.question = question.text; // add the question text to use it in the select answer function

    button.addEventListener('click', selectAnswer);
    const answerButtonsElement = document.getElementById('answer-buttons');
    answerButtonsElement.appendChild(button);
  }

  //Adding the link of resources of each question to the get hint part
  const hintBox = document.getElementById('hint-box');
  hintBox.classList.remove('hide');
  for (const link of question.links) {
    const href = link.href; // get the link of resource of each question
    const hint = document.createElement('a');
    hint.innerHTML = 'Source';
    hint.href = href; 
    hint.target = '_blank'; 
    hintBox.appendChild(hint);
  }

  //Adding the help tools od add and delete questions:
  document.getElementById('add-question').innerText =
    'Click to add a new question';
  document.getElementById('delete-question').innerText =
    'Click to delete a question';

  //we increment this variable to move through the new random questions list.
  data.currentQuestionIndex++;
}

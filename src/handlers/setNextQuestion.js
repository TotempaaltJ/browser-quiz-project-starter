import { data} from '../data.js';
import { displayQuestion } from "../views/questions-list.js"
import { resetState } from '../handlers/reset.js';

export function setNextQuestion() {
    data.currentQuestionIndex++;
    resetState();
    displayQuestion(data.randomQuestions[data.currentQuestionIndex]);
}

import { quizData } from '../data.js';

export function questionToDelete() {
  //Let user choose which question to delete
  const deleteTheQuestion = window.prompt(
    'Enter the question you want to delete!'
  );
  //filter the questions list ad removing only the deleted question:
  quizData.questions = quizData.questions.filter(
    (data) => data.text != deleteTheQuestion
  );
}

import { quizData } from '../data.js';

export function questionToDelete() {
  const deleteTheQuestion = window.prompt(
    'Enter the question you want to delete!'
  );
  quizData.questions = quizData.questions.filter(
    (data) => data.text != deleteTheQuestion
  );
}

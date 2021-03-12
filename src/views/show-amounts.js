export function createCountsAnswered(data) {
  return `Answered: ${data.quiz.answered} / ${data.questions.length} `;
}
export function createCountsCorrect(data) {
  return `Correct answers:  ${data.quiz.correct} / ${data.quiz.answered}`;
}

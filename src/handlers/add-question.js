import { quizData } from '../data.js';

export function questionToAdd() {
  //Let user add full question : text, answers , correct answer, resource materials
  const newQuestion = window.prompt('Enter the question here!');
  const firstAnswer = window.prompt('Enter first answer!');
  const secondAnswer = window.prompt('Enter second answer!');
  const thirdAnswer = window.prompt('Enter third answer!');
  const fourthAnswer = window.prompt('Enter fourth answer!');
  const correctAnswer = window.prompt(
    'Enter a, b, c or d for the correct answer'
  );
  const linkToMaterials = window.prompt(
    'Please provide a link for further study'
  );
  //set the user inputs in an object structure:
  const wholeQuestion = {
    text: `${newQuestion}`,
    answers: {
      a: `${firstAnswer}`,
      b: `${secondAnswer}`,
      c: `${thirdAnswer}`,
      d: `${fourthAnswer}`,
    },
    correct: `${correctAnswer.toLowerCase()}`,
    selected: null,
    links: [
      {
        text: 'javascript.info',
        href: `${linkToMaterials}`,
      },
    ],
  };
  //add the new question' object to the questions' list
  quizData.questions.push(wholeQuestion);
}

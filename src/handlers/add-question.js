import { quizData } from '../data.js';

export function questionToAdd(){

    const newQuestion = window.prompt('Enter the question here!');
    const firstAnswer = window.prompt('Enter first answer!');
    const secondAnswer = window.prompt('Enter second answer!');
    const thirdAnswer = window.prompt('Enter third answer!');
    const fourthAnswer = window.prompt('Enter fourth answer!');
    const correctAnswer = window.prompt('Enter a, b, c or d for the correct answer');
    const linkToMaterials = window.prompt('Please provide a link for further study');

  const wholeQuestion = {
    text: `${newQuestion}`,
    answers: {
      a: `${firstAnswer}`,
      b: `${secondAnswer}`,
      c: `${thirdAnswer}`,
      d: `${fourthAnswer}`
    },
    correct:`${correctAnswer}`,
    selected:null,
    links:[
        {
            text: 'javascript.info',
            href: `${linkToMaterials}`
        }

    ]
}
quizData.questions.push(wholeQuestion)

};


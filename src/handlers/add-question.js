import { quizData } from '../data.js';

export function addQuestion(){

    const newQuestion = window.prompt('Enter the question here!');
    const firstAnswer = window.prompt('Enter first answer!');
    const secondAnswer = window.prompt('Enter second answer!');
    const thirdAnswer = window.prompt('Enter third answer!');
    const fourthAnswer = window.prompt('Enter fourt answer!');
    const correctAnswer = window.prompt('Enter a, b, c or d for the correct answer');
    const linkToMaterials = window.prompt('Please provide a link for further study');

    console.log(`this is the new question: ${newQuestion}`);
    console.log(`this is the first answer: ${firstAnswer}`);
    console.log(`${secondAnswer}`)
    console.log(`${thirdAnswer}`)
    console.log(`${fourthAnswer}`)

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
console.log(wholeQuestion)
quizData.questions.push(wholeQuestion)
for(let i=0; i<quizData.questions.length; i++){
  console.log(quizData.questions[i].text)
}

};


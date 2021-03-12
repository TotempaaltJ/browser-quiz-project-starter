import { quizData } from '../data.js';



export function deleteQuestion(){

    const deleteTheQuestion = window.prompt('Enter the question you want to delete!');
    
    quizData.questions = quizData.questions.filter(data => data.text != deleteTheQuestion);
    console.log(quizData.questions);
    
}
    



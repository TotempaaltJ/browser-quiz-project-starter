
import { setNextQuestion } from "../handlers/setNextQuestion.js";
import { data } from '../data.js';
import { quizData } from '../data.js';
import { renderScore } from "./render-score.js";

export function startGame() {
    data.randomQuestions = quizData.questions.sort(() => Math.random() - 0.5);
    data.currentQuestionIndex = 0;
    quizData.questions.forEach(question => {
        return question.selected = null;
    })
    console.log(quizData.questions)
    const startButton = document.getElementById('start-btn')
    startButton.classList.add('hide')

    const questionContainerElement = document.getElementById('question-container')  
    questionContainerElement.classList.remove('hide')   
    
    quizData.quiz.answered = 0;
    quizData.quiz.correct = 0; 
    renderScore();
    setNextQuestion();
}
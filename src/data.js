'use strict';

export const data = {
  randomQuestions: 0,
  currentQuestionIndex: 0,
};

export const quizData = {
  quiz: {
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === null?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
  },
  // the questions in the quiz
  questions: [
    {
      text: 'How does a FOR loop start?',
      answers: {
        a: 'for (i = 0; i<= 5)',
        b: 'for i = 1 to 5',
        c: 'for (i = 0; i<= 5; i++)',
        d: 'for (i <= 5 ; i++)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS',
        },
      ],
    },
    {
      text: 'The return type of getElementsByClassName() is..',
      answers: {
        a: 'DOM',
        b: 'Document',
        c: 'Node',
        d: 'NodeList',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://www.examveda.com/javascript/practice-mcq-question-on-document-object-model-and-event-handling/?page=10',
        },
      ],
    },
    {
      text: 'Which one of the following is correct?',
      answers: {
        a: 'i =+ 1',
        b: 'i += 1',
        c: 'i = i++1',
        d: '+i+',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3docs.com/quiz/javascript-basic',
        },
      ],
    },
    {
      text: 'Which of the following are examples of closures?',
      answers: {
        a: 'Objects',
        b: 'Variables',
        c: 'Functions',
        d: 'All of the mentioned',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://www.examveda.com/javascript/practice-mcq-question-on-document-object-model-and-event-handling/?page=10',
        },
      ],
    },
    {
      text: 'Inside which element do you put JavaScript?',
      answers: {
        a: '<script>',
        b: '<section>',
        c: '<span>',
        d: '<code>',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3docs.com/quiz/javascript-basic',
        },
      ],
    },
    {
      text: 'The function that calls another function after a time interval?',
      answers: {
        a: 'setTimeout()',
        b: 'setTime()',
        c: 'callAfter()',
        d: 'None of the mentioned',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://study2online.com/javascript/animation/english/1/',
        },
      ],
    },
    {
      text: 'Which array method sorts the elements of an array?',
      answers: {
        a: 'sort()',
        b: 'changeOrder(order)',
        c: 'order()',
        d: 'None of the above methods',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3docs.com/quiz/javascript-basic',
        },
      ],
    },
    {
      text: 'Which of the following is NOT JavaScript Data Types?',
      answers: {
        a: 'String',
        b: 'Number',
        c: 'Boolean',
        d: 'Float',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions',
        },
      ],
    },
    {
      text: 'Which of them is not the looping structures in JavaScript?',
      answers: {
        a: 'for',
        b: 'forwhich',
        c: 'while',
        d: 'dowhile',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions-1',
        },
      ],
    },
    {
      text:
        'The if statement for executing some code if "i" is NOT equal to 5 is:',
      answers: {
        a: 'if i <> 5',
        b: 'if (i != 5)',
        c: 'if (i => 5)',
        d: 'if i =! 5 then',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS',
        },
      ],
    },
  ],
};

const quizData = {
  title: "Quize app Application"
};

const questions = [
  {
    text: "What is the capital of France?",
    type: "mc",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false }
    ]
  },
  {
    text: "Who wrote 'Romeo and Juliet'?",
    type: "mc",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    text: "What is the largest planet in our solar system?",
    type: "mc",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    text: "In which year did World War II end?",
    type: "mc",
    answers: [
      { text: "1945", correct: true },
      { text: "1939", correct: false },
      { text: "1941", correct: false },
      { text: "1950", correct: false }
    ]
  },
  {
    text: "What is the capital of Japan?",
    type: "mc",
    answers: [
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    text: "Who painted the Mona Lisa?",
    type: "mc",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    text: "What is the largest mammal in the world?",
    type: "mc",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    text: "Who is known as the 'Father of Computer Science'?",
    type: "mc",
    answers: [
      { text: "Alan Turing", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Mark Zuckerberg", correct: false }
    ]
  },
  {
    text: "What is the currency of Australia?",
    type: "mc",
    answers: [
      { text: "Euro", correct: false },
      { text: "Dollar", correct: true },
      { text: "Pound", correct: false },
      { text: "Yen", correct: false }
    ]
  },
  {
    text: "Which planet is known as the 'Red Planet'?",
    type: "mc",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    text: "Who wrote 'To Kill a Mockingbird'?",
    type: "mc",
    answers: [
      { text: "J.K. Rowling", correct: false },
      { text: "Harper Lee", correct: true },
      { text: "George Orwell", correct: false },
      { text: "Ernest Hemingway", correct: false }
    ]
  },
  {
    text: "What is the longest river in the world?",
    type: "mc",
    answers: [
      { text: "Amazon River", correct: true },
      { text: "Nile River", correct: false },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false }
    ]
  }
];
module.exports = { quizData, questions };

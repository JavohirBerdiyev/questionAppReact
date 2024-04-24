// App.js
import React, { useState } from 'react';
import './App.css';
import { question } from './moke/data';
import QuestionList from './components/QuestionList';
import Question from './components/Question';

const App = () => {
  const [questions, setQuestions] = useState(question);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [buttonColors, setButtonColor] = useState("");
  const [activeButtonColors, setActiveButtonColor] = useState("blue");

  const handleQuestionSelect = (index) => {
    setCurrentQuestion(index);
    setActiveButtonColor("blue")
  }

  const handeOptionSelect = (option) => {
    if(questions[currentQuestion].answered) return
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const isCorrect = option === correctAnswer;

    setScore(prevScore => prevScore + (isCorrect ? 1 : 0));

    setButtonColor(prevColors => {
      const newColors = [...prevColors];
      newColors[currentQuestion] = isCorrect ? "green" : "red"
      return newColors
    });

    const updatedQuestion = [...questions];
    updatedQuestion[currentQuestion] = {
      ...updatedQuestion[currentQuestion],
      selectOption: option,
      answered: true,
    }

    setQuestions(updatedQuestion)

    setTimeout(() => {
      setCurrentQuestion(prevQuestion => {
        const nextQuestion = prevQuestion + 1;
        if(nextQuestion < questions.length) {
          return nextQuestion
        } else {
          return prevQuestion
        }
      })
    }, 2000)
 
  }

  return (
    <div className="app">
      <h1>Avto Questions</h1>
      <p>score: {score}/{questions.length}</p>
      <QuestionList
        questions={questions}
        currentQuestion={currentQuestion}
        handleQuestionSelect={handleQuestionSelect}
        buttonColors={buttonColors}
        activeButtonColors={activeButtonColors}
      />
      <Question
        question={questions[currentQuestion]}
        handeOptionSelect={handeOptionSelect}
       />
    </div>
  );
};

export default App;

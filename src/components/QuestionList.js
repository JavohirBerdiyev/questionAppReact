import React from 'react'

function QuestionList({questions, handleQuestionSelect, currentQuestion, buttonColors}) {
  return (
    <div className='question-list'>
      {questions.map((_, index) => (
        <button 
          key={index}
          className={index === currentQuestion ? "active": ""}
          style={{backgroundColor: buttonColors[index]}}
          onClick={() => handleQuestionSelect(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default QuestionList
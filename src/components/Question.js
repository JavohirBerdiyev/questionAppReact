import React from 'react'

function Question({ question: item, handeOptionSelect }) {

  console.log();

  return (
    <div className='items'>
      <div>
        <img src={item.img} alt="img" />
      </div>
      <div>
        <h2>{item.qustion}</h2>
        <div className='options'>
          {item.option.map((option, index)=> (
            <button key={index} className={item.selectOption === option ? (option === item.correctAnswer ? "correct" : "incorrect"): "" } onClick={() => handeOptionSelect(option, index)} > {option} </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Question
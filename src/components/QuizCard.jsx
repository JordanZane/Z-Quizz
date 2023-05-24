import React from 'react';

const QuizCard = ({ quiz }) => {
  const allAnswers = [quiz.correct_answer, ...quiz.incorrect_answers];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  const handleAnswerClick = (answer) => {
    if (answer === quiz.correct_answer) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return (
    <div className="quiz-content">
      <p>{quiz.question}</p>
      {shuffledAnswers.map((answer, index) => (
        <button onClick={() => handleAnswerClick(answer)} key={index}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuizCard;

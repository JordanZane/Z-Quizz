import React from 'react';

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-content">
      <p>{quiz.question}</p>
    </div>
  );
};

export default QuizCard;

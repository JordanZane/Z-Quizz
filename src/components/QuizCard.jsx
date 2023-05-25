import React, { useState } from 'react';

const QuizCard = ({ quiz, isActive, onNextQuestion }) => {
  const allAnswers = [quiz.correct_answer, ...quiz.incorrect_answers];
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  const replaceSpecialCharacters = (str) => {
    return str
      .replace(/&quot;/g, '"')
      .replace(/&rsquo;/g, "'")
      .replace(/&#039;/g, "'")
      .replace(/&shy;/g, '-')
      .replace(/&#039;/g, "'");
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleConfirm = (answer) => {
    onNextQuestion();
    setSelectedAnswer(answer);
    console.log(selectedAnswer);
  };

  return (
    <div className={`quiz-card ${isActive ? 'active' : ''}`}>
      <div className="scores-container">0/10</div>

      <p>{replaceSpecialCharacters(quiz.question)}</p>
      {shuffledAnswers.map((answer, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          className={`btn-style answer-link ${
            selectedAnswer === answer ? 'selected' : ''
          }`}
          key={index}
          onClick={() => handleAnswerSelection(answer)}
        >
          {answer}
        </a>
      ))}
      {isActive && selectedAnswer && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="btn-style btn-confirm" href="#" onClick={handleConfirm}>
          Confirm
        </a>
      )}
    </div>
  );
};

export default QuizCard;

import React from 'react';

const QuizCard = ({ quiz }) => {
  const allAnswers = [quiz.correct_answer, ...quiz.incorrect_answers];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  const replaceSpecialCharacters = (str) => {
    return str
      .replace(/&quot;/g, '"')
      .replace(/&rsquo;/g, "'")
      .replace(/&#039;/g, "'")
      .replace(/&shy;/g, '-')
      .replace(/&#039;/g, "'");
  };

  const handleAnswerClick = (answer) => {
    if (answer === quiz.correct_answer) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return (
    <div className="swiper-slide">
      <p>{replaceSpecialCharacters(quiz.question)}</p>
      {shuffledAnswers.map((answer, index) => (
        <button
          className="btn-style"
          onClick={() => handleAnswerClick(answer)}
          key={index}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuizCard;

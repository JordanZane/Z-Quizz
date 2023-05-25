import React, { useState } from 'react';

const QuizCard = ({
  quiz,
  isActive,
  onNextQuestion,
  compteurCorrectAnswer,
  setCompteurCorrectAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const shuffledAnswers = React.useMemo(() => {
    const allAnswers = [quiz.correct_answer, ...quiz.incorrect_answers];
    return allAnswers.sort(() => Math.random() - 0.5);
  }, [quiz.correct_answer, quiz.incorrect_answers]);

  const replaceSpecialCharacters = (str) => {
    return str
      .replace(/&quot;/g, '"')
      .replace(/&rsquo;/g, "'")
      .replace(/&#039;/g, "'")
      .replace(/&shy;/g, '-')
      .replace(/&lrm;/g, "'")
      .replace(/Adi&oacute;/g, 'adió')
      .replace(/&Eacute;/g, 'é')
      .replace(/&amp;/g, '&');
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleConfirm = (answer) => {
    onNextQuestion();
    setSelectedAnswer(answer);
    if (answer === quiz.correct_answer) {
      setCompteurCorrectAnswer(compteurCorrectAnswer + 1);
      console.log(compteurCorrectAnswer);
    }
  };

  return (
    <>
      <div className={`quiz-card ${isActive ? 'active' : ''}`}>
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
            {replaceSpecialCharacters(answer)}
          </a>
        ))}
        {isActive && selectedAnswer && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            className="btn-style btn-confirm"
            href="#"
            onClick={() => handleConfirm(selectedAnswer)}
          >
            Confirm
          </a>
        )}
      </div>
    </>
  );
};

export default QuizCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import QuizCard from '../../../components/QuizCard';

const VgEasy = () => {
  const [data, setData] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [compteurQuestion, setCompteurQuestion] = useState(1);
  const [compteurCorrectAnswer, setCompteurCorrectAnswer] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium'
      )
      .then((response) => {
        const responseData = response.data;
        const quizContent = responseData.results.map((quiz) => {
          return { ...quiz, id: uuidv4() };
        });
        setData(quizContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNextQuestion = () => {
    if (compteurQuestion <= 10) {
      setActiveCardIndex(activeCardIndex + 1);
      setCompteurQuestion(compteurQuestion + 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="quiz-container">
            <h2>Videos Games - Medium</h2>
            <div
              className={`scores-container ${
                compteurQuestion === 11 ? 'hidden' : ''
              }`}
            >
              <p>Question : {compteurQuestion}/10</p>
            </div>
            {data.map((quiz, index) => {
              const isActive = index === activeCardIndex;
              return (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  isActive={isActive}
                  onNextQuestion={handleNextQuestion}
                  compteurCorrectAnswer={compteurCorrectAnswer}
                  setCompteurCorrectAnswer={setCompteurCorrectAnswer}
                />
              );
            })}
            <div
              className={`quiz-card-score ${
                compteurQuestion === 11 ? 'active' : ''
              }`}
            >
              <h2>Your score : {compteurCorrectAnswer}/10</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VgEasy;

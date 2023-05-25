import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import QuizCard from '../../../components/QuizCard';

const GkEasy = () => {
  const [data, setData] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy')
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
    setActiveCardIndex(activeCardIndex + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="quiz-container">
            <h2>General Knowledge - Easy</h2>
            {data.map((quiz, index) => {
              const isActive = index === activeCardIndex;
              return (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  isActive={isActive}
                  onNextQuestion={handleNextQuestion}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GkEasy;

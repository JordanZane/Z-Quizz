import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import QuizCard from './QuizCard';
import Loader from './Loader';

const QuizCategory = ({ categoryName, apiUrl, difficulty, quizUrl }) => {
  const [data, setData] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [compteurQuestion, setCompteurQuestion] = useState(1);
  const [compteurCorrectAnswer, setCompteurCorrectAnswer] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const responseData = response.data;
        const quizContent = responseData.results.map((quiz) => {
          return { ...quiz, id: uuidv4() };
        });
        setData(quizContent);
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiUrl]);

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
            <h2>
              {categoryName} - {difficulty}
            </h2>
            {isDataLoading ? (
              <Loader />
            ) : (
              <>
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
                  <div className="btn-container">
                    <Link className="btn-style" to={'/categories/' + quizUrl}>
                      Retry
                    </Link>
                    <Link className="btn-style" to={'/categories'}>
                      Back to categories
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCategory;

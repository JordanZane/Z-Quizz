import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import QuizCard from '../../../components/QuizCard';

const GkEasy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy')
      .then((response) => {
        const responseData = response.data;
        const quizContent = responseData.results.map((quiz) => {
          return { ...quiz, id: uuidv4() };
        });
        setData(quizContent);
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="quiz-container">
            {data.map((quiz) => {
              return <QuizCard key={quiz.id} quiz={quiz} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GkEasy;

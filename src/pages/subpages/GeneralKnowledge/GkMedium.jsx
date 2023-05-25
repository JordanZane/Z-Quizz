import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import QuizCard from '../../../components/QuizCard';

const GkMedium = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium')
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

export default GkMedium;

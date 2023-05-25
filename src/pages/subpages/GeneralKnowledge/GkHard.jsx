import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';

import QuizCard from '../../../components/QuizCard';

const GkHard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=9&difficulty=hard')
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

  useEffect(() => {
    Swiper.use([Navigation]);

    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="quiz-container">
            <h2>General knowledge - Hard</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {data.map((quiz) => {
                  return <QuizCard key={quiz.id} quiz={quiz} />;
                })}
              </div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GkHard;

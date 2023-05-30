import QuizCategory from '../../../components/QuizCategory';

const AmHard = () => {
  return (
    <QuizCategory
      categoryName="Japanese Anime & manga"
      apiUrl="https://opentdb.com/api.php?amount=10&category=31&difficulty=hard"
      difficulty="Hard"
      quizUrl={'anim-manga-jap'}
    />
  );
};

export default AmHard;

import QuizCategory from '../../../components/QuizCategory';

const AmEasy = () => {
  return (
    <QuizCategory
      categoryName="Japanese Anime & manga"
      apiUrl="https://opentdb.com/api.php?amount=10&category=31&difficulty=easy"
      difficulty="Easy"
      quizUrl={'anim-manga-jap-easy'}
    />
  );
};

export default AmEasy;

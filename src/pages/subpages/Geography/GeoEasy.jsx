import QuizCategory from '../../../components/QuizCategory';

const GeoEasy = () => {
  return (
    <QuizCategory
      categoryName="Geography"
      apiUrl="https://opentdb.com/api.php?amount=10&category=22&difficulty=easy"
      difficulty="Easy"
      quizUrl={'geography-easy'}
    />
  );
};

export default GeoEasy;

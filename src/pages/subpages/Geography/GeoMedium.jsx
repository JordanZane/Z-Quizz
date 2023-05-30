import QuizCategory from '../../../components/QuizCategory';

const GeoMedium = () => {
  return (
    <QuizCategory
      categoryName="Geography"
      apiUrl="https://opentdb.com/api.php?amount=10&category=22&difficulty=medium"
      difficulty="Medium"
      quizUrl={'geography'}
    />
  );
};

export default GeoMedium;

import QuizCategory from '../../../components/QuizCategory';

const VgMedium = () => {
  return (
    <QuizCategory
      categoryName="Videos Games"
      apiUrl="https://opentdb.com/api.php?amount=10&category=15&difficulty=medium"
      difficulty="Medium"
      quizUrl={'videos-games'}
    />
  );
};

export default VgMedium;

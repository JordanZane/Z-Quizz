import QuizCategory from '../../../components/QuizCategory';

const GkMedium = () => {
  return (
    <QuizCategory
      categoryName="General Knowledge"
      apiUrl="https://opentdb.com/api.php?amount=10&category=9&difficulty=medium"
      difficulty="Medium"
      quizUrl={'general-knowledge'}
    />
  );
};

export default GkMedium;

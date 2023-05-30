import QuizCategory from '../../../components/QuizCategory';

const SportMedium = () => {
  return (
    <QuizCategory
      categoryName="Sport"
      apiUrl="https://opentdb.com/api.php?amount=10&category=21&difficulty=medium"
      difficulty="Medium"
      quizUrl={'sports'}
    />
  );
};

export default SportMedium;

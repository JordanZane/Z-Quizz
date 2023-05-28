import QuizCategory from '../../../components/QuizCategory';

const GkHard = () => {
  return (
    <QuizCategory
      categoryName="General Knowledge"
      apiUrl="https://opentdb.com/api.php?amount=10&category=9&difficulty=hard"
      difficulty="Hard"
    />
  );
};

export default GkHard;

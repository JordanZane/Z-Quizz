import QuizCategory from '../../../components/QuizCategory';

const SportHard = () => {
  return (
    <QuizCategory
      categoryName="Sport"
      apiUrl="https://opentdb.com/api.php?amount=10&category=21&difficulty=hard"
      difficulty="Hard"
      quizUrl={'sports-hard'}
    />
  );
};

export default SportHard;

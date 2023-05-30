import QuizCategory from '../../../components/QuizCategory';

const SportEasy = () => {
  return (
    <QuizCategory
      categoryName="Sport"
      apiUrl="https://opentdb.com/api.php?amount=10&category=21&difficulty=easy"
      difficulty="Easy"
      quizUrl={'sports'}
    />
  );
};

export default SportEasy;

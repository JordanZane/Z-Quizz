import QuizCategory from '../../../components/QuizCategory';

const GkEasy = () => {
  return (
    <QuizCategory
      categoryName="General Knowledge"
      apiUrl="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy"
      difficulty="Easy"
      quizUrl={'general-knowledge'}
    />
  );
};

export default GkEasy;

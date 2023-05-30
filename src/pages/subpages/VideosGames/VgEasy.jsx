import QuizCategory from '../../../components/QuizCategory';

const VgEasy = () => {
  return (
    <QuizCategory
      categoryName="Videos Games"
      apiUrl="https://opentdb.com/api.php?amount=10&category=15&difficulty=easy"
      difficulty="Easy"
      quizUrl={'videos-games'}
    />
  );
};

export default VgEasy;

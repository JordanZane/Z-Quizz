import QuizCategory from '../../../components/QuizCategory';

const MythoMedium = () => {
  return (
    <QuizCategory
      categoryName="Mythologie"
      apiUrl="https://opentdb.com/api.php?amount=10&category=20&difficulty=medium"
      difficulty="Medium"
      quizUrl={'mythology'}
    />
  );
};

export default MythoMedium;

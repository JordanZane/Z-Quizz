import QuizCategory from '../../../components/QuizCategory';

const MythoHard = () => {
  return (
    <QuizCategory
      categoryName="Mythologie"
      apiUrl="https://opentdb.com/api.php?amount=10&category=20&difficulty=hard"
      difficulty="Hard"
      quizUrl={'mythology'}
    />
  );
};

export default MythoHard;

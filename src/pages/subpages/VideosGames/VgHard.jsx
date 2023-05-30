import QuizCategory from '../../../components/QuizCategory';

const VgHard = () => {
  return (
    <QuizCategory
      categoryName="Videos Games"
      apiUrl="https://opentdb.com/api.php?amount=10&category=15&difficulty=hard"
      difficulty="Hard"
      quizUrl={'videos-games-hard'}
    />
  );
};

export default VgHard;

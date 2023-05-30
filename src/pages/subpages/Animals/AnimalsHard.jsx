import QuizCategory from '../../../components/QuizCategory';

const AnimalsHard = () => {
  return (
    <QuizCategory
      categoryName="Animals"
      apiUrl="https://opentdb.com/api.php?amount=10&category=27&difficulty=hard"
      difficulty="Hard"
      quizUrl={'animals-hard'}
    />
  );
};

export default AnimalsHard;

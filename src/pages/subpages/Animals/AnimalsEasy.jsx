import QuizCategory from '../../../components/QuizCategory';

const AnimalsEasy = () => {
  return (
    <QuizCategory
      categoryName="Animals"
      apiUrl="https://opentdb.com/api.php?amount=10&category=27&difficulty=easy"
      difficulty="Easy"
    />
  );
};

export default AnimalsEasy;

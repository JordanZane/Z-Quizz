import QuizCategory from '../../../components/QuizCategory';

const AnimalsMedium = () => {
  return (
    <QuizCategory
      categoryName="Animals"
      apiUrl="https://opentdb.com/api.php?amount=10&category=27&difficulty=medium"
      difficulty="Medium"
      quizUrl={'animals-medium'}
    />
  );
};

export default AnimalsMedium;

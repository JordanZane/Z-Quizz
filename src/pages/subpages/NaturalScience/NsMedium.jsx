import QuizCategory from '../../../components/QuizCategory';

const NsMedium = () => {
  return (
    <QuizCategory
      categoryName="Science & Nature"
      apiUrl="https://opentdb.com/api.php?amount=10&category=17&difficulty=medium"
      difficulty="Medium"
      quizUrl={'science-nature-medium'}
    />
  );
};

export default NsMedium;

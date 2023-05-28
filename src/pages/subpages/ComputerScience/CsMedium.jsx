import QuizCategory from '../../../components/QuizCategory';

const CsMedium = () => {
  return (
    <QuizCategory
      categoryName="Computer Science"
      apiUrl="https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
      difficulty="Medium"
    />
  );
};

export default CsMedium;

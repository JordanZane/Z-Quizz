import QuizCategory from '../../../components/QuizCategory';

const AmMedium = () => {
  return (
    <QuizCategory
      categoryName="Japanese Anime & manga"
      apiUrl="https://opentdb.com/api.php?amount=10&category=31&difficulty=medium"
      difficulty="Medium"
    />
  );
};

export default AmMedium;

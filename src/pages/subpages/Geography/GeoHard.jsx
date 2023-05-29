import QuizCategory from '../../../components/QuizCategory';

const GeoHard = () => {
  return (
    <QuizCategory
      categoryName="Geography"
      apiUrl="https://opentdb.com/api.php?amount=10&category=22&difficulty=hard"
      difficulty="Hard"
    />
  );
};

export default GeoHard;

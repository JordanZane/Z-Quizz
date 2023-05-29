import QuizCategory from '../../../components/QuizCategory';

const FilmMedium = () => {
  return (
    <QuizCategory
      categoryName="Film"
      apiUrl="https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"
      difficulty="Medium"
    />
  );
};

export default FilmMedium;

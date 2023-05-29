import QuizCategory from '../../../components/QuizCategory';

const FilmEasy = () => {
  return (
    <QuizCategory
      categoryName="Film"
      apiUrl="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy"
      difficulty="Easy"
    />
  );
};

export default FilmEasy;

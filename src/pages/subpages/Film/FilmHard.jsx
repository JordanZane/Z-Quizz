import QuizCategory from '../../../components/QuizCategory';

const FilmHard = () => {
  return (
    <QuizCategory
      categoryName="Film"
      apiUrl="https://opentdb.com/api.php?amount=10&category=11&difficulty=hard"
      difficulty="Hard"
      quizUrl={'film-hard'}
    />
  );
};

export default FilmHard;

import QuizCategory from '../../../components/QuizCategory';

const CsHard = () => {
  return (
    <QuizCategory
      categoryName="Computer Science"
      apiUrl="https://opentdb.com/api.php?amount=10&category=18&difficulty=hard"
      difficulty="Hard"
      quizUrl={'science-computer'}
    />
  );
};

export default CsHard;

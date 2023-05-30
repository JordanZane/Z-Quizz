import QuizCategory from '../../../components/QuizCategory';

const CsEasy = () => {
  return (
    <QuizCategory
      categoryName="Computer Science"
      apiUrl="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy"
      difficulty="Easy"
      quizUrl={'science-computer-easy'}
    />
  );
};

export default CsEasy;

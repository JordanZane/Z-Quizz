import QuizCategory from '../../../components/QuizCategory';

const MythoEasy = () => {
  return (
    <QuizCategory
      categoryName="Mythologie"
      apiUrl="https://opentdb.com/api.php?amount=10&category=20&difficulty=easy"
      difficulty="Easy"
    />
  );
};

export default MythoEasy;

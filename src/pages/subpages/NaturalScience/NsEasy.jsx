import QuizCategory from '../../../components/QuizCategory';

const NsEasy = () => {
  return (
    <QuizCategory
      categoryName="Science & Nature"
      apiUrl="https://opentdb.com/api.php?amount=10&category=17&difficulty=easy"
      difficulty="Easy"
      quizUrl={'science-nature-easy'}
    />
  );
};

export default NsEasy;

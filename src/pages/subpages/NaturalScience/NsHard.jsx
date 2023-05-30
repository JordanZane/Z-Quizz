import QuizCategory from '../../../components/QuizCategory';

const NsHard = () => {
  return (
    <QuizCategory
      categoryName="Science & Nature"
      apiUrl="https://opentdb.com/api.php?amount=10&category=17&difficulty=hard"
      difficulty="Hard"
      quizUrl={'science-nature-hard'}
    />
  );
};

export default NsHard;

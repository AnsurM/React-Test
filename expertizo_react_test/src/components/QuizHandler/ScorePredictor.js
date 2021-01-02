import ProgressBar from "react-bootstrap/ProgressBar";

const QuizScorePredictor = ({ quizStatus }) => {

  return (
    <ProgressBar>
      <ProgressBar variant="info" now={20} key={1} />
      <ProgressBar variant="warning" now={25} key={2} />
      <ProgressBar variant="success" now={20} key={3} />
    </ProgressBar>
  );
};

export default QuizScorePredictor;

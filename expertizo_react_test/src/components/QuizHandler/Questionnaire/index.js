import { Container, Row, Col } from "react-bootstrap";
import QuestionStatistics from "./QuestionStatistics";
import QuestionForm from "./QuestionForm";
import { useState, useEffect } from "react";

const Questionnaire = ({ questions, onAnswerQuestion }) => {
  const convertQuestionToReadableFormat = (question) => {
    let tempQuestion = {};
    for (const [key, value] of Object.entries(question)) {
      tempQuestion[key] = decodeURIComponent(value);
    }
    return tempQuestion;
  };

  const [quizProgress, setQuizProgess] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (questions && !currentQuestion)
      setCurrentQuestion(
        convertQuestionToReadableFormat(questions[currentQuestionIndex])
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  return currentQuestion ? (
    <Container>
      <Row>
        <Col>
          <QuestionStatistics
            questionNo={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            question={currentQuestion}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionForm />
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Col>
          <h2>Loading....</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Questionnaire;

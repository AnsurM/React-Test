import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import Questionnaire from "./Questionnaire";
import ScorePredictor from "./ScorePredictor";

const questions = require("../../questions.json");

const QuizHandler = () => {
  const [progress, setProgress] = useState(60);
  const [score, setScore] = useState(10);

  return (
    <Container fluid>
      <Row>
        <Col>
          <ProgressBar progress={progress} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Questionnaire questions={questions} onAnswerQuestion={() => {}} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ScorePredictor score={score} />
        </Col>
      </Row>
    </Container>
  );
};

export default QuizHandler;
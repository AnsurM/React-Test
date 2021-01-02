import { Container, Row, Col } from "react-bootstrap";

import ProgressBar from "react-bootstrap/ProgressBar";

const QuizScorePredictor = ({ quizStatus }) => {
  return (
    <Row className="stickyScoreIndicator">
      <Col>
        <Row>
          <Col>
            <p className="text-left">Score</p>
          </Col>
          <Col>
            <p className="text-right">Max Score</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar>
              <ProgressBar variant="info" now={20} key={1} />
              <ProgressBar variant="warning" now={25} key={2} />
              <ProgressBar variant="success" now={20} key={3} />
            </ProgressBar>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default QuizScorePredictor;

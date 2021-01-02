import { Container, Row, Col } from "react-bootstrap";
import OptionsList from "./OptionsList";

export default function QuestionForm({
  question: { question, correct_answer, incorrect_answers },
}) {
  const options = [correct_answer, ...incorrect_answers.split(",")];

  return (
    <Container>
      <Row>
        <Col>
          <h3>{question}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <OptionsList options={options} onClickOption={() => {}} />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

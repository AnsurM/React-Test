import { Container, Row, Col } from "react-bootstrap";

export default function QuestionForm({
  question: { question, correct_answer, incorrect_answers },
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h3>{question}</h3>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

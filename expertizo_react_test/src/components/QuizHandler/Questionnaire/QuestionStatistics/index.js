import { Container, Row, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const diffRating = { easy: 1, medium: 2, hard: 3 };

export default function QuestionStatistics({
  questionNo,
  totalQuestions,
  question: { category, difficulty },
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{`Question ${questionNo} of ${totalQuestions}`}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>{category}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <ReactStars
            count={3}
            value={diffRating[difficulty]}
            size={24}
            activeColor="#ffd700"
            edit={false}
            isHalf={false}
          />
        </Col>
      </Row>
    </Container>
  );
}

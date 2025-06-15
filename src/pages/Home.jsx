import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Välkommen till CourseHub</h1>
          <p className="lead"></p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Kurser</Card.Title>
              <Card.Text>
                Utforska vårt utbud av kurser och hitta något som passar dig.
              </Card.Text>
              <Link to="/courses" className="btn btn-primary">
                Visa alla kurser
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Nyheter</Card.Title>
              <Card.Text>
                Håll dig uppdaterad med de senaste nyheterna från skolan.
              </Card.Text>
              <Link to="/news" className="btn btn-primary">
                Läs nyheter
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Registrering</Card.Title>
              <Card.Text>
                Registrera dig för en kurs och börja din utbildningsresa.
              </Card.Text>
              <Link to="/register" className="btn btn-primary">
                Registrera dig
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

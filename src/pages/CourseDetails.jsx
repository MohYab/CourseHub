import { useParams, Link } from "react-router-dom";
import { Container, Card, Button, Badge } from "react-bootstrap";
import { getCourseById } from "../data/courses";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function CourseDetails() {
  const { id } = useParams();
  const course = getCourseById(Number(id));
  const { registeredCourses } = useContext(CourseContext);

  if (!course) {
    return (
      <Container className="mt-4">
        <h1>Kursen hittades inte</h1>
      </Container>
    );
  }

  const isRegistered = registeredCourses?.some(
    (c) => Number(c.courseId) === course.id
  );

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {course.teacher} • {course.credits} hp
          </Card.Subtitle>
          <Badge bg="info" className="mb-3">
            {course.category}
          </Badge>
          <Card.Text>{course.longDescription}</Card.Text>

          <div className="d-flex gap-2">
            <Link to="/courses" className="btn btn-secondary">
              Tillbaka till kurser
            </Link>
            {isRegistered ? (
              <Button variant="success" disabled>
                Redan registrerad
              </Button>
            ) : (
              <Link
                to={`/register?courseId=${course.id}`}
                className="btn btn-primary"
              >
                Registrera dig
              </Link>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

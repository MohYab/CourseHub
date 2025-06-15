import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Link to={`/courses/${course.id}`}>
          <Button variant="primary">Läs mer</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

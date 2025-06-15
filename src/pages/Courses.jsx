import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../data/courses";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCourses(getCourses());
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1 className="mb-4">Våra kurser</h1>
      <Form.Control
        type="text"
        placeholder="Sök kurser..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredCourses.map((course) => (
          <Col key={course.id}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

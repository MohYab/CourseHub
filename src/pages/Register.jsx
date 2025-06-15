import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import { RegisterForm } from "../components/RegisterForm";
import { getCourses } from "../data/courses";

export default function Register() {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preselectedCourseId = queryParams.get("courseId");

  useEffect(() => {
    setCourses(getCourses());
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Registrera dig för en kurs</h1>
      {preselectedCourseId && (
        <Alert variant="info">
          Du har valt att registrera dig för en specifik kurs. Du kan ändra kurs
          nedan om du vill.
        </Alert>
      )}
      <RegisterForm
        courses={courses}
        preselectedCourseId={preselectedCourseId}
      />
    </Container>
  );
}

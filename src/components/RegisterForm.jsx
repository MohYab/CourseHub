import { useState, useContext } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { CourseContext } from "../context/CourseContext";
import { getCourses } from "../data/courses";

export function RegisterForm({ courses, onSuccess, preselectedCourseId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courseId: preselectedCourseId || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    courseId: "",
  });

  const { registerForCourse } = useContext(CourseContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Rensa felmeddelande när användaren skriver
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", courseId: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Namn är obligatoriskt";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post är obligatoriskt";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ogiltig e-postadress";
      valid = false;
    }

    if (!formData.courseId) {
      newErrors.courseId = "Välj en kurs";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      registerForCourse(formData);
      alert(`Tack ${formData.name}! Du är nu registrerad för kursen.`);
      setFormData({
        name: "",
        email: "",
        courseId: "",
      });
      if (onSuccess) onSuccess();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, mx: "auto", mt: 2 }}
    >
      <TextField
        fullWidth
        label="Namn"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        fullWidth
        label="E-post"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        error={!!errors.email}
        helperText={errors.email}
      />
      <FormControl fullWidth margin="normal" required error={!!errors.courseId}>
        <InputLabel>Kurs</InputLabel>
        <Select
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          label="Kurs"
        >
          <MenuItem value="">
            <em>Välj en kurs</em>
          </MenuItem>
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.name}
            </MenuItem>
          ))}
        </Select>
        {errors.courseId && (
          <Box
            component="span"
            sx={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              mt: 1,
              display: "block",
            }}
          >
            {errors.courseId}
          </Box>
        )}
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        Registrera dig
      </Button>
    </Box>
  );
}

export function RegisterDialog({ open, onClose }) {
  const courses = getCourses();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Registrera dig för en kurs</DialogTitle>
      <DialogContent>
        <RegisterForm courses={courses} onSuccess={onClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Stäng</Button>
      </DialogActions>
    </Dialog>
  );
}

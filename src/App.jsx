import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import News from "./pages/News";
import Register from "./pages/Register";
import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
    <CourseProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </CourseProvider>
  );
}

export default App;

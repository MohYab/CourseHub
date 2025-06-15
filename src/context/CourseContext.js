import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const registerForCourse = (registrationData) => {
    setRegisteredCourses((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...registrationData,
        registrationDate: new Date().toISOString(),
      },
    ]);
  };

  return (
    <CourseContext.Provider value={{ registeredCourses, registerForCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

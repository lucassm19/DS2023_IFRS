import React from "react";
import StudentList from "./StudentList";
const App = () => {
  return (
    <div>
      <StudentList
        name="Ana Maria Lima"
        registration="2020123456"
        classId="Informática"
        year="2020"
      />
      <StudentList
        name="José Camaro"
        registration="2020987654"
        classId="Informática"
        year="2020"
      />
      <StudentList
        name="Laura Silva"
        registration="2021456127"
        classId="Informática"
        year="2021"
      />
      <StudentList
        name="Sabrina Santos"
        registration="2022456127"
        classId="Agropecuária"
        year="2022"
      />
    </div>
  );
};
export default App;
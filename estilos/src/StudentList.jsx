import React from "react";
import "./StudentList.scss";
const StudentList = (props) => {
    const { name, registration, classId, year } = props;
    return (
        <ul className="list">
            <li className="details">Nome : {name}</li>
            <li className="details">Matrícula: {registration}</li>
            <li className="details">Turma: {classId}</li>
            <li className="details">Ano : {year}</li>
        </ul>
    );
};
export default StudentList;
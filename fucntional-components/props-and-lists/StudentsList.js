import React from 'react'
import Student from './Student'

const StudentsList = () => {
    const students = ["Bey", "Meg", "Saweetie", "SZA"];
    return (
        <ul>
            {students.map((student, index) => {
                return <Student key={index} student={student}/>
            })}
        </ul>
    );
}

export default StudentsList
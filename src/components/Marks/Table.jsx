import Row from "./Row"

export default function Table({ dates, students, updateDate, updateGrade }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ПІБ учасників</th>
                    {dates.map((date, index) => (
                        <th key={index} onClick={() => updateDate(index)}>
                            {date}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {students.map((student, studentIndex) => (
                    <Row
                        key={studentIndex}
                        student={student}
                        dates={dates}
                        updateGrade={(gradeIndex) => updateGrade(studentIndex, gradeIndex)}
                    />
                ))}
            </tbody>
        </table>
    )
}
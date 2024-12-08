
import Cell from "./Cell"

export default function Row({ student, updateGrade }) {
    return (
        <tr>
            <td className="student-name">{student.name}</td>
            {student.grades.map((grade, gradeIndex) => (
                <Cell key={gradeIndex} grade={grade} onEdit={() => updateGrade(gradeIndex)} />
            ))}
        </tr>
    )
}
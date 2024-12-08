
import Cell from "./Cell"

export default function Row({ student }) {
    return (
        <tr>
            <td className="student-name">{student.name}</td>
            {student.grades.map((grade, index) => (
                <Cell key={index} grade={grade} />
            ))}
        </tr>
    )
}
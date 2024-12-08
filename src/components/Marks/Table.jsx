import Row from "./Row"

export default function Table({ students, dates }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ПІБ учасників</th>
                    {dates.map((date, index) => (
                        <th key={index}>{date}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <Row key={index} student={student} />
                ))}
            </tbody>
        </table>
    )
}
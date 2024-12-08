
export default function Cell({ grade, onEdit }) {
    return (
        <td className="cell" onClick={onEdit}>
            <div className="grade">{grade}</div>
        </td>
    )
}
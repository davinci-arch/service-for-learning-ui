
export default function Cell({ grade }) {
    return (
        <td className="cell">
            <div className="grade">{grade}</div>
        </td>
    )
}
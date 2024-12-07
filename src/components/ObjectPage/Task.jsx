import "../styles/Task.scss"

export default function Task({ title, date, role }) {
    return (
        <div className="task">
            <div className="task-status">Готово</div>
            <div className="task-content">
                <h3 className="task-title">{title}</h3>
                <span className="task-date">{date}</span>
            </div>
            {role == "Teacher" ?
                <div className="remove-task">
                    <img src="/src/assets/delete.png" alt="Delete task" className="remove-task-img" />
                </div>
                : null
            }

        </div>
    );
}
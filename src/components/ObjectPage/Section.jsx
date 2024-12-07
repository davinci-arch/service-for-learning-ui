import "../styles/Section.scss"
import Task from "./Task"
export default function Section({ sectionTitle, tasks, role }) {
    return (
        <div className="section">
            <div className="section-header">
                <h2 className="section-title">{sectionTitle}</h2>
                {role == "Teacher" ?
                    <div className="delete-section">
                        <img src="/src/assets/deleteSection.png" alt="Delete section" className="delete-section-img" />
                    </div>
                    : null}
            </div>
            <div className="separator"></div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} date={task.date} role={role} />
                ))}
            </div>
            {role == "Teacher" ?
                <div className="create-new-task">
                    <img src="/src/assets/addTask.png" alt="Create new task" className="create-new-task-img" />
                </div>
                : null}
        </div>
    )
}
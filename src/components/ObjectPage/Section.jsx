import "../styles/Section.scss"
import Task from "./Task"
export default function Section({sectionTitle, tasks}) {
    return (
        <div className="section">
            <h2 className="section-title">{sectionTitle}</h2>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} date={task.date} />
                ))}
            </div>
        </div>
    )
}

import NavigationPanel from "../NavigationPanel"
import "../../styles/TaskObjectPage.scss"
import CommentForTask from "./CommentForTask"
import { useState } from "react"
import ContainerForCompleteTask from "./ContainerForCompleteTask"
export default function TaskObjectPage() {

    const [comments, setComments] = useState([
        { commentAuthorName: "Парфеса Олександр Олексійович", commentDate: "12.09.2024", commentText: "Hdldflsdjfldsfjlsfjdjfjl" },
        { commentAuthorName: "Парфеса Олександр Олексійович", commentDate: "12.09.2024", commentText: "Hdldflsdjfldsfjlsfjdjfjl" },
        { commentAuthorName: "Парфеса Олександр Олексійович", commentDate: "12.09.2024", commentText: "Hdldflsdjfldsfjlsfjdjfjl" },
    ])

    const [deadline, setDeadline] = useState("2024-09-12")

    const [roleName, setRoleName] = useState("Teacher")
    const [taskIsPractical, setTaskIsPractical] = useState(false)

    const formatDate = (date) => {
        if (!date) return "";
        const [year, month, day] = date.split("-");
        return `${day}.${month}.${year}`;
    };

    return (
        <div className="task-obj-page-container">
            <div>
                <NavigationPanel />
            </div>
            <div className="task-container">
                {roleName == "Teacher" ?
                    <div className="task-container-header">
                        <span>Тип завдання: </span>
                        <div className="type-task">
                            <div className={taskIsPractical ? "type-task-btn active" : "type-task-btn"} onClick={() => setTaskIsPractical(true)}>Практичне</div>
                            <div className={!taskIsPractical ? "type-task-btn active" : "type-task-btn"} onClick={() => setTaskIsPractical(false)}>Теоретичне</div>
                        </div>
                    </div>
                    : null}
                <main>
                    <section className="assignment-details">
                        <div className="assignment-header">
                            <span className="assignment-title">Назва завдання</span>
                            <div className="assignment-date-container">
                                <span className="assignment-deadline">Строк здачі завдання: {formatDate(deadline)}</span>
                                {roleName == "Teacher" ?
                                    <div>
                                        <button
                                            className="type-task-btn"
                                            onClick={() => document.getElementById("date-input").showPicker()}
                                        >
                                            Змінити дату
                                        </button>
                                        <input
                                            type="date"
                                            id="date-input"
                                            value={deadline}
                                            onChange={(e) => setDeadline(e.target.value)}
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                    : null}
                            </div>
                        </div>
                        <div className="assignment-description">
                            <h3>Опис завдання</h3>
                            {roleName == "Teacher" ?
                                <div className="create-section">
                                    <div className="create-section-icon">
                                        <span className="plus">+</span>
                                    </div>
                                    <p className="create-section-text">Додати опис</p>
                                </div>
                                : null}
                        </div>
                        <div className="attached-files">
                            <h3>Прикріплені файли</h3>
                            <div>
                                <img src="/src/assets/addTask.png" alt="Add file for task" className="add-file-to-task-img" />
                            </div>
                        </div>
                    </section>

                    {taskIsPractical ? <ContainerForCompleteTask /> : null}

                </main>
                <div className="save-task-settings">
                    <button id="save-task-settings-btn">Зберегти зміни</button>
                </div>
                <section className="comments">
                    <h3>Коментарі до завдання</h3>
                    {comments.map((value, index) => (
                        <CommentForTask commentData={value} key={index} />
                    ))}
                    <div className="comment-form">
                        <input type="text" placeholder="Коментар" />
                        <button>Надіслати</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

import NavigationPanel from "../NavigationPanel"
import "../../styles/TaskObjectPage.scss"
import CommentForTask from "./CommentForTask"
import { useState } from "react"
export default function TaskObjectPage() {

    const [comments, setComments] = useState([
        { commentAuthorName: "Парфеса Олександр Олексійович", commentDate: "12.09.2024", commentText: "Hdldflsdjfldsfjlsfjdjfjl" },
        { commentAuthorName: "Парфеса Олександр Олексійович", commentDate: "12.09.2024", commentText: "Hdldflsdjfldsfjlsfjdjfjl" },
        { commentAuthorName: "Парфеса Олександр Олексійович", commentDate: "12.09.2024", commentText: "Hdldflsdjfldsfjlsfjdjfjl" },
    ])

    const [deadline, setDeadline] = useState("12.09.2024")


    return (
        <div className="task-obj-page-container">
            <div>
                <NavigationPanel />
            </div>
            <div className="task-container">
                <main>
                    <section className="assignment-details">
                        <div className="assignment-header">
                            <span className="assignment-title">Назва завдання</span>
                            <span className="assignment-deadline">Строк здачі завдання: {deadline}</span>
                        </div>
                        <div className="assignment-description">
                            <h3>Опис завдання</h3>
                            <div>LSDJFldjfldsjflsdfjlfjsd</div>
                        </div>
                        <div className="attached-files">
                            <h3>Прикріплені файли</h3>
                        </div>
                    </section>

                    <aside>
                        <div className="score">Оцінка: 33/100</div>
                        <button className="file-btn">File</button>
                        <button className="link-btn">Link</button>
                        <div className="separator"></div>
                        <button className="add-file-btn">Додати файл</button>
                        <button className="add-link-btn">Посилання</button>
                        <div className="separator"></div>
                        <button className="submit-btn">Здати роботу</button>
                    </aside>
                </main>

                <section className="comments">
                    <h3>Коментарі до завдання</h3>
                    {comments.map((value) => (
                        <CommentForTask commentData={value} />
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
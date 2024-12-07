
import NavigationPanel from "./NavigationPanel"
import Section from "./Section"
import "../styles/ObjectPageDetails.scss"

import { useState } from "react"

export default function ObjectPage() {
    const [roleName, setRoleName] = useState("Teacher")
    const [tasks1, setTasks1] = useState([
        { title: 'Task 1', date: '01.12.2024' },
        { title: 'Task 2', date: '02.12.2024' },
        { title: 'Task 3', date: '03.12.2024' },
    ])
    const [tasks2, setTasks2] = useState([
        { title: 'Task 4', date: '04.12.2024' },
        { title: 'Task 5', date: '05.12.2024' },
    ])

    return (
        <div className="object-page-container">
            <div className="nav-panel">
                <NavigationPanel />
            </div>
            <div className="object-data">
                <div>
                    Опис дисципліни
                    <div className="separator"></div>
                </div>
                <div>
                    <Section sectionTitle="Розділ 1" tasks={tasks1} role={roleName} />
                    <Section sectionTitle="Розділ 2" tasks={tasks2} role={roleName} />
                </div>
                {roleName == "Teacher" ?
                    <div className="create-section">
                        <div className="create-section-icon">
                            <span className="plus">+</span>
                        </div>
                        <p className="create-section-text">Створити новий розділ</p>
                    </div>
                    : null}

            </div>
        </div>
    )
}
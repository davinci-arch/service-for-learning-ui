import "../styles/LessonSchedule.scss"
import { useState } from "react";

export default function LessonSchedule() {
    const [schdules, setSchedule] = useState([
        { id: 1, start: "08:00", end: "09:20" },
        { id: 2, start: "09:40", end: "11:00" },
    ]);

    const [roleName, setRoleName] = useState("Teacher")


    const [startTime, setStartTime] = useState("00:00")
    const [durationTime, setDurationTime] = useState(0)
    const [durationBreak, setDurationBreak] = useState(0)
    const [amountOfLessons, setAmoutOfLessons] = useState(0)

    const handleInputChange = (id, field, value) => {
        setSchedule((prevClasses) =>
            prevClasses.map((cls) =>
                cls.id === id ? { ...cls, [field]: value } : cls
            )
        );
    };

    const addSchedule = () => {
        setSchedule([...schdules, { id: schdules.length + 1, start: "", end: "" }]);
    };

    const deleteSchedule = (id) => {
        setSchedule(schdules.filter((cls) => cls.id !== id));
    };

    const generateSchedule = () => {
        const newSchedule = [];
        let [startHour, startMinute] = startTime.split(":").map(Number); // Розбиваємо час на години та хвилини

        for (let i = 0; i < amountOfLessons; i++) {
            // Розрахунок часу завершення заняття
            const totalMinutesEnd = startHour * 60 + Number(startMinute) + Number(durationTime); // Загальний час у хвилинах для кінця заняття
            const endHour = Math.floor(totalMinutesEnd / 60); // Години
            const endMinute = totalMinutesEnd % 60; // Хвилини
            // Форматування часу до hh:mm
            const startTimeStr = `${String(startHour).padStart(2, "0")}:${String(
                startMinute
            ).padStart(2, "0")}`;
            const endTimeStr = `${String(endHour).padStart(2, "0")}:${String(
                endMinute
            ).padStart(2, "0")}`;

            newSchedule.push({ id: i + 1, start: startTimeStr, end: endTimeStr });

            // Розрахунок часу початку наступного заняття
            const totalMinutesNext = endHour * 60 + Number(endMinute) + Number(durationBreak); // Загальний час у хвилинах для початку наступного заняття
            startHour = Math.floor(totalMinutesNext / 60); // Оновлюємо години
            startMinute = totalMinutesNext % 60; // Оновлюємо хвилини
        }

        console.log(newSchedule)
        setSchedule(newSchedule); // Зберігаємо розклад у стані
    };

    return (
        <div className="container">
            <div className="schedule-container">
                <h1>Розклад дзвінків</h1>
                <div className="schedule-table">
                    <div className="table-header">
                        <span>Заняття №</span>
                        <span>Початок</span>
                        <span>Кінець</span>
                    </div>
                    {schdules.map((cls) => (
                        <div className="table-row" key={cls.id}>
                            <span>{cls.id}</span>
                            <input
                                type="time"
                                value={cls.start}
                                onChange={(e) => handleInputChange(cls.id, "start", e.target.value)}
                                className="time-input"
                            />
                            <input
                                type="time"
                                value={cls.end}
                                onChange={(e) => handleInputChange(cls.id, "end", e.target.value)}
                                className="time-input"
                            />
                            {roleName == "Teacher" ?
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteSchedule(cls.id)}
                                >
                                    Видалити
                                </button>
                                : null}

                        </div>
                    ))}
                    {roleName == "Teacher" ?
                        <button className="add-btn" onClick={addSchedule}>
                            Додати
                        </button>
                        : null}
                </div>
                {roleName == "Teacher" ?
                    <div className="schedule-settings">
                        <div className="input-group">
                            <label>Початок:</label>
                            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Тривалість:</label>
                            <input type="number" value={durationTime} onChange={(e) => setDurationTime(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Тривалість перерви:</label>
                            <input type="number" value={durationBreak} onChange={(e) => setDurationBreak(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Кількість занять:</label>
                            <input type="number" value={amountOfLessons} onChange={(e) => setAmoutOfLessons(e.target.value)} />
                        </div>
                        <button className="generate-btn" onClick={generateSchedule}>Згенерувати розклад</button>
                    </div>
                    : null}
                {roleName == "Teacher" ?
                    <button className="save-btn">Зберегти</button>
                    : null}
            </div>
        </div>
    )
}
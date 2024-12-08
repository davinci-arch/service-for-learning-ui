
import "../styles/MarksPage.scss"
import MarksHeader from "./MarksHeader";
import Table from "./Table"
import { useState } from "react";
export default function MarksPage() {
    const [students, setStudents] = useState([
        { name: "Студент 1", grades: [8, 9, 10, 7, 9, 8, 10] },
        { name: "Студент 2", grades: [7, 8, 9, 6, 8, 9, 10] },
        { name: "Студент 3", grades: [9, 10, 10, 8, 9, 9, 10] },
        { name: "Студент 4", grades: [6, 7, 8, 7, 6, 8, 9] },
        { name: "Студент 5", grades: [10, 10, 9, 10, 9, 8, 10] },
    ]);

    const [roleName, setRoleName] = useState("Teacher")

    const [dates, setDates] = useState([
        "01.09",
        "08.09",
        "15.09",
        "22.09",
        "29.09",
        "06.10",
        "13.10",
    ]);
    const addNewDate = () => {
        if (roleName !== "Teacher") return;
        const newDate = prompt("Введіть нову дату (формат: DD.MM):");
        if (newDate) {
            setDates([...dates, newDate]);
            setStudents(
                students.map((student) => ({
                    ...student,
                    grades: [...student.grades, 0], // Додаємо оцінку за замовчуванням
                }))
            );
        }
    };
    const updateDate = (index) => {
        if (roleName !== "Teacher") return;
        const updatedDate = prompt("Введіть нову дату (формат: DD.MM):", dates[index]);
        if (updatedDate) {
            const newDates = [...dates];
            newDates[index] = updatedDate;
            setDates(newDates);
        }
    };
    const updateGrade = (studentIndex, gradeIndex) => {
        if (roleName !== "Teacher") return;
        const updatedGrade = prompt(
            "Введіть нову оцінку (число від 1 до 12):",
            students[studentIndex].grades[gradeIndex]
        );
        if (updatedGrade && !isNaN(updatedGrade) && updatedGrade >= 1 && updatedGrade <= 12) {
            const newStudents = [...students];
            newStudents[studentIndex].grades[gradeIndex] = parseInt(updatedGrade, 10);
            setStudents(newStudents);
        } else {
            alert("Будь ласка, введіть число від 1 до 12.");
        }
    };

    return (
        <div className="class-journal">
            <MarksHeader />
            {roleName == "Teacher" && (
                <div className="actions">
                    <button className="add-date-button" onClick={addNewDate}>
                        Додати нову колонку
                    </button>
                    <button className="save-button">
                        Зберегти
                    </button>
                </div>
            )}


            <Table
                dates={dates}
                students={students}
                updateDate={updateDate}
                updateGrade={updateGrade}
            />
        </div>
    );
}
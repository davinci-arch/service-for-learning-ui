
import "../styles/MarksPage.scss"
import MarksHeader from "./MarksHeader";
import Table from "./Table"
export default function MarksPage() {
    const students = [
        { name: "Студент 1", grades: [8, 9, 10, 7, 9, 8, 10] },
        { name: "Студент 2", grades: [7, 8, 9, 6, 8, 9, 10] },
        { name: "Студент 3", grades: [9, 10, 10, 8, 9, 9, 10] },
        { name: "Студент 4", grades: [6, 7, 8, 7, 6, 8, 9] },
        { name: "Студент 5", grades: [10, 10, 9, 10, 9, 8, 10] },
    ];

    const dates = ["01.09", "08.09", "15.09", "22.09", "29.09", "06.10", "13.10"];


    return (
        <div className="class-journal">
            <MarksHeader className="header" />
            <Table students={students} dates={dates} />
        </div>
    );
}
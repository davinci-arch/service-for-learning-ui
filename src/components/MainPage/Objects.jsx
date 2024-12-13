import { useState } from "react"
import "../styles/ObjectsPage.scss"
import ObjectPageCard from "./ObjectPageCard"
// Path to the icon image
import addSubjectIcon from "/src/assets/addSubjest.png"; 

export default function ObjectsPage(role) {

    const [firstname, setFirstname] = useState("Олександр")
    const [nameObject, setNameObject] = useState("")
    const [roleObject, setRole] = useState("Teacher")
    const [objects, setObjects] = useState([
        {
            objname: "Фізика",
            objdescription: "Опис предметasdff fffffffffffffffff ffffffff fasdfasfffуп редметasdf fffffffffff ffffffffffffffffasdf asfffупр едметas dfffffff fffff fffff ffffff fffff asdfas fffу Опис предметasdff fffffffffffffffff ffffffff fasdfasfffуп редметasdf fffffffffff ffffffffffffffffasdf asfffупр едметas dfffffff fffff fffff ffffff fffff asdfas fffу Опис  fffff fffff ffffff fffff asdfas fffу",
            objteacher: "Ало Ало Алович"
        },
        {
            objname: "Математика",
            objdescription: "Опис предмету",
            objteacher: "Павло Павло Павлович"
        },
        {
            objname: "Фізра",
            objdescription: "Опис предмету",
            objteacher: "Тиран Тиран Тиранович"
        },
        {
            objname: "Фізра",
            objdescription: "Опис предмету",
            objteacher: "Тиран Тиран Тиранович"
        },
    ]
    )
    const handleObjectName = (e) => {
        const value = e.target.value
        setNameObject(value)
    }

    const handleCreateSubject = () => {
        // Functionality for creating a new subject goes here
        console.log("Create new subject button clicked");
      };

    const filteredObjects = objects.filter((obj) =>
        obj.objname.toLowerCase().includes(nameObject.toLowerCase())
    );

    return (
        <div className="container">
          <h3>Вітаємо, {firstname}. Ось перелік предметів на які Ви зареєстровані.</h3>
          
          <div className="input-group">
            <span>Введіть назву предмету:</span>
            <input
              type="text"
              value={nameObject}
              onChange={e => handleObjectName(e)}
            />
            
            {/* Conditionally rendering the 'Create Subject' button if roleObject is "Teacher" */}
            {/* {roleObject === "Teacher" && (
              <div className="create-subject-btn">
                <img
                  src="/src/assets/addSubjest.png"
                  alt="Create new subject"
                  className="create-subject-btn-img"
                />
              </div>
            )} */}
          </div>
      
          <div className="objects">
            {filteredObjects.length === 0 ? (
              <p>Нічого не знайдено</p> // Повідомлення якщо немає відповідних предметів
            ) : (
              filteredObjects.map((value, index) => (
                <ObjectPageCard data={value} key={index} />
              ))
            )}
          </div>
        </div>
      );
      
}
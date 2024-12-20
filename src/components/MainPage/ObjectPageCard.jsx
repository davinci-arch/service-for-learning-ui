
import "../styles/ObjectPage.scss"
import { useState } from "react"
export default function ObjectPageCard({ data }) {

    const [rolename, setRoleName] = useState("Teacher")

    return (
        <div className="obj">
            <div className="obj-container">
                <img src="/src/assets/user.png" alt="Teacher avatar" id="teacher-avatar" />
                <div className="obj-data-desription">
                    <div className="object-header">
                        <span>{data.objname}</span>
                        {rolename == "Teacher" ? <span>Видалити предмет</span> : null}
                    </div>
                    <div className="separator"></div>
                    <div className="obj-description">{data.objdescription}</div>
                </div>
            </div>
            <div>
                <div className="separator"></div>
                <span>Викладач: {data.objteacher}</span>
                <div className="separator"></div>
            </div>
        </div>
    )
}
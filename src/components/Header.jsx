import { useState } from "react"

import "./styles/Header.scss"
import { Link } from "react-router-dom"
export default function Header() {

    const [rolename, setRoleName] = useState("Викладач")

    return (
        <header>
            <div>
                <Link to="/">Логотип</Link>
                </div>
            <div className="navigation">
                <ul>
                    <li>Розклад перездач</li>
                    <li><Link to="/lesson-schedule">Розклад дзвінків</Link></li>
                    <li>Розклад занять</li>
                    <li>Довідник користувача</li>
                </ul>
            </div>
            <div>
                {rolename === "Teacher" ? (
                    <span>Створити новий предмет</span>
                ) : rolename === "Student" ? (
                    <span>Приєднатися до існуючого предмету</span>
                ) : null}

            </div>
            <div className="auth-menu">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li></li>
                    <li>
                        <Link to="registration">Registration</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="profile-menu">
                <div className="user-identity">
                    <img src="src/assets/user.png" alt="Avatar photo" id="avatar-photo" />
                    <span>Викладач</span>
                </div>
                <span>Змінити налаштування</span>
            </div> */}
        </header>
    )
}

import "../styles/NavigationPanel.scss"
export default function NavigationPanel() {
    return (
        <div className="navigation-panel">
            <h5>Панель швидких дій</h5>
            <div className="section">
                <span className="section-title">Навігація</span>
                <div className="separator"></div>
                <ul>
                    <li>На головну</li>
                    <li>Стрічка новин</li>
                </ul>
            </div>
            <div className="section">
                <span className="section-title">Ресурси</span>
                <div className="separator"></div>
                <ul>
                    <li>Електронний журнал</li>
                    <li>Графік успішності</li>
                    <li>Розділи предмету</li>
                    <li>Учасники</li>
                    <li>Матеріали за попередні роки</li>
                </ul>
            </div>
            <div className="section">
                <span className="section-title">Керування предметом</span>
                <div className="separator"></div>
                <ul>
                    <li>Видалити предмет</li>
                    <li>Від'єднатись від предмету</li>
                </ul>
            </div>
            <div className="section">
                <span className="section-title">Завдання</span>
                <div className="separator"></div>
                <ul>
                    <li>Мої завдання</li>
                </ul>
            </div>
        </div>
    );
}
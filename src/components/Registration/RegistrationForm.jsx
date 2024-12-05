import React from 'react';
import '../Login/Login.css';
//import './RegistrationForm.css'

function RegistrationForm({ setIsRegistering }) {
  return (
    <div className="login-container">
      <h2>Реєстрація</h2>
      <form>
        <input type="text" placeholder="Ім'я *" required />
        <input type="text" placeholder="Прізвище *" required />
        <input type="text" placeholder="По батькові" />
        <input type="email" placeholder="Електронна адреса *" required />
        <input type="password" placeholder="Пароль *" required />
        <div className="actions">
          <div>
            <input type="checkbox" id="email-consent" />
            <label htmlFor="email-consent">Я погоджуюсь з відправкою сповіщень на електронну пошту</label>
          </div>
          <div>
            <input type="checkbox" id="terms-consent" required />
            <label htmlFor="terms-consent">Я погоджуюсь з Умовами обслуговування та Політикою конфіденційності</label>
          </div>
        </div>
        <button type="submit">Зареєструватись</button>
      </form>
      <p onClick={() => setIsRegistering(false)} className="back-to-login">АВТОРИЗАЦІЯ</p> {/* This link switches back to login */}
    </div>
  );
}

export default RegistrationForm;

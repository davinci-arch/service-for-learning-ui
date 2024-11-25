import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-wrapper">
      <div className="logo">Логотип</div> {/* Placeholder for a logo */}
      <div className="login-container">
        <h2>Для початку роботи необхідно авторизуватись</h2>
        <form>
          <input type="email" placeholder="Електронна адреса" />
          <input type="password" placeholder="Пароль" />
          <div className="actions">
            <button type="submit">Увійти</button>
            <a href="#">Забули пароль/Реєстрація</a>
          </div>
          <p>Вхід через google аккаунт</p>
          <button className="google-login" type="button">Google</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

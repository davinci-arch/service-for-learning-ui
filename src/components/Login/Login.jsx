import React from 'react';
import './Login.css';
import RegistrationForm from '../Registration/RegistrationForm'; // Correct relative path
import { useState } from 'react';


function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="logo">Логотип</div> {/* Placeholder for a logo */}
      
      {isRegistering ? (
        // Show registration form if the user is registering
        <RegistrationForm setIsRegistering={setIsRegistering} />
      ) : (
        // Show login form if not registering
        <div className="login-container">
          <h2>Для початку роботи необхідно авторизуватись</h2>
          <form>
            <input type="email" placeholder="Електронна адреса" />
            <input type="password" placeholder="Пароль" />
            <div className="actions">
              <button type="submit">Увійти</button>
              <a href="#" onClick={() => setIsRegistering(true)}>Реєстрація</a> {/* This link switches to registration */}
            </div>
            <p>Вхід через google аккаунт</p>
            <button className="google-login" type="button">Google</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;

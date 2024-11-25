// src/components/Login.js
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import './Login.css';  // For styling
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }
  
    try {
      const response = await axios.post('https://your-api.com/login', { email, password });
      console.log('Logged in successfully', response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">Логотип</div>
      <h2>Для початку роботи необхідно авторизуватись</h2>
      
      <InputField
        type="email"
        placeholder="Електронна адреса"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <div className="actions">
        <Button text="Увійти" onClick={handleLogin} />
        <a href="/forgot-password">Забули пароль/Реєстрація</a>
      </div>
      
      <div className="google-login">
        <p>Вхід через google аккаунт</p>
        <Button text="Google" onClick={() => console.log('Google Login')} />
      </div>
    </div>
  );
};

export default Login;

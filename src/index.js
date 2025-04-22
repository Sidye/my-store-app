// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Используем 'react-dom/client' для React 18+
import './index.css';                   // Импорт базовых стилей (если есть)
import App from './App';                   // Импорт твоего главного компонента App

// Находим элемент в HTML, куда будем монтировать приложение
const rootElement = document.getElementById('root');

// Создаем "корень" React для этого элемента
const root = ReactDOM.createRoot(rootElement);

// Рендерим (отрисовываем) твой компонент App внутри этого корня
// React.StrictMode помогает выявлять потенциальные проблемы
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
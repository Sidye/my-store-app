// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Создадим файл для стилей

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, страница, которую вы ищете, не существует.</p>
      <Link to="/products" className="link-button">
        Перейти к списку товаров
      </Link>
    </div>
  );
};

export default NotFoundPage;
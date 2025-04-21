// src/components/Rating.js
import React from 'react';
import './Rating.css'; // Создадим файл для стилей

const Rating = ({ rating }) => {
  // Проверка на случай, если rating еще не загрузился или отсутствует
  if (!rating || typeof rating.rate !== 'number') {
    return <div>Рейтинг недоступен</div>;
  }

  const roundedRate = Math.round(rating.rate);
  const maxStars = 5;

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} className={index < roundedRate ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
       {/* Отображаем числовое значение и количество отзывов */}
      <span className="rating-value"> {rating.rate.toFixed(1)} ({rating.count} отзывов)</span>
    </div>
  );
};

export default Rating;
// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import './ProductDetailPage.css'; // Создадим файл для стилей

const ProductDetailPage = () => {
  const { id } = useParams(); // Получаем id из URL
  const navigate = useNavigate(); // Для кнопки "Назад"
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
             if (response.status === 404) {
                 throw new Error(`Товар с ID ${id} не найден.`);
             }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        console.error("Ошибка при загрузке товара:", e);
        setError(`Не удалось загрузить товар. ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Перезапускаем эффект, если id изменился

  if (loading) {
    return <div className="status-message">Загрузка информации о товаре...</div>;
  }

  if (error) {
    return (
        <div className="status-message error-message">
            Ошибка: {error}
            <button onClick={() => navigate('/products')} className="back-button">К списку товаров</button>
        </div>
    );
  }

  if (!product) {
    // Это состояние не должно возникать при правильной обработке ошибки, но на всякий случай
     return <div className="status-message">Товар не найден.</div>;
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Назад
      </button>
      <div className="product-detail-content">
        <img src={product.image} alt={product.title} className="product-detail-image" />
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-category">Категория: {product.category}</p>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <Rating rating={product.rating} />
          <p className="product-detail-description">{product.description}</p>
          {/* Можно добавить кнопку "Купить", если нужно */}
          {/* <button className="buy-button">Добавить в корзину</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
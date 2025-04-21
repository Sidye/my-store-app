// src/pages/ProductListPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './ProductListPage.css'; // Создадим файл для стилей

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Сбрасываем ошибку перед новым запросом
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error("Ошибка при загрузке товаров:", e);
        setError(`Не удалось загрузить товары. ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Пустой массив зависимостей - запускаем эффект один раз при монтировании

  if (loading) {
    return <div className="status-message">Загрузка товаров...</div>;
  }

  if (error) {
    return <div className="status-message error-message">Ошибка: {error}</div>;
  }

  return (
    <div className="product-list-page">
      <h1>Список товаров</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
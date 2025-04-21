// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './ProductCard.css'; // Создадим файл для стилей

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <img src={product.image} alt={product.title} className="product-card-image" />
        <h3 className="product-card-title">{product.title}</h3>
      </Link>
      <Rating rating={product.rating} />
       {/* Можно добавить цену, если нужно */}
      {/* <p className="product-card-price">${product.price.toFixed(2)}</p> */}
    </div>
  );
};

export default ProductCard;